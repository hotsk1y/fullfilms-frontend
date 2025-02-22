import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="section_container min-h-screen flex items-center justify-center bg-gray-50">
      <div className="wrapper text-center">
        <h1 className="notFound__title text-30-bold mb-6">Nothing found :(</h1>

        <div className="card bg-white mb-6">
          <div className="relative w-40 md:w-80 h-40 md:h-80  rounded-md overflow-hidden">
            <Image
              src="/images/cat.jpg"
              alt="Cat"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center justify-center p-4 bg-black-200 text-white py-3 px-8 rounded-xl hover:bg-gray-800 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
