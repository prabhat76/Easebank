import { Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dasboard', pathMatch: 'full' },
    { 
        path: 'dasboard', 
        component: DasboardComponent, 
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'insurance', component: InsuranceComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' } // Redirect to Home if `/dasboard` is visited
        ],
       

    
    },
   
];
