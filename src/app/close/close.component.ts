import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-close',
  imports: [],
  templateUrl: './close.component.html',
  styleUrl: './close.component.scss'
})
export class CloseComponent {
  
  constructor(private location:Location) { }

closeComponent(){
  this.location.back();
}
}
