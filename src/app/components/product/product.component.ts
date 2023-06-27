import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  product: Product | undefined;

  @Input()
  productImage:string = '';

  @Input()
  productOtherImages:string = '';

  @Input()
  productName:string = '';

  @Input()
  productDescription:string = '';

  @Input()
  productPrice:string = '';

  @Input()
  productStyle:string = '';

  @Input()
  productStarsNumber:string = '';

  @Input()
  count:number = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
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
