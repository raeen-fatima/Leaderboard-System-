import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import AddUserForm from "../components/AddUserForm";
import UserCard from "../components/UserCard";
import ClaimModal from "../components/ClaimModal";
import Pagination from "../components/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_BASE;

export default function Users() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 10;
  const navigate = useNavigate();


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API}/api/users`);
      if (Array.isArray(res.data.data)) setUsers(res.data.data);
      else setUsers([]);
    } catch (err) {
      toast.error("❌ Failed to add user.");
    }
  };

  const addUser = async () => {
    if (!newUser.trim()) return;
    try {
      await axios.post(`${API}/api/users`, { name: newUser });
      setNewUser("");
      fetchUsers();
    } catch (err) {
      await axios.post(`${API}/api/users`, { name: newUser });
      setNewUser("");
      fetchUsers();
      toast.success("✅ User added successfully!");
    }
  };

  const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);
  const paginatedUsers = sortedUsers.slice(
    (page - 1) * perPage,
    page * perPage
  );
  const totalPages = Math.ceil(users.length / perPage);

  return (
    <div className="px-0">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-black">
        🏆 Users List
      </h2>
      {/* Add user input */}
      <AddUserForm
        newUser={newUser}
        setNewUser={setNewUser}
        onAdd={addUser}
        onHistory={() => navigate("/history")} // Or set modal, tab, etc.
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="min-h-screen bg-white text-black rounded-2xl border border-gray-700 px-4 py-8"
      >
        {/* Users List */}
        <motion.ul className="space-y-4 max-w-4xl mx-auto">
          {paginatedUsers.map((user, index) => (
            <UserCard
              key={user._id}
              user={user}
              index={index}
              page={page}
              perPage={perPage}
              onClick={() => setSelectedUser(user)}
            />
          ))}
        </motion.ul>

        {/* Pagination */}
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />

        {/* Claim Modal */}
        <ClaimModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onClaimSuccess={fetchUsers}
        />
      </motion.div>
    </div>
  );
}
