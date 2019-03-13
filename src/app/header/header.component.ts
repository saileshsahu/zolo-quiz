import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showLogout : Boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      // height: '310px',
    });
  }

  logout(){
    this.showLogout = false;
  }

}
