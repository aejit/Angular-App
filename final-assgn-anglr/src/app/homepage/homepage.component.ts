import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog,public router:Router) {}

  openDialog(){
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '200px',
    });

    this.router.events
    .subscribe(() => {
      dialogRef.close();
 });

  }

  ngOnInit() {
  }

  OnClick(){
    alert('you are already on home page');
  }

}
