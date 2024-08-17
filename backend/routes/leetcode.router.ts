import express from 'express'; 
import { userContestHistory, userProfileDetails } from '../controller/leetcode.controller';

const router = express.Router();
router.get('', userProfileDetails);
router.get('/contests/history', userContestHistory);

export default router;