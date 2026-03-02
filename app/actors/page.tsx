import { ActorsType } from "@/types/ActorsType";



const ActorCards = async () => {
    const actorcards = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor`, {
        next: {
            revalidate: 3600
        }
    })
    const actorcardall = await actorcards.json()
    console.log(actorcardall);

    return (
        <div className="p-7">
            <div>
                <h1 className="text-2xl text-white pb-5 font-bold">Actors</h1>
            </div>
            <div className="flex flex-wrap gap-10">
                {actorcardall?.map((actor:ActorsType) => (
                    <div
                        key={actor.id}
                        className="relative w-54 h-74 rounded-xl overflow-hidden shadow-lg group p-3 border-2 border-gray-600 hover:border-gray-400 cursor-pointer"
                    >
                        <img
                            src={actor?.photo_url}
                            alt={actor?.full_name}
                            className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105 rounded-2xl"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        <div className="absolute bottom-4 left-0 right-0 px-3 py-[1px]">
                            <p className="text-white text-sm font-semibold ">
                                {actor?.full_name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}
export default ActorCards