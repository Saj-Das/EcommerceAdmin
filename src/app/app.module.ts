import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamicForm/dynamicForm.component';
import { DynamicComponent } from './shared/dynamic';
import { topnavComponent } from './shared/topnav/topnav.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { DynamicFormService } from './service/dynamicForm.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { DynamictabComponent } from './dynamictab/dynamictab.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicComponent,
    topnavComponent,
    LoaderComponent,
    DynamictabComponent
    ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'product/add', component: DynamicFormComponent },
      { path: 'user/add', component: DynamicFormComponent },
      {path:'home', component: DynamictabComponent}

    ])
  ],
  providers: [DynamicFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
