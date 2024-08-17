import axios from "axios"

const apiUrl = 'https://alfa-leetcode-api.onrender.com';

export const userProfileDetails = async (req, res) => {
    try {
        let { username } = req.query; 
        if(!username) {
            throw new Error('Username not found!');
        }
        const userInfo: any = await axios.get(apiUrl + `/userContestRankingInfo/${username}`); 
        const problemsSolvedInfo: any = await axios.get(apiUrl + `/${username}/solved`); 

        const result = {
            globalRanking: userInfo.data.data.userContestRanking.globalRanking, 
            rating: userInfo.data.data.userContestRanking.rating, 
            attendedContests: userInfo.data.data.userContestRanking.attendedContestsCount, 
            solvedProblems: problemsSolvedInfo.data.solvedProblem, 
            easySolved: problemsSolvedInfo.data.easySolved, 
            mediumSolved: problemsSolvedInfo.data.mediumSolved, 
            hardSolved: problemsSolvedInfo.data.hardSolved
        }
        return res.json({ data: result, success: true });
    } catch (error) {
        return res.json({ error: error.message, success: false });
    }
}

export const userContestHistory = async (req, res) => {
    try {
        let { username } = req.query; 
        if (!username) {
            throw new Error('Username not found!');
        }
        const contestHistory = await axios.get(apiUrl + `/${username}/contest`); 
        return res.json({ data: contestHistory.data, success: true });
    } catch (error) {
        return res.json({ error: error.message, success: false });
    }
}