"use client"
import { Play } from "lucide-react"

export default function WatchButton() {
    return (
        <button
            onClick={() => document.getElementById("player")?.scrollIntoView({ behavior: "smooth" })}
            className="flex cursor-pointer items-center gap-2 bg-white text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-200 transition mb-5"
        >
            <Play size={16} fill="black" />
            Tomosha qilish
        </button>
    )
}