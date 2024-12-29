import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule} from "@angular/material/input"
import { MatButtonModule} from "@angular/material/button"

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit{


  product: Product = {
    id:1,
    name: "",
    price: 0
  }

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Novo produto criado.")

    })

  }

  

}
