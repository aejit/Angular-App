import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlistComponent } from './editlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditlistComponent', () => {
  let component: EditlistComponent;
  let fixture: ComponentFixture<EditlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, MaterialModule, HttpClientModule, RouterTestingModule,BrowserAnimationsModule],
      declarations: [ EditlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlistComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('from invalid when empty', () => {
    expect(component.editform.valid).toEqual(false);
  });

  it ('id validaty',()=>{
    let id=component.editform.controls['id']
    expect(id.valid).toBeFalsy();
    let error={};
    error=id.errors || {};
    expect(error['required']).toBeTruthy();
    id.setValue('qw');
    error=id.errors || {};
    expect(error['pattern']).toBeTruthy();
    // id.setValue('78878787');
    // error=id.errors || {};
    // expect(error['maxlength']).toBeTruthy();
  });

  it ('productname validaty',()=>{
    let productname=component.editform.controls['productname']
    expect(productname.valid).toBeFalsy();
    let error={};
    error=productname.errors || {};
    expect(error['required']).toBeTruthy();
    productname.setValue('78');
    error=productname.errors || {};
    expect(error['pattern']).toBeTruthy();
    // productname.setValue('78878787');
    // error=productname.errors || {};
    // expect(error['maxlength']).toBeTruthy();
  });

  it ('category validaty',()=>{
    let category=component.editform.controls['category']
    expect(category.valid).toBeFalsy();
    let error={};
    error=category.errors || {};
    expect(error['required']).toBeTruthy();
    category.setValue('78@');
    error=category.errors || {};
    expect(error['pattern']).toBeTruthy();
    // category.setValue('788787878');
    // error=category.errors || {};
    // expect(error['maxlength']).toBeTruthy();
  });


  it ('availableunits validaty',()=>{
    let availableunits=component.editform.controls['availableunits']
    expect(availableunits.valid).toBeFalsy();
    let error={};
    error=availableunits.errors || {};
    expect(error['required']).toBeTruthy();
    availableunits.setValue('as');
    error=availableunits.errors || {};
    expect(error['pattern']).toBeTruthy();
    // availableunits.setValue('2431656');
    // error=availableunits.errors || {};
    // expect(error['maxlength']).toBeTruthy();
  });

  it ('unitprice validaty',()=>{
    let unitprice=component.editform.controls['unitprice']
    expect(unitprice.valid).toBeFalsy();
    let error={};
    error=unitprice.errors || {};
    expect(error['required']).toBeTruthy();
    unitprice.setValue('qw');
    error=unitprice.errors || {};
    expect(error['pattern']).toBeTruthy();
  });

  it ('tags validaty',()=>{
    let tags=component.editform.controls['tags']
    expect(tags.valid).toBeFalsy();
    let error={};
    error=tags.errors || {};
    expect(error['required']).toBeTruthy();
  });

  it ('area validaty',()=>{
    let area=component.editform['controls'].location['controls'].area;
    expect(area.valid).toBeFalsy();
    let error={};
    error=area.errors || {};
    expect(error['required']).toBeTruthy();
    area.setValue('12');
    error=area.errors || {};
    expect(error['pattern']).toBeTruthy();

  });

  it ('zone validaty',()=>{
    let zone=component.editform['controls'].location['controls'].zone;
    expect(zone.valid).toBeFalsy();
    let error={};
    error=zone.errors || {};
    expect(error['required']).toBeTruthy();
    zone.setValue('12#');
    error=zone.errors || {};
    expect(error['pattern']).toBeTruthy();

  });

  it ('shelf validaty',()=>{
    let shelf=component.editform['controls'].location['controls'].shelf;
    expect(shelf.valid).toBeFalsy();
    let error={};
    error=shelf.errors || {};
    expect(error['required']).toBeTruthy();
    shelf.setValue('12&*');
    error=shelf.errors || {};
    expect(error['pattern']).toBeTruthy();

  });
});
