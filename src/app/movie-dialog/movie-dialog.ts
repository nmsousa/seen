import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-movie-dialog',
    templateUrl: './movie-dialog.html',
    styleUrls: ['./movie-dialog.scss'],
})
export class MovieDialog implements OnInit {
    @Input()
    isOpen: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
