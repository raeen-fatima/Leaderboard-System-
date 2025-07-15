import express from "express";
import { getUsers, addUser } from "../controllers/userController.js";
import { claimPoints } from "../controllers/claimController.js";
import { getLeaderboard, getClaimHistory } from "../controllers/leaderboardController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", addUser);

router.post("/users/:id/claim", claimPoints);

router.get("/leaderboard", getLeaderboard);
router.get("/history", getClaimHistory);

export default router;
