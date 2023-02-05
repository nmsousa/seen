import {Component} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Movie} from "../models/movie.model";
import {SeenStatus} from "../models/seen-status.enum";

@Component({
    selector: 'app-movie-dialog',
    templateUrl: './movie-dialog.html',
    styleUrls: ['./movie-dialog.scss'],
})
export class MovieDialog {
    movie: Movie;
    SeenStatus = SeenStatus;

    constructor(private modalController: ModalController) {
    }

    cancel() {
        return this.modalController.dismiss(null, 'cancel');
    }

    confirm() {
        return this.modalController.dismiss(this.movie, 'confirm');
    }

}
