import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function UserCard({ user, index, page, perPage, onClick }) {
  const rank = (page - 1) * perPage + index + 1;

  return (
    <motion.li
      onClick={() => onClick(user)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="cursor-pointer bg-gradient-to-r from-[#1e1e2f] via-[#1a1a2e] to-[#111827] text-white rounded-xl px-4 py-3 flex items-center justify-between gap-3 shadow-md hover:shadow-yellow-400/20"
    >
      {/* Rank */}
      <div className="min-w-[30px] text-yellow-400 font-bold text-lg text-center">
        #{rank}
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-3 flex-1 overflow-hidden">
        <div className="w-10 h-10 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-lg uppercase shrink-0">
          {user.name?.charAt(0)}
        </div>
        <div className="truncate font-medium text-white text-md">
          {user.name}
        </div>
      </div>

      {/* Points */}
      <div className="flex items-center gap-2 text-yellow-300 font-semibold shrink-0">
        <FaStar className="text-xl" />
        <span className="text-sm">{user.totalPoints} pts</span>
      </div>
    </motion.li>
  );
}
