"use client"

import { MovieType } from "@/types/MovieType"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Props {
    allmoviecard: MovieType[]
}

const Swagercards = ({ allmoviecard }: Props) => {
    const [current, setCurrent] = useState(0)
    const isClient = useRef(false)

    useEffect(() => {
        isClient.current = true

        if (!allmoviecard.length) return

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % allmoviecard.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [allmoviecard])

    if (!allmoviecard.length) return null

    return (
        <div className="w-full bg-[#0f0f0f] px-6 py-8" suppressHydrationWarning>
            <div className="container mx-auto">
                <div className="relative">

                    {/* 2 ta banner */}
                    <div 
                    className="grid grid-cols-2 gap-6 h-120">

                        {[0, 1].map((offset) => {
                            const movie =
                                allmoviecard[(current + offset) % allmoviecard.length]

                            return (
                                <div
                                    key={movie.id}
                                    className="relative rounded-3xl overflow-hidden group cursor-pointer"
                                >
                                    {/* IMAGE */}
                                    <Image
                                        src={movie.poster_url}
                                        alt={movie.title_en}
                                        fill
                                        quality={100}
                                        sizes="50vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />

                                    {/* IMDb badge */}
                                    <div className="absolute top-5 right-5">
                                        <span className="bg-yellow-400 text-black font-bold text-xs px-3 py-1 rounded-full shadow-md">
                                            IMDb {movie?.imdb_rating}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h2 className="text-3xl font-bold mb-4 drop-shadow-xl">
                                            {movie?.title_en}
                                        </h2>

                                        <div className="flex gap-3 flex-wrap">
                                            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-sm">
                                                {movie?.language}
                                            </span>
                                            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-sm">
                                                {movie?.release_year || "2025"}
                                            </span>
                                            <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-sm">
                                                {movie?.country}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    {/* Chap tugma */}
                    <div
                        className="absolute -left-2.5 top-1/2 -translate-y-1/2 z-20"
                        onClick={() =>
                            setCurrent((prev) =>
                                prev === 0 ? allmoviecard.length - 1 : prev - 1
                            )
                        }
                    >
                        <div className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 cursor-pointer hover:bg-white/20 transition">
                            ‹
                        </div>
                    </div>

                    {/* O'ng tugma */}
                    <div
                        className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-20"
                        onClick={() =>
                            setCurrent((prev) => (prev + 1) % allmoviecard.length)
                        }
                    >
                        <div className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 cursor-pointer hover:bg-white/20 transition">
                            ›
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Swagercards