import { allMovies } from "@/lib/data";
import { MovieList } from "@/components/movies/MovieList";

const MoviesPage = () => {
  return (
    <section className="section_container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Movies</h1>
      <MovieList movies={allMovies} />
    </section>
  );
};

export default MoviesPage;
