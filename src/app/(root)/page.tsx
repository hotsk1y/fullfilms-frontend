import { MovieList } from "@/components/movies/MovieList";
import SearchForm from "@/components/SearchForm";
import { nowInCinema } from "@/lib/data";

type SearchParamsType = Promise<{ query?: string }>;

const HomePage = async ({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) => {
  const query = (await searchParams).query;

  return (
    <div>
      <section className="pink_container mb-8">
        <h1 className="heading">Welcome to FullFilms</h1>
        <p className="sub-heading !max-w-3xl">
          Discover your favorite movies, explore genres, and learn about the
          stars.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <h2 className="font-semibold text-[30px] text-black">
          {query ? `Results for "${query}":` : "Now in cinemas:"}
        </h2>
        <MovieList movies={nowInCinema} />
      </section>
    </div>
  );
};

export default HomePage;
