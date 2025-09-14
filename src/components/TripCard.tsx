import Image from "next/image";
import { Trip } from "../store/useTripStore";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <div className="border p-3 rounded shadow-md hover:shadow-lg transition">
      <Image
        src={trip.image}
        alt={trip.name}
        width={500}
        height={50}
        className="object-cover w-full"
      ></Image>
      <h3 className="mt-2 font-bold">{trip.name}</h3>
      <p>{trip.date}</p>
    </div>
  );
}
