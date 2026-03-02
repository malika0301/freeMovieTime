
import { log } from 'console'
import TopMovies from './TopMovies'
import { MovieCategoryType } from '@/types/MovieCategoryType'
import { MovieType } from '@/types/MovieType'
import TopMultis from './TopMultis'
import getData from '@/utils/api'

const Top = async() => {
  //Category
  const categoryMovie = await getData({url:'category'})

  //Movie Category
  const allCategory = await getData({url:'movie_category'})

  //Movie
  const movies = await getData({url:'movie'})

console.log(categoryMovie);

  
  //Kino
  const kinoId = allCategory[0]?.id
  const categoryKinoMovie = categoryMovie?.filter((el:MovieCategoryType) => el.category_id === kinoId)
  const categoryKinoMovieId = categoryKinoMovie?.map((el:MovieCategoryType) => el?.movie_id)
  const allKino = movies?.filter((el:MovieType) => categoryKinoMovieId?.includes(el?.id))
  console.log(allKino);


  //Multi
  const multiId = allCategory[1]?.id
  const categoryMultiMovie = categoryMovie?.filter((el:MovieCategoryType) => el.category_id === multiId)
  const categoryMultiMovieId = categoryMultiMovie?.map((el:MovieCategoryType) => el?.movie_id)
  const allMulti = movies?.filter((el:MovieType) => categoryMultiMovieId?.includes(el?.id))
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