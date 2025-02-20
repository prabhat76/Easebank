import { Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CardComponent } from './card/card.component';
import { WealthDasboardComponent } from './wealth-dasboard/wealth-dasboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dasboard', pathMatch: 'full' },
    { 
        path: 'dasboard', 
        component: DasboardComponent, 
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },  // Ensures Home loads by default
            { path: 'home', component: HomeComponent },
            { path: 'insurance', component: InsuranceComponent },
            {path: 'cards', component: CardComponent},
            {path: 'wealth', component: WealthDasboardComponent}
            
        ]
    },
    {path: 'home', component: HomeComponent}

];
