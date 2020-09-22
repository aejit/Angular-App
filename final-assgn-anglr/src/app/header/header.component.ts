import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { Router } from '@angular/router';
// import { DialogboxComponent } from '../dialogbox/dialogbox.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,public router:Router) { }

  isActive = false; 
  openDialog(){
    const dialogRef = this.dialog.open( LoginpageComponent , {
  //     height: '400px',
  // width: '600px'
    });

    this.router.events
    .subscribe(() => {
      dialogRef.close();
 });

  }

  ngOnInit() {
  }

}
