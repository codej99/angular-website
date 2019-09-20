import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  form: FormGroup;
  title: string;
  description: string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<AlertDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
      this.title = data.title;
      this.description = data.description;
  }

  ngOnInit() {
      this.form = this.fb.group({
        title: [this.title, []],
        description: [this.description, []]
      });
  }
}
