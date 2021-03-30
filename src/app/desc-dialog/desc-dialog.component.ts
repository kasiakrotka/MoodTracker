import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-desc-dialog',
  templateUrl: './desc-dialog.component.html',
  styleUrls: ['./desc-dialog.component.css']
})
export class DescDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DescDialogComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close(false);
  }
}
