import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [

    {
        path: '',
        component: InicioComponent  

    }, 
    {
        path:'Characters',
        component:CharacterPageComponent
    },
    {
        path:'Characters/Details/:id',
        component: DetailsComponent
    },
    {
        path:'**',
        redirectTo: '',  
    },
];
