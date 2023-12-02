import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { Pag1Component } from './pag1/pag1.component';

export const routes: Routes = [
    {
        path: '',title: 'Home Page' , component :  BodyComponent,
    },
    {
        path: 'pag1',title: 'Coches' , component :  Pag1Component,
    },
];
