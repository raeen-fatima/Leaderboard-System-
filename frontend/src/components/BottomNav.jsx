import { Link } from 'react-router-dom';
import { FaUser, FaTrophy, FaHistory } from 'react-icons/fa';

export default function BottomNav({ active }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-400/70 text-black backdrop-blur-md shadow-md p-3 flex justify-around border-t border-white/20">
      <Link to="/" className={`flex flex-col items-center ${active === '/' ? 'text-white' : ''}`}>
        <FaUser />
        <span className="text-xs">Users</span>
      </Link>
      <Link to="/leaderboard" className={`flex flex-col items-center ${active === '/leaderboard' ? 'text-white' : ''}`}>
        <FaTrophy />
        <span className="text-xs">Leaderboard</span>
      </Link>
      <Link to="/history" className={`flex flex-col items-center ${active === '/history' ? 'text-white' : ''}`}>
        <FaHistory />
        <span className="text-xs">History</span>
      </Link>
    </div>
  );
}
