import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyService } from '../buy.service';
import { ProductService } from '../product.service';
import { Product } from './../product.model';
import { Buy } from './../buy.model';

@Component({
  selector: 'app-product-addcar',
  templateUrl: './product-addcar.component.html',
  styleUrls: ['./product-addcar.component.css']
})
export class ProductAddcarComponent implements OnInit {

 
  product!: Product
  buy!: Buy
  constructor(private productService: ProductService,private buyService: BuyService,private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product =>{
      this.product =product
    })
  
   
  }

  addProduct(): void{
 

    this.buyService.createBuy(this.product).subscribe(() =>{
      this.buyService.showMessage('Produto adicionado!')
      this.router.navigate(['/products'])
    })
    
  }

  addCancel(): void{
    this.router.navigate(['/products'])
  }

}
