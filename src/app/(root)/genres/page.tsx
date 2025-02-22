import Link from "next/link";
import { genres } from "@/lib/data";

const GenresPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6">All Genres</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {genres.map(genre => (
          <Link
            key={genre.id}
            href={`/genres/${genre.id}`}
            className="card p-4 rounded-lg hover:bg-primary"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {genre.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
