import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {MovieDialog} from "../movie-dialog/movie-dialog";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        NgSelectModule,
    ],
    declarations: [HomePage, MovieDialog]
})
export class HomePageModule {
}
