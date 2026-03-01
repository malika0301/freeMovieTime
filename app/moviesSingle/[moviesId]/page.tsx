import Link from 'next/link';
import { Calendar, Clock, Globe, ThumbsUp, ThumbsDown, Play, Download } from 'lucide-react';
import { MovieGenreType } from '@/types/MovieGenre';
import getData from '@/utils/api';
import { MovieType } from '@/types/MovieType';
import Image from 'next/image';
import { MovieActorType } from '@/types/MovieActorType';
import { ActorsType } from '@/types/ActorsType';
import { GenreType } from '@/types/GenreType';
import MoviePlayer from '@/components/MoviePlayer';


const MoviePage = async ({ params }: { params: Promise<{ moviesId: string }> }) => {
    const { moviesId } = await params;
    const movie = await getData({ url: `movie/${moviesId}` })
    const genres = await getData({ url: `genre` })
    const actors = await getData({ url: `actor` })

    const genreMovies = await getData({ url: `movie_genre/${moviesId}` })
    const movieGenreIds = genreMovies?.map((el: MovieGenreType) => {
        if (el.movie_id === moviesId) {
            return el.genre_id
        }
    })
    const genreNames = genres?.filter((el: GenreType) => movieGenreIds?.includes(el.id))
    const actorMovies = await getData({ url: `movie_actor/${moviesId}` })
    const movieActorIds = actorMovies?.map((el: MovieActorType) => {
        if (el.movie_id === moviesId) {
            return el.actor_id
        }
    }) 
    const actorNames = actors?.filter((el: ActorsType) => movieActorIds?.includes(el.id))
    return (
        <main className="min-h-screen bg-[#0f0f0f] text-white">
            <div className="md:px-6 py-6">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
                    <Link href="/" className="hover:text-white transition">Bosh sahifa</Link>
                    <span>›</span>
                    <Link href="/kino" className="hover:text-white transition">Tarjima kinolar</Link>
                    <span>›</span>
                    <span className="text-white">{movie?.title_uz}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Main Content */}
                    <div className="flex-1">

                        {/* Movie Info Card */}
                        <div className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 mb-4">
                            <div className="flex flex-col sm:flex-row gap-6">

                                {/* Poster */}
                                <div className="shrink-0">
                                    <Image
                                        src={movie?.poster_url}
                                        alt={movie?.title_uz}
                                        className="w-full sm:w-44 h-64 sm:h-60 object-cover rounded-lg"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                                        <h1 className="text-2xl md:text-3xl font-bold">{movie?.title_uz}</h1>
                                        <span className="bg-[#f5c518] text-black text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shrink-0">
                                            IMDb {movie?.imdb_rating}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4">Uzbek tilida • HD • Online tomosha</p>

                                    {/* Watch Button */}
                                    <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-200 transition mb-5">
                                        <Play size={16} fill="black" />
                                        Tomosha qilish
                                    </button>

                                    {/* Meta */}
                                    <div className="flex flex-wrap gap-6 text-sm mb-4">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Calendar size={16} className="text-gray-500" />
                                            <span className="text-gray-500">Yil:</span>
                                            <span>{movie?.release_year}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Clock size={16} className="text-gray-500" />
                                            <span className="text-gray-500">Davomiyligi:</span>
                                            <span>{movie?.duration_minutes}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Globe size={16} className="text-gray-500" />
                                            <span className="text-gray-500">Mamlakat:</span>
                                            <span>{movie?.country}</span>
                                        </div>
                                    </div>

                                    {/* Genres */}
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-gray-500 text-sm">Janrlar:</span>
                                        <div className='flex gap-2 items-center '>
                                            {
                                                genreNames?.map((el: GenreType) => {
                                                    return <h1 className='p-2 border border-white text-white rounded-[15px] bg-[#0f0f0f] ' key={el.id}> {el?.name_uz} </h1>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cast */}
                        <div className="bg-[#1a1a1a] rounded-xl p-4 mb-4 overflow-x-auto">
                            <div className="flex gap-4 min-w-max">
                                {actorNames?.map((actor: ActorsType) => (
                                    <div key={actor.full_name} className="flex items-center gap-2">
                                        <Image
                                            src={actor.photo_url}
                                            alt={actor.full_name}
                                            className="w-10 h-10 rounded-full object-cover bg-gray-700"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-white">{actor.full_name}</p>
                                            <p className="text-xs text-gray-400">{actor.country}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backdrop / Video Player area */}
                        <div className="bg-[#1a1a1a] rounded-xl overflow-hidden mb-4">

                            <MoviePlayer url={movie?.video_url}
                            subtitles={[
                                { label: "O'zbek", src: "/subs/uz.vtt", srcLang: "uz" },
                                { label: "Русский", src: "/subs/ru.vtt", srcLang: "ru" }
                            ]}/>
                        </div>

                        {/* Like / Dislike + Buttons */}
                        <div className="bg-[#1a1a1a] rounded-xl px-4 py-3 flex items-center justify-between mb-4 flex-wrap gap-3">
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-1.5 text-gray-300 hover:text-white transition">
                                    <ThumbsUp size={18} />
                                    <span className="text-sm">12</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-gray-300 hover:text-white transition">
                                    <ThumbsDown size={18} />
                                    <span className="text-sm">0</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-4 py-2 rounded-lg text-sm transition">
                                    <Play size={14} />
                                    Treyler
                                </button>
                                <button className="flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-4 py-2 rounded-lg text-sm transition">
                                    <Download size={14} />
                                    Yuklab olish
                                </button>
                            </div>
                        </div>

                        {/* Movie Info Accordion */}
                        <div className="bg-[#1a1a1a] rounded-xl px-4 py-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2 text-sm font-semibold">
                                    <span className="text-gray-400">ℹ</span>
                                    <span>{movie?.title_uz} filmi haqida malumot</span>
                                </div>
                                <span className="text-gray-400 text-lg">∧</span>
                            </div>
                            <div className="text-sm text-gray-400 space-y-1 mb-4">
                                <p><span className="text-gray-500">Nomi:</span> {movie?.title_uz}</p>
                                <p><span className="text-gray-500">Boshqa nomlari:</span> {movie?.title_ru}</p>
                                <p><span className="text-gray-500">Ishlab chiqarilgan yil:</span> {movie?.release_year}</p>
                                <p><span className="text-gray-500">Davomiyligi:</span> {movie?.duration_minutes}</p>
                                <p><span className="text-gray-500">Dublyaj:</span> Uzbek tilida • HD • Online tomosha</p>
                                <p><span className="text-gray-500">Video sifati:</span> HD</p>
                                <p><span className="text-gray-500">IMDb reyting:</span> {movie?.imdb_rating}</p>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">{movie?.description_uz}</p>
                        </div>

                    </div>

                    {/* Sidebar - movieommendations */}
                    <div className="w-full lg:w-72 shrink-0">
                        <div className="flex items-center gap-2 text-white font-semibold mb-4">
                            <span className="text-[#aaff00]">✦</span>
                            Tavsiyalar
                        </div>
                        <div className="flex flex-col gap-3">
                            {movie.map((movie: MovieType) => (
                                <Link
                                    key={movie.title_uz}
                                    href="#"
                                    className="flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] transition rounded-xl p-2"
                                >
                                    <Image
                                        src={movie.poster_url}
                                        alt={movie.title_uz}
                                        className="w-16 h-20 object-cover rounded-lg bg-gray-700 shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-white font-medium leading-snug line-clamp-2 mb-1">{movie.title_uz}</p>
                                        {movie.imdb_rating && (
                                            <span className="bg-[#f5c518] text-black text-xs font-bold px-1.5 py-0.5 rounded mr-1">
                                                IMDb {movie.imdb_rating}
                                            </span>
                                        )}
                                        <p className="text-xs text-gray-500 mt-1">{movie.release_year} | {movie.duration_minutes}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
export default MoviePage