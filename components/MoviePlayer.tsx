"use client";
import ReactPlayer from 'react-player'

interface MoviePlayerProps {
    url : string;
    subtitles?: { label: string; src: string; srcLang: string}[];
}

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];
const QUALITIES = ["360p", "720p", "1080p"];

export default function MoviePlayer({url, subtitles = []}: MoviePlayerProps){
    return <ReactPlayer
        className="w-full h-64 md:h-96 object-cover" src={url} />
} 