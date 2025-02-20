import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-page',
  imports: [],
  templateUrl: './generic-page.component.html',
  styleUrl: './generic-page.component.scss'
})
export class GenericPageComponent {
  constructor(private router:Router) {}

  toggleEvent(buttonTxt: string) {
    switch (buttonTxt) {
      case 'Proceed':
        console.log('Button clicked: ' + buttonTxt);
        this.router.navigate(['login']);
        break;
      case 'Cancel':
        console.log('Button clicked: ' + buttonTxt);
        break;}
    
  }
}
