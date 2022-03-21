import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { _id: 1, name: 'The Lord of the Rings', description: 'Lorem ipsum dolor sit amet, consectetur.', price: 90.5, imgUrl: 'teste'}
  ];
  displayedColumns = ['name', 'description', 'price', 'imgUrl'];

  constructor() {
    //this.products = [];
  }

  ngOnInit(): void {

  }

}
