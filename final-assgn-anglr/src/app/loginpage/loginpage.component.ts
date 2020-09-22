import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {


  constructor(private fb: FormBuilder,private router : Router) {}

    // Step 1
  loginform = this.fb.group(
    {username : ['', Validators.required],
    password : ['', Validators.required] 
  }
  );

  ngOnInit() {
  } 

  onClick(){
      this.router.navigate(['/homepage']);
  }

}
