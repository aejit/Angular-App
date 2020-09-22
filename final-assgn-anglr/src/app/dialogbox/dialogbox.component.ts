import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onClickview(){
    this.router.navigate(['/invntlist']);
  }

  onClickedit(){
    this.router.navigate(['/editlist']);
  }

}
