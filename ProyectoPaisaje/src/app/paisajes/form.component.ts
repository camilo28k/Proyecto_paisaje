import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { PaisajesComponent } from './paisajes.component';
import { Paisaje } from './paisaje';
import { PaisajesService } from './paisajes.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, PaisajesComponent, CommonModule],  
  templateUrl: './form.component.html'
})
export class FormComponent {

  public paisaje: Paisaje = new Paisaje();
  titulo: string = "Formulario de Ingreso de Paisaje";

  constructor(
    private paisajesService: PaisajesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarPaisaje();
  }

  // Cargar el paisaje actual
  cargarPaisaje(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.paisajesService.getPaisaje(id).subscribe((paisaje) => this.paisaje = paisaje);
      }
    });
  }
  // Actualizar paisaje
  update(): void {
    this.paisajesService.update(this.paisaje).subscribe(paisaje => {
      this.router.navigate(['/paisajes']);
      Swal.fire('Paisaje Actualizado', `Paisaje: ${this.paisaje.nombre} se actualizó con éxito!`, 'success');
      
    });
  }

  // Crear nuevo paisaje
  public create(): void {
    console.log(this.paisaje);

    this.paisajesService.create(this.paisaje).subscribe(paisaje => {
      this.router.navigate(["/paisaje"]);
      Swal.fire('Nuevo Paisaje', `Paisaje: ${paisaje.nombre} creado con éxito`, 'success');
    });
  }
}

