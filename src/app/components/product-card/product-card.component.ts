import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  image:string = '';

  @Input()
  name:string = '';

  @Input()
  price:string = '';

  @Input()
  description:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
