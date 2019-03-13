import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      // height: '310px',
    });
  }
}