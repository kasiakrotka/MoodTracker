import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
  animations: [
    trigger('slide', [
      state('1', style({ transform: 'translateX(0)'})),
      state('2', style({ transform: 'translateX(-33%)' })),
      state('3', style({ transform: 'translateX(-66%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class JournalComponent implements OnInit {

  activePanel: Panel = Panel.JOURNAL;
  left: boolean = true; 
  right: boolean = false; 
  thingsDone: string [] = ["cleaned kitchen", "do yoga"];
  min: boolean = true;  //min = 1
  max: boolean = false;   //max = 7

  constructor() { }

  ngOnInit(): void {
  }

  saveGratitude(gratitudeForm: NgForm){
    console.log("gratitude");
  } 

  saveJournalText(journalForm: NgForm){
    console.log("journal");
  }

  saveThingsDone(thingsDoneForm: NgForm){
    console.log("things done");
  }

  addThingDone(){
    this.thingsDone.push("");
    this.min = false;
    if(this.thingsDone.length == 7){
      this.max = true; 
    }
  }

  removeThingDone(){
    this.thingsDone.splice(this.thingsDone.length-1, 1);
    this.max = false; 
    if(this.thingsDone.length == 1){
      this.min = true;
    }
  }

  moveRight(){
    if(this.activePanel < 3){
      this.activePanel = this.activePanel + 1;
      this.left = false;
      if(this.activePanel == 3){
        this.right = true;
      }
    }
  }

  moveLeft(){
    if(this.activePanel > 1){
      this.activePanel = this.activePanel - 1; 
      this.right = false;
      if(this.activePanel == 1){
        this.left = true;
      }
    }
  }
}

enum Panel {
  JOURNAL = 1, 
  GRATITUDE = 2, 
  THINGS = 3
}