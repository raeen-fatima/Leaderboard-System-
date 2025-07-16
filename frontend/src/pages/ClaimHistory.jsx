import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import Pagination from "../components/Pagination";

import BottomNav from "../components/BottomNav.jsx";
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
        className="min-h-screen text-black  py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          ⏱ Claim History
        </h2>

        {/* Table Headers */}
        <div className="hidden md:grid grid-cols-12 text-gray-300 mb-2 max-w-5xl mx-auto px-2">
          <div className="col-span-4 font-semibold">Name</div>
          <div className="col-span-3 font-semibold">Points</div>
          <div className="col-span-5 font-semibold text-right">Time</div>
        </div>

        {/* History List */}
        <ul className="bg-white border border-gray-600 rounded-2xl space-y-4 max-w-5xl mx-auto px-2">
          {paginated.map((entry, i) => (
            <motion.li
              key={entry._id}
              whileHover={{ scale: 1.01 }}
              className="bg-white p-4  border-b border-gray-400 last:border-none flex flex-col gap-3 md:grid md:grid-cols-12 md:items-center hover:shadow-md"
            >
              <div className="md:col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-black text-white font-bold rounded-full flex items-center justify-center text-lg">
                  {entry.userId?.name?.charAt(0).toUpperCase() || "?"}
                </div>
                <div>
                  <div className="font-semibold">{entry.userId?.name}</div>
                  <div className="text-sm text-gray-600 md:hidden">
                    {new Date(entry.claimedAt).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 text-orange-600 flex items-center gap-2">
                <span>+{entry.points}pts</span>

                <TiStarburst className="text-orange-500 text-xl" />
              </div>

              <div className="md:col-span-5 text-sm text-gray-300 text-right hidden md:block">
                <FaClock className="inline-block mr-2" />
                {new Date(entry.claimedAt).toLocaleString()}
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Pagination */}
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </motion.div>
    </>
  );
}
