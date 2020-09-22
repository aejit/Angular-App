import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatSortModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


const MaterialComponent = [MatButtonModule,MatToolbarModule,MatDialogModule,MatTableModule
                          ,MatPaginatorModule,MatInputModule,MatCardModule,MatSortModule,MatIconModule]

@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }