import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Paisaje } from './paisaje';
import { PAISAJES } from './paisajes.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PaisajesService {

private urlEndpoint='http://localhost:8081/api/paisajes'

private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }
  //buscar paisaje de la base de datos  
  getPaisajes():Observable<Paisaje[]>{
    
   // return of (PAISAJES);

   return this.http.get(this.urlEndpoint).pipe(
    map((response)=>response as Paisaje[])
   )
  
  }
  //Método de crear paisaje
  create(paisaje:Paisaje):Observable<Paisaje>{
    return this.http.post<Paisaje>(this.urlEndpoint,paisaje,{headers:this.httpHeaders})
  }
  //Método de editar paisaje
  getPaisaje(id: any):Observable<Paisaje>{
    return this.http.get<Paisaje>(`${this.urlEndpoint}/${id}`)
  }
  //Edición final
  update(paisaje: Paisaje):Observable<Paisaje>{
    return this.http.put<Paisaje>(`${this.urlEndpoint}/${paisaje.id}`, paisaje, {headers:this.httpHeaders})
  }
  //Eliminar
  delete(id:number):Observable<Paisaje>{
    return this.http.delete<Paisaje>(`${this.urlEndpoint}/${id}`, {headers:this.httpHeaders})
  }


}
