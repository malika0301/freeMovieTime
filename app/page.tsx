import Actors from "@/components/Actors"
import HeroText from "@/components/Hero"
import NewTrMovies from "@/components/NewTrMovies"
import Swager from "@/components/Swager"
import Top from "@/components/Top"

const HomePage = () => {
  return (
    <main>
      <div>
      <Swager />
      <Top />
      <NewTrMovies/>
      <Actors />
      <HeroText />
    </div>
    </main>
  )
}

export default HomePage