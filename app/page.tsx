import Actors from "@/components/Actors"
import Container from "@/components/Container"
import Ganres from "@/components/Ganres"
import HeroText from "@/components/Hero"
import NewTrMovies from "@/components/NewTrMovies"
import Swager from "@/components/Swager"
import Top from "@/components/Top"

const HomePage = () => {
  return (
    <main>
        <Swager />
        <Ganres />
        <NewTrMovies />
        <Top />
        <Actors />
      <HeroText />
    </main>
  )
}

export default HomePage