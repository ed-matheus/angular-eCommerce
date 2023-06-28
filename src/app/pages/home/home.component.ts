import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../data/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mainPicture:string | any = "";
  productName:string | any = "";
  productStars:string | any = "";
  productPrice:string | any = "0";

  style:boolean | any = false;

  private id:string | null = '0'

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(value =>
    //   this.id = value.get("id")
    // )

    // this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    // const result = products.filter(product => product.id == id)[0]

    // this.productName = result.name
    // this.mainPicture = result.mainPicture
    // this.productPrice = result.price
    // this.productStars = result.stars
  }

}
