import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaGift, FaTimes } from "react-icons/fa";

export default function ClaimModal({ user, onClose, onClaimSuccess }) {
  const [loading, setLoading] = useState(false);
  const API = import.meta.env.VITE_API_BASE;

  const handleClaim = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/api/users/${user._id}/claim`);
      const points = res?.data?.data?.awardedPoints || 0;

      toast.success(`🎉 ${points} points awarded to ${user.name}!`);
      onClaimSuccess();
      onClose();
    } catch (err) {
      toast.error("❌ Claim Failed:", err);
      toast.error("Something went wrong while claiming points.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {user && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center sm:items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full sm:max-w-md bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-lg"
            >
              <FaTimes />
            </button>

            <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
              <FaGift className="text-yellow-300" />
              Claim Points
            </h3>

            <div className="space-y-3">
              <p>
                👤 <span className="font-semibold">Name:</span>{" "}
                <span className="text-yellow-300">{user.name}</span>
              </p>
              <p>
                ⭐ <span className="font-semibold">Current Points:</span>{" "}
                <span className="text-yellow-300">{user.totalPoints}</span>
              </p>
            </div>

            <button
              onClick={handleClaim}
              disabled={loading}
              className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded-lg font-semibold text-lg transition duration-300"
            >
              {loading ? "Claiming..." : "🎁 Claim Now"}
            </button>

            <button
              onClick={onClose}
              className="w-full mt-4 text-gray-400 hover:text-gray-200 text-sm underline"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
