import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamicForm/dynamicForm.component';
import { DynamicComponent } from './shared/dynamic';
import { topnavComponent } from './shared/topnav/topnav.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { HomeService } from './service/home.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicComponent,
    topnavComponent,
    LoaderComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
        ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'product/add'},
      { path: 'product/add', component: DynamicFormComponent },
      { path: 'user/add', component: DynamicFormComponent },

     ])
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
