import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { MovieList } from "@/components/movies/MovieList";
import { CommentList } from "@/components/comments/CommentList";

import { MovieType } from "@/types/movie.type";
import { ActorType } from "@/types/actor.type";
import { GenreType } from "@/types/genre.type";

import { allMovies, actors, genres, similarMovies, comments } from "@/lib/data";

type MoviePagePropsType = {
  params: Promise<{
    movieId: string;
  }>;
};

export const generateMetadata = async ({ params }: MoviePagePropsType) => {
  const { movieId } = await params;
  const movie: MovieType = allMovies.find(m => m.id === movieId) as MovieType;
  if (!movie) {
    return null;
  }

  const title = `${movie.title} | FullFilms`;
  return { title };
};

const MoviePage = async ({ params }: MoviePagePropsType) => {
  const defaultBg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU";

  const { movieId } = await params;
  const movie: MovieType = allMovies.find(m => m.id === movieId) as MovieType;
  if (!movie) {
    notFound();
  }

  const movieActors: ActorType[] = movie.actors.flatMap(
    actorId => actors.find(a => a.id === actorId) || [],
  );

  const movieGenres: GenreType[] = genres.filter(genre =>
    movie.genres.includes(genre.id),
  );

  return (
    <>
      <section className="pink_container">
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <Image
                src={movie.poster || defaultBg}
                alt={movie.title}
                width={300}
                height={450}
                className="w-full md:w-1/3 h-auto object-cover"
              />
              <div className="p-6 flex flex-col md:w-2/3">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {movie.title}
                </h1>
                <p className="text-sm text-gray-600 mb-4">
                  {movie.releaseYear} • {movie.country} • {movie.rating || "?"}
                  /10
                </p>

                <div className="flex iems-center mb-4">
                  <p className="font-semibold text-gray-800">
                    <span className="text-xl">Description: </span>
                    <span className=" text-gray-700 font-normal">
                      {movie.description || "-"}
                    </span>
                  </p>
                </div>

                <div className="flex iems-center mb-4">
                  <p className="font-semibold text-gray-800">
                    <span className="text-xl">Duration: </span>
                    <span className="text-gray-700 font-normal">
                      {movie.duration || "-"}
                    </span>
                  </p>
                </div>

                <div className="flex iems-center mb-4">
                  <p className="font-semibold text-gray-800">
                    <span className="text-xl">Director: </span>
                    <span className="text-gray-700 font-normal">
                      {movie.director || "-"}
                    </span>
                  </p>
                </div>

                <p className="text-xl font-semibold text-gray-800 mb-2">
                  Genres:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {movieGenres.map((genre, index) => (
                    <span key={genre.id}>
                      <Link
                        href={`/genres/${genre.id}`}
                        className="text-gray-700 font-normal hover:text-primary"
                      >
                        {genre.name}
                      </Link>
                      {index < movieGenres.length - 1 && ", "}
                    </span>
                  ))}
                </div>

                <p className="text-xl font-semibold text-gray-800 mb-2">
                  Actors:
                </p>
                <div className="flex flex-wrap gap-2">
                  {movieActors.map((actor, index) => (
                    <span key={actor.id}>
                      <Link
                        href={`/actors/${actor.id}`}
                        className="text-gray-700 font-normal hover:text-primary"
                      >
                        {actor.name}
                      </Link>
                      {index < movieActors.length - 1 && ", "}
                    </span>
                  ))}
                </div>

                {movie.trailerLink && (
                  <Link
                    href={movie.trailerLink}
                    target="_blank"
                    className="flex items-center hover:bg-black-100 bg-black-200 w-fit rounded-lg p-4 mt-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="size-6 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>

                    <span className="font-medium text-white">
                      Watch The Trailer
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {comments.length > 0 && (
        <section className="section_container">
          <div>
            <h2 className="font-semibold text-[30px] text-black mb-4">
              Comments:
            </h2>
            <CommentList comments={comments} />
          </div>
        </section>
      )}

      <section className="section_container">
        <h2 className="font-semibold text-[30px] text-black">
          Similar movies:
        </h2>
        {similarMovies.length > 0 ? (
          <div>
            <MovieList movies={similarMovies} />
          </div>
        ) : (
          <p className="text-gray-500">No movies found in this genre.</p>
        )}
      </section>
    </>
  );
};

export default MoviePage;
