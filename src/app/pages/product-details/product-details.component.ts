import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../data/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  mainPicture:string | any = "";
  productImages:string | any = "";
  productName:string | any = "";
  productDesc:string = "";
  productStars:string = "";
  productPrice:string = "";

  private id:string | null = '0'

  @Input()
  count:number = 1;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = products.filter(product => product.id == id)[0]

    this.productName = result.name
    this.productDesc = result.description
    this.productImages = result.images
    this.mainPicture = result.mainPicture
  }

  // Métodos para a quantidade de produtos a serem comprados
  qtdCalcLess() {
    if(this.count == 1) {
      this.count -= 0;
    } else {
      this.count -= 1;
    }
  }

  qtdCalcMore() {
    this.count += 1;
  }

}
