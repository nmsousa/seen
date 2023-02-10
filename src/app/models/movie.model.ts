import {SeenStatus} from "./seen-status.enum";
import {MovieWS} from "./ws/movie-ws.model";

export class Movie {
    id: number;
    title: string;
    year: number;
    plot: string;
    genres: Array<string>;
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
            this.plot = movieWS.overview;
            this.runtime = movieWS.runtime;
            this.originalLanguage = movieWS.original_language;
            if (movieWS.poster_path) {
                this.posterUrl = movieWS.poster_path;
            }
        }
    }

}
