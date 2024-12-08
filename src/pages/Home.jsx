import React from "react";
import MovieCardModel from "../models/movieCardModel";
import MovieCategorySection from "../layouts/movieCategorySection";

function Home() {
    return (
        <div>
            <MovieCategorySection
                category={"Now playing"}
            ></MovieCategorySection>
            <MovieCategorySection
                category={"Coming Soon"}
            ></MovieCategorySection>
        </div>
    );
}

export default Home;
