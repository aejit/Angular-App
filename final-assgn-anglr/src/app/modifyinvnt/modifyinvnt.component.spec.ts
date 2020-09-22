import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyinvntComponent } from './modifyinvnt.component';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms'
import { MaterialModule } from '../material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { InventlistComponent } from '../inventlist/inventlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModifyinvntComponent', () => {
  let component: ModifyinvntComponent;
  let fixture: ComponentFixture<ModifyinvntComponent>;
  let formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule, MaterialModule, HttpClientModule, RouterTestingModule,BrowserAnimationsModule],
      declarations: [ ModifyinvntComponent,InventlistComponent ],
      providers: [
        {provide: FormBuilder, useValue: formBuilder},
        {provide: MAT_DIALOG_DATA, useValue: {
          id: 9867,
          productname: 'alpha',
          category: 'beta',
          availableunits: 7689,
          unitprice: 56,
          tags : 'abc',
          lastupdate: 23475897948,
          location: {
            area: 'hello',
            zone: 'bombay',
            shelf: 'calcutta'
          },
          description: 'gamma' 
        }},
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyinvntComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('from invalid when empty', () => {
    expect(component.modifyform.valid).toBeTruthy();
  });
  
});

// toEqual(false)