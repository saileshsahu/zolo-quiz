import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  showError: Boolean = false;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  verifyLogin() {
    if ((this.username === "admin") && (this.password === "admin")) {
      console.log("logged in");
      this.showError = false;
      this.dialog.closeAll();
      this.router.navigate(['/quiz']);
    }
    else {
      this.showError = true;
      console.log("error");
    }
  }

}
