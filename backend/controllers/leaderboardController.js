import User from "../model/User.js";
import ClaimHistory from "../model/ClaimHistory.js";
import { successResponse, errorResponse } from "../utils/response.js";

/**
 * @desc    Return leaderboard sorted by totalPoints
 */
export const getLeaderboard = async (req, res) => {
    try {
        const users = await User.find().sort({ totalPoints: -1 });

        const leaderboard = users.map((u, index) => ({
            rank: index + 1,
            name: u.name,
            totalPoints: u.totalPoints,
        }));

        return successResponse(res, leaderboard);
    } catch (err) {
        return errorResponse(res, err);
    }
};

/**
 * @desc    Return claim point history with user names
 */
export const getClaimHistory = async (req, res) => {
    try {
        const history = await ClaimHistory
            .find()
            .populate("userId", "name")
            .sort({ claimedAt: -1 });

        return successResponse(res, history);
    } catch (err) {
        return errorResponse(res, err);
    }
};
