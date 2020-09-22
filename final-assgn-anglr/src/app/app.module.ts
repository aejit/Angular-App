import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { InventlistComponent } from './inventlist/inventlist.component';
import { EditlistComponent } from './editlist/editlist.component';
import { InventoryService } from './inventory.service';
import { HttpClientModule } from '@angular/common/http';
import { ModifyinvntComponent } from './modifyinvnt/modifyinvnt.component';
import { MatInputModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    DialogboxComponent,
    InventlistComponent,
    EditlistComponent,
    ModifyinvntComponent,
    HeaderComponent,

  ],
  entryComponents:[DialogboxComponent,ModifyinvntComponent, LoginpageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    DeferLoadModule,
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
