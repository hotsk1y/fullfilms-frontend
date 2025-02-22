import Image from "next/image";
import { notFound } from "next/navigation";

import { actors, allMovies } from "@/lib/data";
import { MovieList } from "@/components/movies/MovieList";
import { ActorType } from "@/types/actor.type";
import { MovieType } from "@/types/movie.type";

interface ActorPageProps {
  params: Promise<{
    actorId: string;
  }>;
}

const ActorPage = async ({ params }: ActorPageProps) => {
  const { actorId } = await params;
  const actor: ActorType = actors.find(a => a.id === actorId) as ActorType;
  const defaultPhoto =
    "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg";

  if (!actor) {
    notFound();
  }

  const actorMovies: MovieType[] = actor.movies.map(movieId => {
    return allMovies.find(m => m.id === movieId) as MovieType;
  });

  return (
    <>
      <section className="pink_container py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-3xl mx-auto gap-6">
          <div className="card bg-white mb-6">
            <div className="relative w-48 h-64 rounded-md overflow-hidden">
              <Image
                src={actor.photo || defaultPhoto}
                alt={actor.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <h1 className="heading">{actor.name}</h1>
            <p className="sub-heading text-center md:text-left">{actor.bio}</p>
          </div>
        </div>
      </section>

      <section className="section_container">
        {actorMovies.length > 0 ? (
          <div>
            <h2 className="font-semibold text-[30px] text-black">
              Movies with {actor.name}:
            </h2>
            <MovieList movies={actorMovies} />
          </div>
        ) : (
          <h2 className="text-center font-semibold text-[30px] text-black">
            No movies found with {actor.name}.
          </h2>
        )}
      </section>
    </>
  );
};

export default ActorPage;
