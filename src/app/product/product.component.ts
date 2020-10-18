import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import 'rxjs/operator/switchMap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[]=[];
  filterdProducts:Product[]=[];
  category$;
  category:string;
  constructor(private activeRout: ActivatedRoute, private productService: ProductService, private productCategories: CategoryService) { 
     this.productService
      .getAll()
        .switchMap(products =>{
      this.products = products;
          return activeRout.queryParamMap;
        })
       // get the current route parameters
     // activeRout.queryParamMap
      .subscribe(params=>{
        this.category = params.get('category');

        // add filters product based on category condition
        this.filterdProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
        });

    
      this.category$ = this.productCategories.getCategory().snapshotChanges();

    }

}
