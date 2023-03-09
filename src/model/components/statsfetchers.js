import { request } from "./fetchData.js";
import axios from "axios";


const GRAPHQL_REPOS_FIELD = `
  repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}, after: $after) {
    totalCount
    nodes {
      name
      stargazers {
        totalCount
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
`;

const GRAPHQL_REPOS_QUERY = `
  query userInfo($login: String!, $after: String) {
    user(login: $login) {
      ${GRAPHQL_REPOS_FIELD}
    }
  }
`;

const GRAPHQL_STATS_QUERY = `
  query userInfo($login: String!, $after: String) {
    user(login: $login) {
      name
      login
      contributionsCollection {
        totalCommitContributions
        restrictedContributionsCount
      }
      repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
        totalCount
      }
      pullRequests(first: 1) {
        totalCount
      }
      openIssues: issues(states: OPEN) {
        totalCount
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }
      followers {
        totalCount
      }
      ${GRAPHQL_REPOS_FIELD}
    }
  }
`;

/**
 * Stats fetcher object.
 *
 * @param {import('axios').AxiosRequestHeaders} variables Fetcher variables.
 * @param {string} token GitHub token.
 * @returns {Promise<import('../common/types').Fetcher>} Stats fetcher response.
 */
const fetcher = (variables, token) => {
  const query = !variables.after ? GRAPHQL_STATS_QUERY : GRAPHQL_REPOS_QUERY;
  return request(
    {
      query,
      variables,
    },
    {
      Authorization: `bearer ${token}`,
    },
  );
};


/**
 * fetch formatted data
 * @param {String} username 
 * @param {String} token 
 * @returns {JSON} formatted stats
 */
const statsFetcher = async (username, token) => {
    let stats;
    let hasNextPage = true;
    let endCursor = null;
    while (hasNextPage) {
      const variables = { login: username, first: 100, after: endCursor };
      let res = await fetcher(variables, token)
      if (res.data.errors) return res;
  
      // Store stats data.
      const repoNodes = res.data.data.user.repositories.nodes;
      if (!stats) {
        stats = res;
      } else {
        stats.data.data.user.repositories.nodes.push(...repoNodes);
      }
  
      // Disable multi page fetching on public Vercel instance due to rate limits.
      const repoNodesWithStars = repoNodes.filter(
        (node) => node.stargazers.totalCount !== 0,
      );
      hasNextPage =
        process.env.FETCH_MULTI_PAGE_STARS === "true" &&
        repoNodes.length === repoNodesWithStars.length &&
        res.data.data.user.repositories.pageInfo.hasNextPage;
      endCursor = res.data.data.user.repositories.pageInfo.endCursor;
    }

    return stats;
  };

 // https://developer.github.com/v3/search/#search-commits
 const fetchTotalCommits = (variables, token) => {
    return axios({
      method: "get",
      url: `https://api.github.com/search/commits?q=author:${variables.login}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.cloak-preview",
        Authorization: `token ${token}`,
      },
    });
  };



export {fetcher, fetchTotalCommits, statsFetcher};