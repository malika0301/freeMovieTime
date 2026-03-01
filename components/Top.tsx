
import { log } from 'console'
import TopMovies from './TopMovies'
import { MovieCategoryType } from '@/types/MovieCategoryType'
import { MovieType } from '@/types/MovieType'
import TopMultis from './TopMultis'

const Top = async() => {
  //Category
  const categoryData = await fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/category`,
    {
      next:{
        revalidate:3600
      }
    }
  ) 
  const allCategory = await categoryData.json()

  


  //Movie Category
  const categoryMoviesData = await fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_category`,
    {
      next:{
        revalidate:3600
      }
    }
  ) 
  const categoryMovies = await categoryMoviesData.json()


  //Movie
  const data = await fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie`,
    {
      next:{
        revalidate:3600
      }
    }
  )
  const movies = await data.json()


  console.log(movies);
  console.log(categoryMovies);
  console.log(allCategory);
  
  //Kino
  const kinoId = allCategory[0]?.id
  const categoryKinoMovie = categoryMovies?.filter((el:MovieCategoryType) => el.category_id === kinoId)
  const categoryKinoMovieId = categoryKinoMovie?.map((el:MovieCategoryType) => el?.movie_id)
  const allKino = movies?.filter((el:MovieType) => categoryKinoMovieId?.includes(el?.id))
  console.log(allKino);



  const multiId = allCategory[1]?.id
  const categoryMultiMovie = categoryMovies?.filter((el:MovieCategoryType) => el.category_id === multiId)
  const categoryMultiMovieId = categoryKinoMovie?.map((el:MovieCategoryType) => el?.movie_id)
  const allMulti = movies?.filter((el:MovieType) => categoryMultiMovieId?.includes(el?.id))
  console.log(categoryMultiMovie);
  console.log(allMulti);
  
  


 
     

  return (
    <div className=''>
          <div className='flex flex-col lg:flex-row gap-5'>
            <TopMovies  allKino={allKino} />
          <TopMultis allMulti={allMulti} />
          </div>
    </div>
  )
}

export default Top