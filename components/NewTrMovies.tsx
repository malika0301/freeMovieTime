import { MovieType } from "@/types/MovieType"
import getData from "@/utils/api"
import Image from "next/image"
import Link from "next/link"

const movie = await getData({ url: "/movie" })

const NewTrMovies = () => {
  return (
    <div className="flex mt-5 gap-4 overflow-x-auto pb-3 scrollbar-hide">
      {movie.map((movie: MovieType) => (
        <Link
          href={`/moviesSingle/${movie.id}`}
          key={movie.id}
          className="min-w-[140px] bg-[#1a1a1a] rounded-xl overflow-hidden hover:scale-105 transition"
        >
          <div className="relative w-full h-[200px]">
            <Image
              src={movie.poster_url}
              alt={movie.title_uz}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-2">
            <p className="text-white text-sm truncate">
              {movie.title_uz}
            </p>

            <div className="flex justify-between mt-1 text-xs">
              {movie.imdb_rating && (
                <span className="bg-yellow-500 text-black px-1 rounded">
                  {movie.imdb_rating}
                </span>
              )}

              <span className="text-gray-400">
                {movie.release_year}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NewTrMovies