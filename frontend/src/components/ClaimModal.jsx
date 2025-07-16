import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { FaGift, FaTimes } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";

export default function ClaimModal({ user, onClose, onClaimSuccess }) {
  const [loading, setLoading] = useState(false);
  const API = import.meta.env.VITE_API_BASE;

  const handleClaim = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/api/users/${user._id}/claim`);
      const points = response?.data?.data?.awardedPoints || 0;

      toast.success(`🎉 ${points} points awarded to ${user.name}!`);
      onClaimSuccess();
      onClose();
    } catch (error) {
      toast.error("❌ Failed to claim points. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {user && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full sm:max-w-md bg-white text-black border border-gray-800 rounded-2xl shadow-2xl p-6 relative overflow-hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-200 text-lg transition"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Heading */}
            <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex  items-center gap-2">
              <FaGift className="text-yellow-600" />
              Claim Points
            </h3>

            {/* User Info */}
            <div className="space-y-3 text-base">
              <p>
                👤 <span className="font-semibold">Name:</span>{" "}
                <span className="text-orange-700">{user.name}</span>
              </p>
              <p>
                ⭐ <span className="font-semibold">Current Points:</span>{" "}
                <span className="text-orange-700">{user.totalPoints}</span>
              </p>
            </div>

            {/* Claim Button */}
            <button
              onClick={handleClaim}
              disabled={loading}
              className={`mt-6 w-full py-2 rounded-lg font-semibold text-lg transition duration-300 ${
                loading
                  ? "bg-yellow-300 text-gray-700 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-400 text-black"
              }`}
            >
              {loading ? "Claiming..." : "🎁 Claim Now"}
            </button>

            {/* Cancel */}
            <button
              onClick={onClose}
              className="w-full mt-4 text-gray-500 hover:text-gray-300 text-sm underline transition"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
