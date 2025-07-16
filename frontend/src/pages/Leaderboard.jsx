import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaUser } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
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
    <>
      <div className="px-0">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-black">
          🏆 Leaderboard
        </h2>
        <div className=" bg-white px-4 py-8 text-black rounded-2xl border border-gray-700">
          {/* 🏆 Top 3 Stylish Podium - Final Image Matching Version */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-12 justify-center items-end w-full max-w-md mx-auto">
            {[1, 0, 2].map((pos, i) => {
              const user = users[pos];
              if (!user) return null;

              const rank = pos + 1;
              const isCenter = pos === 0;

              const badge = rank === 1 ? "👑" : rank === 2 ? "🥈" : "🥉";
              const badgeSize =
                rank === 1 ? "text-6xl sm:text-8xl" : "text-4xl sm:text-5xl";
              const gradient =
                rank === 1
                  ? "bg-gradient-to-br from-yellow-400 to-yellow-200"
                  : rank === 2
                  ? "bg-gradient-to-br from-gray-400 to-gray-200"
                  : "bg-gradient-to-br from-orange-400 to-orange-200";

              const avatarSize = isCenter
                ? "w-20 h-20 sm:w-24 sm:h-24"
                : "w-16 h-16 sm:w-20 sm:h-20";

              const elevation = isCenter
                ? "-translate-y-6 z-10"
                : "translate-y-2 z-0";
              const shadow = isCenter ? "shadow-lg" : "";

              const cardSize = isCenter
                ? "py-5 px-4 sm:py-6 sm:px-5"
                : "py-4 px-3 sm:py-5 sm:px-4";

              return (
                <motion.div
                  key={user._id}
                  className={`rounded-2xl bg-white text-center ${cardSize} ${elevation} flex flex-col items-center transition-all`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  {/* Badge */}
                  <div className={`mb-2 ${badgeSize}`}>{badge}</div>
                  {/* Avatar */}
                  <div
                    className={`rounded-full ${gradient}  ${shadow} text-white font-bold flex items-center justify-center ${avatarSize} border border-orange-600 text-xl sm:text-2xl`}
                  >
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  {/* Name */}
                  <div className="mt-2 text-sm sm:text-base text-gray-800 font-semibold truncate">
                    {user.name}
                  </div>

                  {/* Points */}
                  <div className="mt-1 flex justify-center items-center text-xs sm:text-sm text-orange-700 font-semibold gap-1">
                    {user.totalPoints.toLocaleString()}
                    <TiStarburst className="text-orange-500 text-xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 text-black text-sm mb-4 max-w-4xl mx-auto px-2">
            <div className="col-span-2 font-semibold">Rank</div>
            <div className="col-span-6 font-semibold">Name</div>
            <div className="col-span-4 font-semibold text-right">Points</div>
          </div>
          {/* rested users */}
          <ul className="border border-gray-600 space-y-4 px-3 max-w-4xl mx-auto text-sm">
            {paginatedUsers.map((user, index) => (
              <li
                key={user._id}
                className=" border-b border-gray-300 last:border-none  px-2 py-3 flex items-center justify-between gap-2 hover:shadow-md transition-shadow bg-white"
              >
                {/* Rank + User Info */}
                <div className="flex items-center gap-4 flex-1 overflow-hidden">
                  {/* Rank */}
                  <div className="text-gray-600 font-medium text-sm text-center w-6 shrink-0">
                    {index + 4 + (page - 1) * perPage}
                  </div>

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 bg-black text-white font-bold rounded-full flex items-center justify-center text-lg uppercase shrink-0">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="truncate font-medium text-md">
                      {user.name}
                    </div>
                  </div>
                </div>

                {/* Points */}
                <div className="flex justify-end items-center gap-2">
                  <TiStarburst className="text-orange-500" />
                  <span className="text-sm font-semibold text-black">
                    {user.totalPoints}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </>
  );
}
