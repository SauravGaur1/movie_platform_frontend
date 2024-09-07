class MovieCardModel {
    imageSrc;
    alt;
    title;
    date;
    rating;
    languages;

    constructor({
        imageSrc,
        alt = "Unable to Load Image",
        title = "",
        date = "",
        rating = "",
        languages = [],
    }) {
        this.imageSrc = imageSrc;
        this.alt = alt;
        this.title = title;
        this.date = date;
        this.rating = rating;
        this.languages = languages;
    }
}

export default MovieCardModel;