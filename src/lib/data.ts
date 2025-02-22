import { MovieType } from "@/types/movie.type";
import { ActorType } from "@/types/actor.type";
import { GenreType } from "@/types/genre.type";
import { CommentType } from "@/types/comment.type";

export const allMovies: MovieType[] = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    country: "United States",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
    releaseYear: 1994,
    duration: "2h 22min",
    director: "Frank Darabont",
    genres: ["drama"],
    rating: 9.3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
    actors: ["a1"],
    trailerLink: "https://www.youtube.com/watch?v=8hP9D7bGEyA",
  },
  {
    id: "2",
    title: "Inception",
    country: "United States",
    description:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    releaseYear: 2010,
    duration: "2h 28min",
    director: "Christopher Nolan",
    genres: ["sci-fi", "action"],
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    actors: ["a3", "a4"],
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    id: "3",
    title: "The Dark Knight",
    country: "United States",
    description:
      "Batman sets out to dismantle organized crime in Gotham, facing his arch-nemesis, the Joker.",
    releaseYear: 2008,
    duration: "2h 32min",
    director: "Christopher Nolan",
    genres: ["action", "drama"],
    rating: 9.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    actors: ["a5", "a6"],
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    id: "4",
    title: "Pulp Fiction",
    country: "United States",
    description:
      "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseYear: 1994,
    duration: "2h 34min",
    director: "Quentin Tarantino",
    genres: ["drama", "comedy"],
    rating: 8.9,
    poster:
      "https://image.tmdb.org/t/p/original/wZbnRMarWnO4DJRisOaK4QEg1tl.jpg",
    actors: ["a7", "a8"],
    trailerLink: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
  },
  {
    id: "5",
    title: "Fight Club",
    country: "United States",
    description:
      "An insomniac office worker and a soap salesman form an underground fight club that evolves into something much, much more.",
    releaseYear: 1999,
    duration: "2h 19min",
    director: "David Fincher",
    genres: ["drama", "thriller"],
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    actors: ["a9", "a10"],
    trailerLink: "https://www.youtube.com/watch?v=SUXWAEX2jlg",
  },
  {
    id: "6",
    title: "Forrest Gump",
    country: "United States",
    description:
      "Forrest Gump, a man with a low IQ, recounts the early years of his life when he found himself in the middle of key historical events.",
    releaseYear: 1994,
    duration: "2h 22min",
    director: "Robert Zemeckis",
    genres: ["drama", "romance"],
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    actors: ["a11", "a12"],
    trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
  },
  {
    id: "7",
    title: "The Godfather",
    country: "United States",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
    duration: "2h 55min",
    director: "Francis Ford Coppola",
    genres: ["drama", "crime"],
    rating: 9.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
    actors: ["a13", "a14"],
    trailerLink: "https://www.youtube.com/watch?v=sY1S34973zA",
  },
  {
    id: "8",
    title: "Interstellar",
    country: "United States",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: 2014,
    duration: "2h 49min",
    director: "Christopher Nolan",
    genres: ["sci-fi", "drama"],
    rating: 8.6,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    actors: ["a15", "a16"],
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    id: "9",
    title: "The Matrix",
    country: "United States",
    description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    releaseYear: 1999,
    duration: "2h 16min",
    director: "The Wachowskis",
    genres: ["sci-fi", "action"],
    rating: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    actors: ["a17", "a18"],
    trailerLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  },
  {
    id: "10",
    title: "Gladiator",
    country: "United States",
    description:
      "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    releaseYear: 2000,
    duration: "2h 35min",
    director: "Ridley Scott",
    genres: ["action", "drama"],
    rating: 8.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
    actors: ["a19", "a20"],
    trailerLink: "https://www.youtube.com/watch?v=owK1qxDselE",
  },
];

export const nowInCinema: MovieType[] = [
  allMovies[1],
  allMovies[2],
  allMovies[5],
  allMovies[7],
  allMovies[8],
  allMovies[9],
];

export const similarMovies: MovieType[] = [
  allMovies[0],
  allMovies[2],
  allMovies[3],
  allMovies[5],
  allMovies[6],
];

export const actors: ActorType[] = [
  {
    id: "a1",
    name: "Tim Robbins",
    bio: "Tim Robbins is an American actor and director known for his roles in 'The Shawshank Redemption'.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_FMjpg_UX1000_.jpg",
    movies: ["1"],
  },
  {
    id: "a2",
    name: "Morgan Freeman",
    bio: "Morgan Freeman is an acclaimed American actor and narrator with a long and distinguished career.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_FMjpg_UX1000_.jpg",
    movies: ["1"],
  },
  {
    id: "a3",
    name: "Leonardo DiCaprio",
    bio: "Leonardo DiCaprio is an American actor celebrated for his performances in films like 'Inception'.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg",
    movies: ["2"],
  },
  {
    id: "a4",
    name: "Joseph Gordon-Levitt",
    bio: "Joseph Gordon-Levitt is an American actor known for his work in 'Inception' and various indie films.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_FMjpg_UX1000_.jpg",
    movies: ["2"],
  },
  {
    id: "a5",
    name: "Christian Bale",
    bio: "Christian Bale is an English actor acclaimed for his intense roles, including in 'The Dark Knight'.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg",
    movies: ["3"],
  },
  {
    id: "a6",
    name: "Heath Ledger",
    bio: "Heath Ledger was an Australian actor known for his groundbreaking performance in 'The Dark Knight'.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_FMjpg_UX1000_.jpg",
    movies: ["3"],
  },
  {
    id: "a7",
    name: "John Travolta",
    bio: "John Travolta is an American actor and singer with a career spanning several decades.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BNWUyNDZiMjItMjQzMy00YmQyLTliOTYtOGRkYzNhZTk5NDBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    movies: ["4"],
  },
  {
    id: "a8",
    name: "Samuel L. Jackson",
    bio: "Samuel L. Jackson is a versatile American actor known for his dynamic screen presence.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg",
    movies: ["4"],
  },
  {
    id: "a9",
    name: "Brad Pitt",
    bio: "Brad Pitt is an American actor and producer known for his charismatic and varied performances.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
    movies: ["5"],
  },
  {
    id: "a10",
    name: "Edward Norton",
    bio: "Edward Norton is an American actor and filmmaker known for his intense and versatile roles.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjQ5MTI1NF5BMl5BanBnXkFtZTcwMzU5MTI2Mw@@._V1_FMjpg_UX1000_.jpg",
    movies: ["5"],
  },
  {
    id: "a11",
    name: "Tom Hanks",
    bio: "Tom Hanks is a celebrated American actor known for his roles in classics like 'Forrest Gump'.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg",
    movies: ["6"],
  },
  {
    id: "a12",
    name: "Robin Wright",
    bio: "Robin Wright is an American actress recognized for her compelling performance in 'Forrest Gump'.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BMTU0NTc4MzEyOV5BMl5BanBnXkFtZTcwODY0ODkzMQ@@._V1_.jpg",
    movies: ["6"],
  },
  {
    id: "a13",
    name: "Marlon Brando",
    bio: "Marlon Brando was an iconic American actor known for his influential roles in cinema.",
    photo:
      "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg",
    movies: ["7"],
  },
  {
    id: "a14",
    name: "Al Pacino",
    bio: "Al Pacino is an American actor famous for his intense portrayals in films like 'The Godfather'.",
    photo:
      "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg",
    movies: ["7"],
  },
  {
    id: "a15",
    name: "Matthew McConaughey",
    bio: "Matthew McConaughey is an American actor celebrated for his role in 'Interstellar' and other films.",
    photo:
      "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg",
    movies: ["8"],
  },
  {
    id: "a16",
    name: "Anne Hathaway",
    bio: "Anne Hathaway is an American actress known for her versatile roles across genres.",
    photo:
      "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg",
    movies: ["8"],
  },
  {
    id: "a17",
    name: "Keanu Reeves",
    bio: "Keanu Reeves is a Canadian actor best known for his role in 'The Matrix'.",
    photo:
      "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg",
    movies: ["9"],
  },
  {
    id: "a18",
    name: "Laurence Fishburne",
    bio: "Laurence Fishburne is an American actor known for his powerful performances and iconic roles.",
    photo:
      "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg",
    movies: ["9"],
  },
  {
    id: "a19",
    name: "Russell Crowe",
    bio: "Russell Crowe is a New Zealand-born actor celebrated for his intense performance in 'Gladiator'.",
    photo:
      "https://www.executiveflight.nl/wp-content/uploads/default-person.jpg",
    movies: ["10"],
  },
  {
    id: "a20",
    name: "Joaquin Phoenix",
    bio: "Joaquin Phoenix is an American actor recognized for his transformative performances.",
    photo:
      "https://m.media-amazon.com/images/M/MV5BYjFjNGYzYjEtNGE0Ny00M2IyLTk5ZmYtODE3ZGFkMzVjYmNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    movies: ["10"],
  },
];

export const genres: GenreType[] = [
  {
    id: "drama",
    name: "Drama",
    description:
      "Focuses on realistic storytelling, emotional themes, and complex character development.",
  },
  {
    id: "action",
    name: "Action",
    description:
      "High-energy sequences featuring stunts, chases, fights, and heroic adventures.",
  },
  {
    id: "sci-fi",
    name: "Sci-Fi",
    description:
      "Explores futuristic settings, advanced technology, and space travel, often with speculative science.",
  },
  {
    id: "comedy",
    name: "Comedy",
    description:
      "Lighthearted plots designed to entertain and amuse audiences with humor and wit.",
  },
  {
    id: "thriller",
    name: "Thriller",
    description:
      "Builds tension, suspense, and excitement, often involving crime, mystery, or psychological elements.",
  },
  {
    id: "romance",
    name: "Romance",
    description:
      "Centers on love stories and emotional relationships, frequently exploring personal growth and intimacy.",
  },
  {
    id: "crime",
    name: "Crime",
    description:
      "Focuses on criminal activities, investigations, and the moral and social implications of wrongdoing.",
  },
];

export const comments: CommentType[] = [
  {
    id: "c1",
    author: "MovieFan99",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "This film changed my life! Highly recommend.",
    createdAt: "2023-08-01T10:00:00Z",
    likes: 5,
  },
  {
    id: "c2",
    author: "JohnDoe",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "Not my cup of tea, but I can see why people like it.",
    createdAt: "2023-08-02T14:30:00Z",
    likes: 2,
  },
  {
    id: "c3",
    author: "JaneSmith",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Great acting, stunning visuals. A must-watch!",
    createdAt: "2023-08-03T09:15:00Z",
    likes: 8,
  },
];
