import { Component } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-assgn-anglr';

  constructor (private _inventoryService:InventoryService){this._inventoryService.getproducts()}
}
