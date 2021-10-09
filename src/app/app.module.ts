import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from '@app/app-router.module';

import { AppComponent } from './app.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRouterModule,
        HttpClientModule,
        RouterModule,
        LoadingBarModule,
        LoadingBarHttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {}

