import { FaUserPlus, FaClock } from "react-icons/fa";

export default function AddUserForm({ newUser, setNewUser, onAdd, onHistory }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-10 items-center bg-gradient-to-r from-[#1e1e2f] via-[#1a1a2e] to-[#111827] p-6 px-12  rounded-xl backdrop-blur-md shadow-lg max-w-4xl mx-auto">
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter user name"
        className="w-full md:flex-1 bg-white/10 border border-gray-500 text-white p-2 rounded-md focus:outline-none focus:ring focus:border-yellow-500 placeholder-gray-400"
      />

      {/* Add User Button */}
      <button
        onClick={onAdd}
        className="bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 flex items-center gap-2 w-full md:w-auto justify-center font-semibold text-black"
      >
        <FaUserPlus />
        Add User
      </button>

      {/* View History Button */}
      <button
        onClick={onHistory}
        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 flex items-center gap-2 w-full md:w-auto justify-center font-semibold text-white"
      >
        <FaClock />
        View History
      </button>
    </div>
  );
}
