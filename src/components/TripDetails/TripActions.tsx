import { FiHeart, FiShare2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

interface TripActionsProps {
  hasStarted: boolean;
  startTrip: (id: number) => void;
  id: number;
  wishlist: boolean;
  toggleWishlist: (id: number) => void;
}

export default function TripActions({
  hasStarted,
  startTrip,
  id,
  wishlist,
  toggleWishlist,
}: TripActionsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => startTrip(id)}
        className={`flex items-center gap-2 font-semibold py-2 px-4 rounded shadow-md transition ${
          hasStarted
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
        disabled={hasStarted}
      >
        {hasStarted ? "Trip Started" : "Start Trip"}
      </button>

      <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow-md transition">
        <FiShare2 /> Share
      </button>

      <button
        onClick={() => toggleWishlist(id)}
        className={`flex items-center gap-2 py-2 px-4 rounded shadow-md transition ${
          wishlist
            ? "bg-red-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white"
        }`}
      >
        {wishlist ? <AiFillHeart /> : <FiHeart />} Wishlist
      </button>
    </div>
  );
}
