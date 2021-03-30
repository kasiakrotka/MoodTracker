import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoodBoardComponent } from './mood-board/mood-board.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { JournalComponent } from './journal/journal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StatsComponent } from './stats/stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CalendarService } from './shared/calendar.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DescDialogComponent } from './desc-dialog/desc-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MoodBoardComponent,
    HeaderComponent,
    ChartComponent,
    JournalComponent,
    HomePageComponent,
    StatsComponent,
    ConfirmDialogComponent,
    DescDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
