import { MovieType } from "@/types/movie.type";
import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  movie: MovieType;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  const defaultBg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU";

  return (
    <li className="card !p-2 bg-white transition-transform hover:scale-105 flex flex-col">
      <Link href={`/movies/${movie.id}`}>
        <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
          <Image
            src={movie.poster || defaultBg}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
            {movie.title}
          </h2>
          <p className="text-sm text-gray-600">{movie.releaseYear}</p>
          <p className="flex items-center text-sm text-gray-700 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            {movie.rating}
          </p>
        </div>
      </Link>
    </li>
  );
};
