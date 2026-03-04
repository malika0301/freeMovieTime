import TopMovies from './TopMovies'
import { MovieCategoryType } from '@/types/MovieCategoryType'
import { MovieType } from '@/types/MovieType'
import TopMultis from './TopMultis'

const Top = async () => {
  // Kategoriyalar (Kino, Multi, Serial...)
  const categoryMoviesData = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_category` ,
    {
      next:{
        revalidate:3600
      }
    }
  )
  const categoryData = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/category` ,
    {
      next:{
        revalidate:3600
      }
    }
  )
   const data = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie`,
    {
      next:{
        revalidate:3600
      }
    }
  )
  const movies = await data.json()

  const category = await categoryData.json()
  const categoryMovie = await categoryMoviesData.json()

console.log(movies);
console.log(category);
console.log(categoryMovie);

 
  
  const kinoId = category[0]?.id

  const categoryKinoMovie = categoryMovie?.filter(
    (el: MovieCategoryType) => el.category_id === kinoId
  )
  const categoryKinoMovieId = categoryKinoMovie?.map(
    (el: MovieCategoryType) => el?.movie_id
  )
  const allKino = movies?.filter((el: MovieType) =>
    categoryKinoMovieId?.includes(el?.id)
  )

 
  const multiId = category[1]?.id

  const categoryMultiMovie = categoryMovie?.filter(
    (el: MovieCategoryType) => el.category_id === multiId
  )
  const categoryMultiMovieId = categoryMultiMovie?.map(
    (el: MovieCategoryType) => el?.movie_id
  )
  const allMulti = movies?.filter((el: MovieType) =>
    categoryMultiMovieId?.includes(el?.id)
  )

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-5">
        <TopMovies allKino={allKino} />
        <TopMultis allMulti={allMulti} />
      </div>
    </div>
  )
}

export default Top