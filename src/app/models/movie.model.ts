import {SeenStatus} from "./seen-status.enum";

export interface Movie {
    id: number,
    title: string;
    year: number;
    plot: string;
    genres: Array<string>;
    director: string;
    actors: Array<string>;
    posterUrl: string;
    runtime: number; // duration in minutes
    seenStatus: SeenStatus;
}
