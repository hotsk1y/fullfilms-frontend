import { MovieCard } from "./MovieCard";
import { MovieType } from "@/types/movie.type";

type MovieListProps = {
  movies: MovieType[];
};

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-7">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
