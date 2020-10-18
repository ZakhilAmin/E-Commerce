import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 categories$;
 product={};
 id;
  constructor(
    private router:Router,
    private route:ActivatedRoute,// we can easily read rout parameters
    private categoryService: CategoryService, 
    private productService: ProductService) { 
    this.categories$ = categoryService.getCategory().snapshotChanges();
    
    this.id =this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.getProduct(this.id).valueChanges().take(1).subscribe( p=> this.product=p);
  }

  ngOnInit() {
  }
 save(product){
   if(this.id)this.productService.update(this.id,product);
   else this.productService.create(product);
   this.router.navigate(['/admin/products']);
 }
 delete(){
   if(!confirm('Are you sure want to delete items?')) return;
    
   this.productService.delete(this.id);
   this.router.navigate(['/admin/products']);
 }
}
