import {Component, OnInit} from '@angular/core';
import mockedMovies from '../../assets/mock-movies.json';
import {Movie} from "../models/movie.model";
import {SeenStatus} from "../models/seen-status.enum";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    originalDataSource: Movie[];
    dataSource: Movie[];
    isOpen: boolean;

    constructor() {
    }

    ngOnInit(): void {
        // TODO: Remove this code, only exists because the mock-movies.json movies don't have the seenStatus property
        this.originalDataSource = mockedMovies.movies.map((movie: any) => {
            movie.seenStatus = SeenStatus.HOME;
            return movie;
        });
        this.dataSource = [...this.originalDataSource];
    }

    onImgLoadError(movie: Movie) {
        // Fallback image
        movie.posterUrl = '../../assets/NoImageAvailable.jpg';
    }

    onSearchChange(event: any) {
        const filterText = event.detail.value.toLowerCase();
        this.dataSource = this.originalDataSource.filter(movie => {
            return movie.title.toLowerCase().includes(filterText) ||
                movie.year.toString().includes(filterText);
        })
    }

    onAddMovie() {
        this.isOpen = true;
    }

}
