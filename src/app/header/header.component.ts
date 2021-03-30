import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DescDialogComponent } from '../desc-dialog/desc-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  onSelectPageTitle(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true; 
    dialogConfig.disableClose = false; 
    dialogConfig.maxWidth = "600px";
    let dialogRef = this.dialog.open(DescDialogComponent, dialogConfig);
  }
}
