import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DynamicComponent } from './shared/dynamic';
import { topnavComponent } from './shared/topnav/topnav.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { HomeService } from './service/home.service';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicComponent,
    topnavComponent,
    LoaderComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
     ])
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
