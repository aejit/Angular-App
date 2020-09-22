import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InventlistComponent } from './inventlist/inventlist.component';
import { EditlistComponent } from './editlist/editlist.component';


const routes: Routes = [{path:'', redirectTo: '/loginpage', pathMatch:'full'},
                        {path:'loginpage', component:LoginpageComponent},
                        {path:'homepage',component:HomepageComponent},
                        {path:'invntlist', component:InventlistComponent},
                        {path:'editlist',component:EditlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
