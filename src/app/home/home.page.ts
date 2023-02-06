import {Component, OnInit} from '@angular/core';
import mockedMovies from '../../assets/mock-movies.json';
import {Movie} from "../models/movie.model";
import {SeenStatus} from "../models/seen-status.enum";
import {ModalController} from "@ionic/angular";
import {MovieDialog} from "../movie-dialog/movie-dialog";

export enum FilterType {
    ALL = 'ALL',
    TITLE = 'TITLE',
    YEAR = 'YEAR',
    SEEN_STATUS = 'SEEN_STATUS'
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    originalDataSource: Movie[];
    dataSource: Movie[];
    filterText: string;
    filterType: FilterType = FilterType.ALL;

    constructor(private modalController: ModalController) {
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
        this.filterText = event.detail.value;
        this.filterData();
    }

    onFilterByYear(year: number) {
        this.filterText = year.toString();
        this.filterType = FilterType.YEAR;
    }

    onFilterByStatus(status: SeenStatus) {
        this.filterText = status;
        this.filterType = FilterType.SEEN_STATUS;
    }

    filterData() {
        const filter = this.filterText.toLowerCase();
        if (this.filterType === FilterType.ALL) {
            this.dataSource = this.originalDataSource.filter(movie => {
                return (movie.title && movie.title.toLowerCase().includes(filter)) ||
                    (movie.year && movie.year.toString().includes(filter)) ||
                    (movie.plot && movie.plot.toLowerCase().includes(filter)) ||
                    (movie.director && movie.director.toLowerCase().includes(filter)) ||
                    (movie.actors && movie.actors.toLowerCase().includes(filter)) ||
                    (movie.seenStatus && movie.seenStatus.toLowerCase().includes(filter));
            });
        } else if (this.filterType === FilterType.YEAR) {
            this.dataSource = this.originalDataSource.filter(movie => {
                return movie.year && movie.year.toString().includes(filter);
            });
        } else if (this.filterType === FilterType.SEEN_STATUS) {
            this.dataSource = this.originalDataSource.filter(movie => {
                return movie.seenStatus && movie.seenStatus.toLowerCase().includes(filter);
            });
        }

        // reset the filter type
        this.filterType = FilterType.ALL;
    }

    async onAddMovie() {
        const modal = await this.modalController.create({
            component: MovieDialog,
            componentProps: {
                movie: new Movie()
            },
        });
        modal.present();

        const {data, role} = await modal.onWillDismiss();
        if (role === 'confirm') {
            this.originalDataSource.push(data);
            this.dataSource = [...this.originalDataSource];
        }
    }

    onShowDetails(movie: Movie, accordion: any) {
        movie.isExpanded = !movie.isExpanded;
        if (!accordion.value) {
            accordion.value = 'details';
        } else {
            accordion.value = undefined;
        }

    }

    onLabelClick() {

    }
}
