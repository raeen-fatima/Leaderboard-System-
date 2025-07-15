import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaStar, FaClock } from "react-icons/fa";
import BottomNav from '../components/BottomNav.jsx'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = import.meta.env.VITE_API_BASE;

export default function ClaimHistory() {
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${API}/api/history`);
      if (Array.isArray(res.data.data)) {
        // Sort by newest first
        const sorted = res.data.data.sort(
          (a, b) => new Date(b.claimedAt) - new Date(a.claimedAt)
        );
        setHistory(sorted);
      } else {
        setHistory([]);
      }
    } catch (err) {
      toast.error("❌ Failed to fetch history", err);
    }
  };

  const paginated = history.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(history.length / perPage);

  return (
    <>
    <BottomNav />
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.6 }}
      className="min-h-screen bg-gradient-to-r from-[#1e1e2f] via-[#1a1a2e] to-[#111827]  text-white px-4 py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">
        ⏱ Claim History
      </h2>

      {/* Table Headers */}
      <div className="hidden md:grid grid-cols-12 text-gray-300 mb-2 max-w-5xl mx-auto px-2">
        <div className="col-span-4 font-semibold">Name</div>
        <div className="col-span-3 font-semibold">Points</div>
        <div className="col-span-5 font-semibold text-right">Time</div>
      </div>

      {/* History List */}
      <ul className="space-y-4 max-w-5xl mx-auto">
        {paginated.map((entry, i) => (
          <motion.li
            key={entry._id}
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-[#1e1e2f] via-[#1a1a2e] to-[#111827] p-4 rounded-xl border border-white/10 flex flex-col gap-3 md:grid md:grid-cols-12 md:items-center shadow-md hover:shadow-yellow-400/20"
          >
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-lg">
                {entry.userId?.name?.charAt(0).toUpperCase() || "?"}
              </div>
              <div>
                <div className="font-semibold">{entry.userId?.name}</div>
                <div className="text-sm text-gray-400 md:hidden">
                  {new Date(entry.claimedAt).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="md:col-span-3 flex items-center gap-2">
              <FaStar className="text-yellow-300" />
              <span>{entry.points} pts</span>
            </div>

            <div className="md:col-span-5 text-sm text-gray-300 text-right hidden md:block">
              <FaClock className="inline-block mr-2" />
              {new Date(entry.claimedAt).toLocaleString()}
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-6 flex-wrap">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
        >
          Prev
        </button>
        <span className="text-lg font-bold">
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
        >
          Next
        </button>
      </div>
    </motion.div>
    </>

  );
}
