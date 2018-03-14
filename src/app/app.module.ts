import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DressDetailsComponent } from './dress-details/dress-details.component';
import { DressSearchComponent } from './dress-search/dress-search.component';
import { DressesComponent } from './dresses/dresses.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DressService }          from './dress.service';
import { MessageService }       from './message.service';
//import { MessagesComponent }    from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DressDetailsComponent,
    DressSearchComponent,
    DressesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DressService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
