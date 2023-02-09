import {SeenStatus} from "./seen-status.enum";
import {Genre, MovieWS} from "./ws/movie-ws.model";

export class Movie {
    id: number;
    title: string;
    year: number;
    plot: string;
    genres: Array<Genre>;
    director: string;
    actors: string;
    posterUrl: string = '../../assets/NoImageAvailable.jpg';
    originalLanguage: string;
    runtime: number; // duration in minutes
    seenStatus: SeenStatus = SeenStatus.HOME;

    // UI properties
    isExpanded: boolean;

    constructor(movieWS?: MovieWS) {
        if (movieWS) {
            this.id = movieWS.id;
            this.title = movieWS.title;
            this.year = new Date(movieWS.release_date).getFullYear();
            this.genres = movieWS.genres;
            this.plot = movieWS.overview;
            this.runtime = movieWS.runtime;
            this.posterUrl = movieWS.poster_path;
            this.originalLanguage = movieWS.original_language;
        }
    }
}
