"use client"
import { useEffect, useState } from "react";
import Actorscomponentimges from "./Actorscomponentimges";
import Link from "next/link"




const Actors = () => {
  const [actorlar, setActorlar] = useState([]);
 
  useEffect(() => {
   async function fetchData(){
     const res = await fetch( "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor" ,
      {
        next:{
          revalidate : 3600
        }
      }
      );
      const data = await res.json();
      
      setActorlar(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex items-center justify-between mt-4 mb-8">

        {/* Left Side */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.784 1.402 8.168L12 18.896l-7.336 3.867 1.402-8.168L.132 9.211l8.2-1.193z" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-white tracking-wide">
            Aktyorlar
          </h2>
        </div>
        {/* Right Button */}
        <Link
          href="/actors"
          className="
    inline-flex items-center gap-2
    bg-[#1d1f1e]
    text-gray-300
    hover:text-white
    px-5 py-2
    rounded-xl
    border border-gray-800
    hover:border-white
    hover:shadow-2xl
    transition duration-300
  "
        >
          <span className="text-sm font-medium">
            Barchasi
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>

      </div>
   
          < Actorscomponentimges actorlar={actorlar}/>
     
   
      
    </>
  );
}
export default Actors