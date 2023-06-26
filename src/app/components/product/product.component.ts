import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  productImage:string = '';

  @Input()
  productOtherImages:string = '';

  @Input()
  productName:string = 'TESTE';

  @Input()
  productDescription:string = '';

  @Input()
  productPrice:string = '';

  @Input()
  productStyle:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
