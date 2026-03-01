import { MovieType } from '@/types/MovieType'
import Image from 'next/image'
import Link from 'next/link'
import { Trophy } from 'lucide-react'

const TopMovies = ({ allKino }: { allKino: MovieType[] }) => {
  const sorted = [...(allKino || [])].sort((a, b) => b.view_count - a.view_count).slice(0, 5)

  return (
    <div className="bg-[#1d1f1e] rounded-2xl p-5 flex-1 min-w-0">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Trophy size={20} className="text-orange-400" />
        <h2 className="text-white font-bold text-lg tracking-wide">TOP 5 Kinolar</h2>
      </div>

      {/* List */}
      <div className="flex flex-col gap-1">
        {sorted.map((movie, index) => (
          <Link
            href={`/moviesSingle/${movie.id}`}
            key={movie.id}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
          >
            {/* Rank */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                index === 0
                  ? 'bg-orange-500 text-white'
                  : index === 2
                  ? 'bg-orange-500 text-white'
                  : 'bg-[#2a2a3e] text-gray-400'
              }`}
            >
              {index + 1}
            </div>

            {/* Poster */}
            <div className="w-12 h-16 rounded-lg overflow-hidden shrink-0 bg-[#2a2a3e]">
              {movie.poster_url ? (
                <img
                  src={movie.poster_url}
                  alt={movie.title_uz}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#2a2a3e]" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate group-hover:text-orange-400 transition-colors">
                {movie.title_uz}
              </p>
              <div className="flex items-center gap-2 mt-1">
                {movie.imdb_rating && (
                  <span className="bg-yellow-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                    IMDb {movie.imdb_rating}
                  </span>
                )}
                <span className="text-gray-500 text-xs">{movie.release_year}</span>
              </div>
            </div>

            {/* Arrow */}
            <svg
              className="text-gray-600 group-hover:text-gray-400 transition-colors shrink-0"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TopMovies