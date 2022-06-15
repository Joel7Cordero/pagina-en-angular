import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products= products;
  share() {
    window.alert('The product has been shared!');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
