import React from 'react'
import MovieCardModel from '../models/movieCardModel'
import MovieCategorySection from '../layouts/movieCategorySection'

function Home() {
    return (
        <div>
            <MovieCategorySection></MovieCategorySection>
            <MovieCategorySection></MovieCategorySection>
            <MovieCategorySection></MovieCategorySection>
        </div>
    )
}

export default Home