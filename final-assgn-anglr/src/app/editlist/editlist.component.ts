import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent implements OnInit {

  public editdata;

  constructor(private fb: FormBuilder,private router : Router,private _inventoryService : InventoryService) {
  }


  editform = this.fb.group(
    {id: ['',[Validators.required,Validators.pattern('^[0-9_]{2,15}$')]],
    orderDate:[new Date().getTime()],
    merchatId:['',[Validators.required,Validators.pattern('^[0-9_]{2,20}$')]],
    customerEmail : ['', [Validators.required,Validators.email]],
    amount: ['',[Validators.required,Validators.pattern('^[0-9]+(\.?[0-9]+)?$'),Validators.minLength(1)]],
    paymentStatus : ['', [Validators.required,Validators.pattern('^[a-zA-Z,_-]{2,50}$')]],
  })
  
  ngOnInit() {
  }

  OnSubmit(){
    this._inventoryService.addproducts(this.editform.value)
    this.router.navigate(['/invntlist']);
    error => console.log('Error',error); 
  }

  Onclick(){
    this.router.navigate(['/homepage']);
    }
  
}



