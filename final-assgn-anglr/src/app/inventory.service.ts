import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IProdinvnt } from './prodinvnt';



@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private _url: string = 'assets/data/product.json';
  public INIT_DATA = [];
  constructor(private http: HttpClient) { }

  public Productdata = new BehaviorSubject(this.INIT_DATA);



  getproducts() {
    return this.http.get<IProdinvnt[]>(this._url)
      .subscribe(data => {
        this.INIT_DATA = data;
        this.Productdata.next(data);
      },
        error => {
          alert(error.message);
        }

      );
  }


  addproducts(hero: IProdinvnt) {

    console.log(hero);
    this.INIT_DATA.unshift(hero),
      console.log(this.INIT_DATA);
    this.Productdata.next(this.INIT_DATA)
    return (
      this.Productdata);

  }

  modifyproducts(hero: IProdinvnt) {
    this.INIT_DATA.forEach((ele, i) => {
      if (this.INIT_DATA[i].id == hero.id) {
        this.INIT_DATA[i] = hero;
      }
    });
    return (this.Productdata.next(this.INIT_DATA));
  }

  deleteProducts(hero: IProdinvnt) {
    this.INIT_DATA.forEach((ele, i) => {
      if (this.INIT_DATA[i].id == hero.id) {
        this.INIT_DATA.splice(i, 1);
      }
      this.Productdata.next(this.INIT_DATA)
    });
    return (this.Productdata);
  }


}
