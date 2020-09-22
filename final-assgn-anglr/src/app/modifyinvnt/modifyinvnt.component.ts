import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms'
import { InventoryService } from '../inventory.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-modifyinvnt',
  templateUrl: './modifyinvnt.component.html',
  styleUrls: ['./modifyinvnt.component.css']
})
  export class ModifyinvntComponent implements OnInit {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, public _inventoryService: InventoryService,public router : Router) {}
    
  modifyform = this.fb.group(
    {id: [this.data.id], 
    orderDate:[new Date().getTime()],
    merchatId : [this.data.merchatId,[Validators.required,Validators.pattern('^[0-9_]{2,20}$')]],
    customerEmail : [this.data.customerEmail, [Validators.required,Validators.email]],
    amount: [this.data.amount,[Validators.required,Validators.pattern('^[0-9]+(\.?[0-9]+)?$'),Validators.minLength(1)]],
    paymentStatus : [this.data.paymentStatus, [Validators.required,Validators.pattern('^[a-zA-Z,_-]{2,50}$')]],
    
  })
  
  ngOnInit() {
  }

  OnSubmitdata(data){
    this._inventoryService.modifyproducts(data.value);
    this.router.navigate(['/invntlist']);
  }

  OnDeletedata(data){
    this._inventoryService.deleteProducts(data.value);
     console.log('sucess');
    this.router.navigate(['/invntlist']);
  }
}
