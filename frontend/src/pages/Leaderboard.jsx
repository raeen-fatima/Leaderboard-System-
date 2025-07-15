import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import Pagination from "../components/Pagination";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = import.meta.env.VITE_API_BASE;

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get(`${API}/api/leaderboard`);
      if (Array.isArray(res.data.data)) {
        setUsers(res.data.data);
      }
    } catch (error) {
      toast.error("❌ Failed to fetch leaderboard", error);
    }
  };

  const paginatedUsers = users.slice(
    3 + (page - 1) * perPage,
    3 + page * perPage
  );
  const totalPages = Math.ceil((users.length - 3) / perPage);

  return (
    <div className="min-h-screen bg-[url('../assets/leaderboard.png')] bg-cover bg-no-repeat bg-center px-4 py-8 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-400">
        🏆 Leaderboard
      </h2>

      {/* Top 3 Users Podium */}
      <div className="flex justify-center items-end mb-10 w-full gap-0 md:gap-4">
        {[1, 0, 2].map((pos, i) => {
          const user = users[pos];
          if (!user) return null;

          const rank = pos + 1;
          const size =
            rank === 1
              ? "w-14 h-14 sm:w-24 sm:h-24"
              : "w-10 h-10 sm:w-20 sm:h-20";
          const elevation = rank === 1 ? "translate-y-0" : "translate-y-4";
          const bg =
            rank === 1
              ? "bg-yellow-400"
              : rank === 2
              ? "bg-gray-300"
              : "bg-orange-400";

          return (
            <motion.div
              key={user._id}
              className={`flex flex-col items-center px-4 py-4 sm:px-20 sm:py-20 rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-[#1e1e2f] via-[#1a1a2e] to-[#111827] ${elevation} w-[90px] sm:w-[140px]`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute -top-4 px-3 py-1 rounded-full bg-yellow-600 text-white font-bold text-sm">
                #{rank}
              </div>
              <div
                className={`${size} ${bg} rounded-full flex items-center justify-center  text-black text-lg font-bold mb-2`}
              >
                {user.name?.charAt(0).toUpperCase() || <FaUser />}
              </div>
              <div className="text-center text-xs font-semibold truncate w-full">
                {user.name}
              </div>
              <div className="text-yellow-300 flex items-center gap-1 text-xs mt-1">
                <FaStar /> {user.totalPoints.toLocaleString()} pts
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-12 text-gray-300 mb-4 max-w-4xl mx-auto px-2">
        <div className="col-span-2 font-semibold">Rank</div>
        <div className="col-span-6 font-semibold">Name</div>
        <div className="col-span-4 font-semibold text-right">Points</div>
      </div>

      {/* Rest of the Users */}
      <ul className="space-y-4 max-w-4xl mx-auto">
        {paginatedUsers.map((user, index) => (
          <li
            key={user._id}
            className="cursor-pointer bg-gradient-to-r from-[#1e1e2f] via-[#1a1a2e] to-[#111827] text-white rounded-xl px-4 py-3 flex items-center justify-between gap-3 shadow-md hover:shadow-yellow-400/20"
          >
            <div className="md:col-span-2 text-yellow-300 font-bold text-lg text-center">
              #{index + 4 + (page - 1) * perPage}
            </div>
            <div className="flex items-center gap-3 flex-1 overflow-hidden md:col-span-6">
              <div className="w-10 h-10 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-lg uppercase shrink-0">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div className="truncate font-medium text-white text-md">
                {user.name}
              </div>
            </div>
            <div className="md:col-span-4 flex justify-end items-center gap-2 text-white">
              <FaStar className="text-yellow-300" />
              <span className="text-md font-semibold">
                {user.totalPoints} pts
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
