
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { PaisajesComponent } from "./paisajes/paisajes.component";
import { PruebaComponent } from './prueba/prueba.component';
import { FormComponent } from './paisajes/form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule, PaisajesComponent, PruebaComponent,FormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
