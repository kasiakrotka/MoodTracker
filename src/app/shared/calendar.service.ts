import { EventEmitter, Injectable } from '@angular/core';
import { Mood } from './mood.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  callendarArray: any;
  todaysDate = new Date();
  daysOfWeek = ["Pn", "Wt", "Śr", "Czw", "Pt", "Sb", "Ndz"];
  months=["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
  
  dataUpdated = new EventEmitter<any>();

  moods = [
    new Mood(1, "nie wiem", "white"),
    new Mood(2, "zdenerowany", "red"),
    new Mood(3, "zestresowany", "purple"),
    new Mood(4, "smutny", "blue"), 
    new Mood(5, "zrelaksowany", "green"),
    new Mood(6, "szczęśliwy", "yellow")
  ]

  constructor() { 
    let day = this.todaysDate.getDate();
    let month = this.todaysDate.getMonth();
    let year = this.todaysDate.getFullYear();
    this.todaysDate = new Date(year, month , day);
    this.callendarArray = this.generateCallendarForDate(this.todaysDate);
    
  }

  countDaysInThisMonth() {
    let month = this.todaysDate.getMonth();
    let year = this.todaysDate.getFullYear();
    let daysInMonth = new Date(year, month + 1, 0);
    return daysInMonth.getDate();
  }

  countDaysInMonth(date: Date) {
    let month = date.getMonth();
    let year = date.getFullYear();
    let daysInMonth = new Date(year, month + 1, 0);
    return daysInMonth.getDate();
  }

  getCurrentDayOfWeek(date: Date) {
    let dayOfWeek = date.getDay();
    return dayOfWeek;
  }

  getFirstDayOfMonth(date: Date) {
    let year = date.getFullYear();
    let month = date.getMonth()
    let firstDay = (new Date(year, month, 1)).getDay();
    if(firstDay == 0)
      return 7;
    return firstDay;
  }

  getLastDayOfMonth(date: Date) {
    let year = date.getFullYear();
    let month = date.getMonth()
    let lastDay = (new Date(year, month + 1, 0)).getDay();
    if(lastDay == 0)
      return 7;
    return lastDay;
  }

  getNumberOfWeeksInMonth(date: Date) {
    let month = date.getMonth();
    let year = date.getFullYear();
    let numOfDays = this.countDaysInMonth(date);
    let firstDay = (new Date(year, month, 1)).getDay();

    let numOfWeeks = 1;
    numOfDays = numOfDays - (7 - (firstDay - 1));
    numOfWeeks = numOfWeeks + Math.floor(numOfDays / 7)
    if ((numOfDays % 7) > 0) {
      numOfWeeks++;
    }
    return numOfWeeks;
  }

  generateCallendarForDate(date: Date) {
    let numOfWeeks = this.getNumberOfWeeksInMonth(date);
    this.callendarArray = new Array(numOfWeeks);
    for (let i = 0; i < this.callendarArray.length; i++) {
      this.callendarArray[i] = new Array(7);
    }
    let firstDayOfMonth = this.getFirstDayOfMonth(date);
    let lastDayOfMonth = this.getLastDayOfMonth(date);
    let daysInMonth = this.countDaysInMonth(date);
    //first week
    let day = 1;

    for (let i = 0; i < 7; i++) {
      if (i < firstDayOfMonth - 1)
        this.callendarArray[0][i] = {day: 0, moodValue:0};
      else
      {  this.callendarArray[0][i] = {day: day, moodValue: 1}; day++}
    }

    //full weeks
    for (let i = 1; i < numOfWeeks - 1; i++) {
      for (let j = 0; j < 7; j++)
      {  this.callendarArray[i][j] = {day: day, moodValue: 1}; day++; 
      }
    }
    //last week 
    for (let i = 0; i < 7; i++) {
      if (i < lastDayOfMonth)
      {  this.callendarArray[numOfWeeks - 1][i] = {day: day, moodValue: 1}; day++;}
      else
        this.callendarArray[numOfWeeks - 1][i] = {day: 0, moodValue: 0};
    }

    return this.callendarArray;
  }

  updateCallendarArray(updatedCallendarArray){
    this.callendarArray = updatedCallendarArray;
  }

  getMoods(){
    return this.moods;
  }

  getDataFromCallendar(){
    let dataArray:number[] = new Array(this.moods.length);
    for(let n = 0; n < dataArray.length; n++)
      dataArray[n] = 0;

    for (let i = 0; i < this.callendarArray.length; i++) {
      for(let j = 0; j < this.callendarArray[i].length; j++)
        dataArray[this.callendarArray[i][j].moodValue-1]++;
    }
    return dataArray;
  }
}
