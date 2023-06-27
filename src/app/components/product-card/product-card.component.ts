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

  @Input()
  starsNumber:string = '';

  @Input()
  id:string = '0';

  constructor() { }

  ngOnInit(): void {
  }

  teste() {
    console.log()
  }

}
