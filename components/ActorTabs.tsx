"use client";

import { useState } from "react";
import Image from "next/image";
import { MovieType } from "@/types/MovieType";
import { ActorsType } from "@/types/ActorsType";

interface Props {
    biography: string;
    movies: MovieType[];
}

const ActorTabs = ({ filterdMovies , singledata }:{filterdMovies:MovieType[] , singledata:ActorsType}) => {
    const [activeTab, setActiveTab] = useState<"bio" | "series">("bio");

    return (
        <div>
            {/* Tabs */}
            <div className="flex gap-8 border-b border-gray-700 mb-6">
                <button
                    onClick={() => setActiveTab("bio")}
                    className={`pb-3 font-semibold transition ${activeTab === "bio"
                            ? "border-b-2 border-emerald-400 text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                >
                    Biografiyasi
                </button>

                <button
                    onClick={() => setActiveTab("series")}
                    className={`pb-3 font-semibold transition ${activeTab === "series"
                            ? "border-b-2 border-emerald-400 text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                >
                    Kinolar
                </button>
            </div>

            {/* BIO */}
            {activeTab === "bio" && (
                <div className="bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl border border-gray-800 shadow-xl hover:shadow-emerald-500/10 transition duration-500">
                    <p className="text-gray-300 leading-8">{singledata?.biography}</p>
                </div>
            )}

            {/* SERIES */}
            {activeTab === "series" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filterdMovies?.map((movie) => (
                        <div className="hover:scale-105 overflow-hidden">
                            <div className="relative group w-[300px] h-[400px] rounded-2xl overflow-hidden border border-gray-400">
                                {/* Rasm */}
                                <Image
                                    src={movie.poster_url}
                                    alt={movie.title_uz}
                                    width={300}
                                    height={400}
                                    className="rounded-2xl w-full h-full object-cover duration-300 transform group-hover:scale-110 group-hover:blur-sm"
                                />

                                {/* Play icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 text-white drop-shadow-lg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M3 22V2l18 10-18 10z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Movie title */}
                            <h3 className="text-lg font-semibold mt-2">{movie.title_uz}</h3>
                            <p className="text-sm text-gray-500 font-semibold mt-1">
                                <span className="text-gray-500 text-sm">
                                    Jangari
                                    •
                                </span>
                                {movie.updated_at}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ActorTabs;