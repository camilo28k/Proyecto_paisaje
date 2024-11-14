import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaisajesComponent } from './paisajes/paisajes.component';
import { PruebaComponent } from './prueba/prueba.component';
import { FormComponent } from './paisajes/form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/paisajes', pathMatch: 'full' },
    { path: 'header', component:HeaderComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'paisajes', component: PaisajesComponent},
    { path: 'pruebas', component: PruebaComponent},
    { path : 'paisajes/form', component: FormComponent},
    {path:'paisajes/form/:id', component:FormComponent}
];





  