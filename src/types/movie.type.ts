export type MovieType = {
  id: string;
  title: string;
  country: string;
  description?: string;
  releaseYear: number;
  duration: string;
  director?: string;
  genres: string[];
  rating?: number;
  poster?: string;
  actors: string[];
  trailerLink?: string;
};
