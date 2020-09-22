import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventlistComponent } from './inventlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InventlistComponent', () => {
  let component: InventlistComponent;
  let fixture: ComponentFixture<InventlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, MaterialModule, HttpClientModule, RouterTestingModule,BrowserAnimationsModule,FormsModule],
      declarations: [ InventlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
