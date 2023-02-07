import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {Ng2CompleterModule} from "ng2-completer";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, IonicModule.forRoot({
        mode: 'md'
    }), AppRoutingModule, Ng2CompleterModule],
    providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
