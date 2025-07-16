import { Routes, Route, useLocation } from 'react-router-dom';
import Users from './Users';
import Leaderboard from './Leaderboard';
import BottomNav from '../components/BottomNav';
import ClaimHistory from './ClaimHistory';

export default function Home() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-black flex flex-col justify-between">
      <div className="flex-grow p-4 pb-20">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/history" element={<ClaimHistory />} />
        </Routes>
      </div>

      <BottomNav active={location.pathname} />
    </div>
  );
}
