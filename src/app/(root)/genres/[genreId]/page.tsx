import { notFound } from "next/navigation";
import { allMovies, genres } from "@/lib/data";
import { MovieList } from "@/components/movies/MovieList";
import { GenreType } from "@/types/genre.type";
import { MovieType } from "@/types/movie.type";

interface GenrePageProps {
  params: Promise<{
    genreId: string;
  }>;
}

const GenrePage = async ({ params }: GenrePageProps) => {
  const { genreId } = await params;

  const genre: GenreType = genres.find(g => g.id === genreId) as GenreType;
  if (!genre) {
    notFound();
  }

  const filteredMovies: MovieType[] = allMovies.filter(movie =>
    movie.genres.includes(genreId),
  );

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Genre: {genre.name}</h1>
        <p className="sub-heading !max-w-3xl">{genre.description}</p>
      </section>

      <section className="section_container">
        <h2 className="font-semibold text-[30px] text-black">
          Results for {genre.name}
        </h2>
        {filteredMovies.length > 0 ? (
          <div>
            <MovieList movies={filteredMovies} />
          </div>
        ) : (
          <p className="text-gray-500">No movies found in this genre.</p>
        )}
      </section>
    </>
  );
};

export default GenrePage;
