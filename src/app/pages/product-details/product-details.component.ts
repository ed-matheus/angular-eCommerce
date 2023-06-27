import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productImages:string = "";
  productName:string = "";
  productDesc:string = "";
  productStars:string = "";
  productPrice:string = "";

  private id:string | null = '0'

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  // setValuesToComponent(id:string) {
  //   const result = products.filter(product => product.id == id)

  //   console.log(result)
  // }

}
