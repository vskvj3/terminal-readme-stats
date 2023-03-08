import { statsFetcher } from "./components/statsfetchers.js";
import { fetchTotalCommits } from "./components/statsfetchers.js";

const stats = async (username, token)=> {
    const fetcheddata = await statsFetcher(username, token);
    const user = fetcheddata.data.data.user

    const stats = {
        name: "",
        totalPRs: 0,
        totalCommits: 0,
        totalIssues: 0,
        totalStars: 0,
        contributedTo: 0
    };

    // find name 
    stats.name = fetcheddata.data.data.user.name

    // find the total stars
    let sum=0
    user.repositories.nodes.forEach(element => {
        sum += element.stargazers.totalCount
    });
    stats.totalStars = sum

    // find total pull requests
    stats.totalPRs = user.pullRequests.totalCount

    // find total issues
    stats.totalIssues = user.openIssues.totalCount + fetcheddata.data.data.user.closedIssues.totalCount

    //find total contributions
    stats.contributedTo = user.repositoriesContributedTo.totalCount

    // find total commits
    stats.totalCommits = user.contributionsCollection.totalCommitContributions
    const totalcommits = await fetchTotalCommits({login: username}, token)
    stats.totalCommits += totalcommits.data.total_count;
    stats.totalCommits += user.contributionsCollection.restrictedContributionsCount;

    


    return stats;

}

export {stats}