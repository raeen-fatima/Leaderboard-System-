import User from "../model/User.js";
import { successResponse, errorResponse } from "../utils/response.js";

/**
 * @desc    Fetch all users
 */
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return successResponse(res, users);
    } catch (err) {
        return errorResponse(res, err);
    }
};

/**
 * @desc    Add a new user to the database
 */
export const addUser = async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = new User({ name });
        await newUser.save();
        return successResponse(res, newUser, "User added successfully");
    } catch (err) {
        return errorResponse(res, err);
    }
};
