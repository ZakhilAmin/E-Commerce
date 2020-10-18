import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  products:any;
  constructor(private productService: ProductService) {
    
   }

  ngOnInit():void {
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
