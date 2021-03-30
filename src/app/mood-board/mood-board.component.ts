import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CalendarService } from '../shared/calendar.service';

declare var uncheckAllRadiobuttons: any; 

@Component({
  selector: 'app-mood-board',
  templateUrl: './mood-board.component.html',
  styleUrls: ['./mood-board.component.css'],
  
})
export class MoodBoardComponent implements OnInit {

  @ViewChild('moodForm') moodForm: NgForm;
  @Output() changeToJournalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  date : Date = null;
  day : number = null;
  month : string = null; 
  year : number =null; 
  callendarArray = null;
  daySelected = false; 
  selectedDayId = null;
  selectedDayValue = null;
  daysOfWeek = ["Pn", "Wt", "Śr", "Czw", "Pt", "Sb", "Ndz"];
  months=["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
  moods = null;

  constructor(private dialog: MatDialog, private calendarService: CalendarService) { 
  }

  ngOnInit(): void {
    this.date = this.calendarService.todaysDate;
    this.day = this.date.getDate();
    this.year = this.date.getFullYear(); 
    this.month = this.months[this.date.getMonth()];
    this.callendarArray = this.calendarService.callendarArray;
    this.moods = this.calendarService.getMoods();
  }

  onRadioDayChange(e) {
    let element = e.target; 
    if(element.checked){
      this.selectedDayId = element.id;
      this.selectedDayValue = element.value;
      this.daySelected = true;
    }
  }

  templateForm(value: any ){
    let i = this.selectedDayId[0];
    let j = this.selectedDayId[2];
    this.callendarArray[i][j].moodValue = Number(value.mood);
    console.log(Number(value.mood));

    new uncheckAllRadiobuttons();
    this.daySelected = false;
    this.calendarService.updateCallendarArray(this.callendarArray);
    this.calendarService.dataUpdated.emit();
  }

  moodClicked(event: any){
    let value = event.target.id;
    this.changeDayMoodByClick(value);
    if(this.selectedDayValue == this.day)
      this.askForJournal();
  }

  askForJournal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true; 
    dialogConfig.disableClose = true; 
    let dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      if(value == true){
        console.log(value);
        this.changeToJournalEvent.emit(value);
      }
    })
  }

  changeDayMoodByClick(value: any){
    let i  = this.selectedDayId[0];
    let j = this.selectedDayId[2];
    this.callendarArray[i][j].moodValue = Number(value);
    console.log(this.callendarArray[i][j].moodValue);

    new uncheckAllRadiobuttons();
    this.daySelected = false;
    this.calendarService.updateCallendarArray(this.callendarArray);
    this.calendarService.dataUpdated.emit();
  }
  
}
