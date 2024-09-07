import React from 'react'
import MovieCard from '../components/MovieCard'
import MovieCardModel from '../models/movieCardModel'
import CardWrapper from '../components/card'

function Home() {
    
  const movieCardModel = new MovieCardModel({
    imageSrc: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/movie/DAK6opQdLLTti1I0Cs2CWTZK0AoqdW.jpg?q=50&fit=crop&w=320&dpr=1.5",
    alt:"Unable to Load Image",
    title:"The Lion King",
    date:"20 April",
    rating:"6+",
    languages:["Hi", "En", "Hr"],
  })  
    
  return (
    <div>
        <CardWrapper>
            <MovieCard 
                movieCardModel = {movieCardModel}
            />
        </CardWrapper>
    </div>
  )
}

export default Home