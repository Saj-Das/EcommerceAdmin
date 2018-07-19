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
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { DynamicListService } from './service/dynamic-list.service';
import { DynamicComponentForTabs } from './shared/dynamicCompForTab';
import { footerComponent } from './shared/footer/footer.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicComponent,
    topnavComponent,
    LoaderComponent,
    DynamictabComponent,
    DynamicListComponent,
    DynamicComponentForTabs,
    footerComponent
    ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MultiselectDropdownModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {path:'home', component: DynamictabComponent},
      {path:'list', component: DynamicListComponent}

    ])
  ],
  providers: [DynamicFormService,DynamicListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
