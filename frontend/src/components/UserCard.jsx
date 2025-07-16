import { TiStarburst } from "react-icons/ti";
import { motion } from "framer-motion";

export default function UserCard({ user, index, page, perPage, onClick }) {
  const rank = (page - 1) * perPage + index + 1;

  return (
    <motion.li
      onClick={() => onClick(user)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className=" border-b border-gray-300 last:border-none cursor-pointer bg-white text-black  px-4 py-3 flex items-center justify-between gap-3 hover:shadow-yellow-400/20"
    >
      {/* Rank */}
      <div className="min-w-[30px] font-bold text-sm text-center">
        {rank}
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-3 flex-1 overflow-hidden">
        <div className="w-10 h-10 bg-black text-white font-bold rounded-full flex items-center justify-center text-lg uppercase shrink-0">
          {user.name?.charAt(0)}
        </div>
        <div className="truncate font-medium  text-sm">
          {user.name}
        </div>
      </div>

      {/* Points */}
      <div className="flex items-center gap-2 font-semibold shrink-0">
                <span className="text-sm">{user.totalPoints} </span>
        <TiStarburst className="text-2xl text-orange-500" />
      </div>
    </motion.li>
  );
}
