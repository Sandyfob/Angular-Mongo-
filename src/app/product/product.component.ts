import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Array } from '../array';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public result: Observable<any>
  products:any
  constructor(private service: ProductService) {
    this.products = this.service.get()
    JSON.parse(this.products)

  }

  get() {
     this.service.get().subscribe((data:Array)=>{
        this.products=data.prod
       console.log(this.products);
       
       console.log(JSON.stringify(data));
       
     })
  }

 
  posts(){
    this.service.post().toPromise().then(
      data=>{
        console.log(data);
        
      }
    )
  }

  put(){
    this.service.put().toPromise().then(
      data=>{
        console.log(data);
        
      }
    )
  }

  delete(){
    this.service.delete().toPromise().then(
      data=>{
        console.log(data);
        
      }
    )
  }

  ngOnInit(): void {
  }

}
