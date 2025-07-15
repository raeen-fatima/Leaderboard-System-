export const successResponse = (res, data, message = "Success") => {
    return res.status(200).json({ success: true, message, data });
};

export const errorResponse = (res, error, code = 500) => {
    return res.status(code).json({ success: false, message: error.message || error });
};
