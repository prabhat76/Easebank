import { Component } from '@angular/core';
import { CloseComponent } from "../close/close.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wealth-dasboard',
  imports: [CloseComponent, CommonModule, RouterModule],
  templateUrl: './wealth-dasboard.component.html',
  styleUrl: './wealth-dasboard.component.scss'
})
export class WealthDasboardComponent {
  options: any;
  constructor(private router: Router) {}

  navigateToPage() {
    
        this.router.navigate(['/dasboard/wealth/generic']);
  console.log('Navigating to generic page');
}
}
