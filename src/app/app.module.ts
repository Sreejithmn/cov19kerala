import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ResultComponentComponent } from './result-component/result-component.component';
import { HistoryDataComponent } from './history-data/history-data.component';
import { GraphComponentComponent } from './graph-component/graph-component.component';
//import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ChartsModule } from 'ng2-charts';
import { ChartCompComponent } from './graph-component/chart-comp/chart-comp/chart-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FilterComponentComponent,
    ResultComponentComponent,
    HistoryDataComponent,
    GraphComponentComponent,
    ChartCompComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    ChartsModule
    //Ng4LoadingSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
