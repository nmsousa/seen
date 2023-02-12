import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {MovieDialog} from '../movie-dialog/movie-dialog';
import {NgSelectModule} from '@ng-select/ng-select';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MovieListComponent} from "../movie-list/movie-list.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ScrollingModule,
        HomePageRoutingModule,
        NgSelectModule,
    ],
    declarations: [HomePage, MovieDialog, MovieListComponent]
})
export class HomePageModule {
}
