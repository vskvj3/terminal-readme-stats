import axios from "axios";
import dotenv from "dotenv";
dotenv.config()

const token = process.env.TOKEN;

const request = async (data, headers) => {
  // @ts-ignore
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
};

const fetchTopThreeRepo = (variables, token) => {
  return request({
    query: `
            query userInfo($login: String!){ 
                user(login: $login) {
                        repositories(first: 3, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}) {
                          nodes {
                            name
                            stargazers {
                              totalCount
                            }
                          }
                        }
                      }
              }
              `,
    variables,
  },
  {
    Authorization: `bearer ${token}`,
  }
  );
};

const topThreeRepo = async()=> {
    const res = await fetchTopThreeRepo({login: "ashutosh1919"}, token);
    return(res.data.data.user.repositories.nodes);
}

const fetchData = async (variables, token) => {
  return request(
    {
      query: `
            query userInfo($login: String!, $after: String) {
              user(login: $login) {
                repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}, after: $after) {
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
              }
            }
            `,
      variables,
    },
    {
      Authorization: `bearer ${token}`,
    }
  );
};

const fetchRepo = () => {};

export default topThreeRepo;
