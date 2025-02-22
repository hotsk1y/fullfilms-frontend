import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-5 py-3 bg-white shadow-sm font-work-sans z-50">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </Link>
          <Link href="/movies" className="hover:underline">
            Movies
          </Link>
          <Link href="/genres" className="hover:underline">
            Genres
          </Link>
          <Link href="/actors" className="hover:underline">
            Actors
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
