import { actors } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ActorsPage() {
  const defaultPhoto =
    "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg";

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">All Actors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {actors.map(actor => (
          <Link key={actor.id} href={`/actors/${actor.id}`}>
            <div className="card bg-white transition-transform hover:scale-105">
              <div className="relative w-full h-72 rounded-md overflow-hidden">
                <Image
                  src={actor.photo || defaultPhoto}
                  alt={actor.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {actor.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
