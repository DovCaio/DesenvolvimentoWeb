import { Component } from '@angular/core';
import { HeaderComponent } from './components/template/header/header.component';
import {FooterComponent} from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
