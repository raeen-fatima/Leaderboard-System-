import User from "../model/User.js";
import ClaimHistory from "../model/ClaimHistory.js";
import { successResponse, errorResponse } from "../utils/response.js";

/**
 * @desc    Claim random points for a user and store in DB
 */
export const claimPoints = async (req, res) => {
    const io = req.app.get("io");

    try {
        const { id } = req.params;

        // Validate user
        const user = await User.findById(id);
        if (!user) return errorResponse(res, "User not found", 404);

        // Generate random points (1–10)
        const points = Math.floor(Math.random() * 10) + 1;

        // Update user total points
        user.totalPoints += points;
        await user.save();

        // Log claim in history
        await ClaimHistory.create({ userId: id, points });

        // Emit updated leaderboard to all clients
        const allUsers = await User.find().sort({ totalPoints: -1 });
        const leaderboard = allUsers.map((u, i) => ({
            rank: i + 1,
            name: u.name,
            totalPoints: u.totalPoints,
        }));
        io.emit("leaderboardUpdated", leaderboard);

        return successResponse(res, {
            userId: id,
            awardedPoints: points,
            updatedTotal: user.totalPoints,
        }, "Points claimed successfully");
    } catch (err) {
        return errorResponse(res, err);
    }
};
