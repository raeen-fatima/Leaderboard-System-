import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    },
    points: {
        type: Number, required: true
    },
    claimedAt: {
        type: Date, default: Date.now
    }
});

export default mongoose.model("ClaimHistory", historySchema);
