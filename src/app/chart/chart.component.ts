import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../shared/calendar.service';

declare var getDataFromCallendar: any; 

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data:number[]; 
  monthName: string; 
  public chartType: string = 'pie';
  public chartDatasets: Array<any>;
  public chartLabels: Array<any> = ['Nieznany', 'Zdenerwowany', 'Zestresowany', 'Smutny', 'Zrelaksowany', 'Szczęśliwy'];
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#B8B8B8', '#FC8888', '#C18AF1', '#979FF3', '#A9D88D', '#FCD87B'],
      hoverBackgroundColor: ['#C7C7C7', '#F0ADAD', '#D1ADE1', '#BEB9E4', '#C0D1AC', '#EFD3A6'],
      borderWidth: 1,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  
  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.data = this.calendarService.getDataFromCallendar(); 
    this.monthName = this.calendarService.months[this.calendarService.todaysDate.getMonth()];
    this.chartDatasets = [
      { data: this.data, label: 'Twoje statystyki na podstawie dni w kalendarzu' }
    ];
  }


}
