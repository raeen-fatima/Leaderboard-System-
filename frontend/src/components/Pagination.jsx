import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center mt-10 gap-6 flex-wrap">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium disabled:opacity-50"
      >
        <FaArrowLeft />
        Prev
      </button>

      <span className="text-lg font-bold text-white">{page} / {totalPages}</span>

      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium disabled:opacity-50"
      >
        Next <FaArrowRight />
      </button>
    </div>
  );
}
