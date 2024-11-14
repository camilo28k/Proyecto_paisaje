import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paisaje } from './paisaje';
import { PaisajesService } from './paisajes.service';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-paisajes',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './paisajes.component.html',
  styleUrl: './paisajes.component.css'
})

export class PaisajesComponent  implements OnInit{

  repositorioPaisaje: Paisaje[];

  constructor(private paisajesService: PaisajesService ){

  }
    ngOnInit(): void {
      this.paisajesService.getPaisajes().subscribe(
        paisajes => this.repositorioPaisaje = paisajes
      )
    }
   //invocando el método de eliminar
   delete(paisaje:Paisaje):void{
    Swal.fire({
      title: "Esta segur@?",
      text: `Seguro deseas eliminar la Reseña: ${paisaje.nombre} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.paisajesService.delete(paisaje.id).subscribe(
          response=>{
            this.repositorioPaisaje = this.repositorioPaisaje.filter(pai=> pai !== paisaje)
            Swal.fire({
              title: "Borrada!",
              text: `Tu Reseña ha sido eliminada: ${paisaje.nombre}`,
              icon: "success"
            });
          }
        )
      }
    });
  }


  }

