import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mood-tracker';
  loadedFeature = "calendar";

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

  changeToJournal(){
    console.log("elo")
    this.loadedFeature = 'journal';
  }
}
