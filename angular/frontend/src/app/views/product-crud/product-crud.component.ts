import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {Router} from "@angular/router"


@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent implements OnInit {


  constructor(private router: Router) { }
  propLegal: string = "Atributo qualquer";

  ngOnInit(): void {
    
  }

  fazerAlgo(): void {

    console.log("Fazendo algo");

  }

  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"])
  }
}
