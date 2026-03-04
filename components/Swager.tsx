import getData from "@/utils/api"
import Swagercards from "./SwagerCards"

const Swager = async () => {
  const moviecard = await getData({url:"movie"})

  return (
    <div>
      <Swagercards allmoviecard={moviecard} />
    </div>
  )
}
export default Swager