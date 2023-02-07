import {Component} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Movie} from "../models/movie.model";
import {SeenStatus} from "../models/seen-status.enum";
import {MovieWsService} from "../services/movie-ws.service";

@Component({
    selector: 'app-movie-dialog',
    templateUrl: './movie-dialog.html',
    styleUrls: ['./movie-dialog.scss'],
})
export class MovieDialog {
    movie: Movie;
    SeenStatus = SeenStatus;
    filteredMovies: any[];
    filterText: string;

    constructor(private modalController: ModalController, private movieWsService: MovieWsService) {
    }

    cancel() {
        return this.modalController.dismiss(null, 'cancel');
    }

    confirm() {
        return this.modalController.dismiss(this.movie, 'confirm');
    }

    // TODO: Delete this
    getMovie() {
        this.movieWsService.getMovies(this.movie.title).subscribe(result => {
            this.filteredMovies = result;
        })
    }

    onSearchChange() {
        this.movieWsService.getMovies(this.filterText).subscribe(result => {
            this.filteredMovies = result;
        })
    }

    onSelectMovie(event: any) {
        this.movie.title = event.detail.value.original_title;
        this.movie.year = event.detail.value.release_date.split('-')[0];
    }
}
