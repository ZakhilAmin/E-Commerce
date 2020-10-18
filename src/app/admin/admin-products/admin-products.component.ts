import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/product.service';
import {DataTableResource} from 'angular5-data-table';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{
//  products: Product[];
//  productFilters: any[];
//  subscription: Subscription;
//  tableResource: DataTableResource<Product>;
//  items : Product[]=[];
//  itemCount:number;
  dtOptions: DataTables.Settings = {};
  products:any;


  constructor(private productService: ProductService) { 
    //  this.productService.getAll()
    //  .subscribe(products => {
    //    this.productFilters = this.products = products;
    //   this.initializeTable(products);
    //   });
  }
  // private initializeTable(products:Product[]){
  //   this.tableResource = new DataTableResource(products);
  //   this.tableResource.query({offset: 0})
  //    .then(items=>this.items=items);

  //    this.tableResource.count()
  //    .then(count=>this.itemCount=count);
  // }
  // reloadItems(params){
  //   if(!this.tableResource) return;

  //   this.tableResource.query({offset: 0})
  //   .then(items=>this.items=items);
  // }
  // filter(query:string){
  //   this.productFilters=(query)?
  //   this.products.filter(p=>p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())):
  //   this.products;
  // }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
  ngOnInit() :void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
      
    };
    

    this.productService.getAll()
    .subscribe(products => {
     this.products = products;
     });
  }


}
