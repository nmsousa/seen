import {SeenStatus} from "./seen-status.enum";

export class Movie {
    id: number;
    title: string;
    year: number;
    plot: string;
    genres: Array<string>;
    director: string;
    actors: string;
    posterUrl: string = '../../assets/NoImageAvailable.jpg';
    runtime: number; // duration in minutes
    seenStatus: SeenStatus = SeenStatus.HOME;

    // UI properties
    isExpanded: boolean;

    constructor() {
    }
}
