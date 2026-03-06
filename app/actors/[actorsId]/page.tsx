
import ActorTabs from "@/components/ActorTabs";
import { MovieActorType } from "@/types/MovieActorType";
import { MovieType } from "@/types/MovieType";
import getData from "@/utils/api";
import Image from "next/image";
import Link from "next/link";


const ActorsSinglePage = async ({ params }: { params: Promise<{ actorsId: string }> }) => {
  const { actorsId } = await params;
  //MOVIE
  const singlemovie = await getData({url:"/movie"})
  console.log(singlemovie);

  //MOVIE ACTORS
  const movieactors = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_actor` , 
    {
      next: {
        revalidate: 3600
      }
    }
  )
  const singlemovieactors = await movieactors.json()
  console.log(singlemovieactors);
  const allmovieactors = singlemovieactors?.map((el:MovieActorType) => {
    if(el.actor_id === actorsId ){
      return el.movie_id
    }
  } )
  console.log(allmovieactors);
  
  const filterdMovies = singlemovie?.filter((el:MovieType) => allmovieactors?.includes(el.id))
  console.log(filterdMovies);
  





  const data = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor/${actorsId}`)
  const singledata = await data.json()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-10 py-8">

      {/* Breadcrumb */}
      <div className="text-gray-400 text-sm mb-6  bg-gray-800 rounded-2xl h-15 flex items-center gap-5 pl-5">
        <span className="hover:text-white text-gray-400 cursor-pointer text-md">  Home</span>
        <span className="text-emerald-400">
          •
        </span>
        <Link href={"/actors"} className="hover:text-white text-gray-400 cursor-pointer text-md"> Actors </Link>
        <span className="text-emerald-400">
          •
        </span>
        <span className="hover:text-white text-gray-400 cursor-pointer text-md">Burak Özçivit</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Image */}
        <div className=" hover:scale-105 transition duration-500">
          <Image
            src={singledata?.photo_url}
            alt="Burak"
            width={400}
            height={400}
            className="rounded-2xl object-cover   shadow-2xl border border-gray-800w-f"
          />
        </div>

        {/* Right Content */}
        <div className="md:col-span-2">

          {/* Name */}
          <h1 className="text-4xl font-bold mb-6 tracking-wide">
            {singledata?.full_name}
          </h1>


          <ActorTabs singledata={singledata} filterdMovies={filterdMovies}/>


        </div>
      </div>
    </div>
  )
}

export default ActorsSinglePage