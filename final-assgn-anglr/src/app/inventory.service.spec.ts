import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('InventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule,HttpClientModule]

  }));

  it('should be created', () => {
    const service: InventoryService = TestBed.get(InventoryService);
    expect(service).toBeTruthy();
  });
});
