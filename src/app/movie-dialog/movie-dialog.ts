import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Movie} from "../models/movie.model";
import {SeenStatus} from "../models/seen-status.enum";
import {MovieWsService} from "../services/movie-ws.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-movie-dialog',
    templateUrl: './movie-dialog.html',
    styleUrls: ['./movie-dialog.scss'],
})
export class MovieDialog implements OnInit {
    movie: Movie;
    SeenStatus = SeenStatus;
    filteredMovies: Movie[] = [];
    filterText: string;
    showMoviesList: boolean;
    genres$: Observable<string[]>;

    selectedCars = [3];
    cars = [
        {id: 1, name: 'Volvo'},
        {id: 2, name: 'Saab', disabled: true},
        {id: 3, name: 'Opel'},
        {id: 4, name: 'Audi'},
    ];

    constructor(private modalController: ModalController, private movieWsService: MovieWsService) {
    }

    ngOnInit() {
        this.genres$ = this.movieWsService.getMovieGenres();
    }

    // TODO: Delete this?
    getMovie() {
        this.movieWsService.getMovie(this.movie.id).subscribe(result => {
            this.movie = result;
        })
    }

    onSearchChange() {
        if (this.filterText) {
            this.movieWsService.getMovies(this.filterText).subscribe(result => {
                this.filteredMovies = result;
                this.updateShowMoviesList();
            })
        } else {
            this.updateShowMoviesList();
        }
    }

    onSelectMovie(movie: any) {
        this.filterText = '';
        this.movieWsService.getMovie(movie.id).subscribe(movie => {
            this.movie = movie;
        });
    }

    updateShowMoviesList() {
        this.showMoviesList = !!this.filterText && this.filteredMovies && this.filteredMovies.length > 0;
    }

    cancel() {
        return this.modalController.dismiss(null, 'cancel');
    }

    confirm() {
        this.fixGenres();

        return this.modalController.dismiss(this.movie, 'confirm');
    }

    fixGenres() {
        if (this.movie.genres) {
            // We need this fix because custom genres are being added as an object with the property 'label'
            this.movie.genres = this.movie.genres.map((genre: any) => genre.label ? genre.label : genre);
        }
    }
}
