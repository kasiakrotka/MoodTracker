import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  description: string  = "Czy chcesz uzupełnić dziennik?"
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  journalOpen(){
    this.dialogRef.close(true);
  }

  close(){
    this.dialogRef.close(false);
  }
}
