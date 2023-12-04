import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CochesunoComponent } from './cochesuno/cochesuno.component';
import { CochesdosComponent } from './cochesdos/cochesdos.component';
import { CochestresComponent } from './cochestres/cochestres.component';

export const routes: Routes = [
    {
        path: '',title: 'Home Page' , component :  BodyComponent,
    },
    {
        path: 'cochesuno',title: 'Coches' , component :  CochesunoComponent,
    },
    {
        path: 'cochesdos',title: 'Coches' , component :  CochesdosComponent,
    },
    {
        path: 'cochestres',title: 'Coches' , component :  CochestresComponent,
    },
];
