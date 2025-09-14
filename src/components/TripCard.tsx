import Image from "next/image";
import Link from "next/link";
import { Trip } from "../store/useTripStore";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <div className="border p-3 rounded shadow-md hover:shadow-lg transition flex flex-col">
      <Image
        src={trip.image}
        alt={trip.name}
        width={500}
        height={300}
        className="object-cover w-full rounded"
      />
      <h3 className="mt-2 font-bold text-lg">{trip.name}</h3>
      <p className="text-gray-600">{trip.date}</p>
      <Link href={`/trips/${trip.id}`}>
        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}
