import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-generic-page',
  imports: [],
  templateUrl: './generic-page.component.html',
  styleUrl: './generic-page.component.scss'
})
export class GenericPageComponent {
category : any;
  constructor(private route: ActivatedRoute,private router:Router, private location:Location, private text:ApiService) {}
 content:{heading?:String}={};
  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      this.category= params.get('category')|| 'error';
      this.controlText();
    })
   
  }

  toggleEvent(buttonTxt: string , heading:any) {
    switch (buttonTxt) {
      case 'Proceed':
          switch(heading){
            case "Wealth Management":
              this.router.navigate(['/home']);
              break;
            case "Funds Transfer":
              this.router.navigate(['/funds-transfer']);
              break;
          }
        break;
      case 'Cancel':
        if (window.history.length > 1) {
          this.location.back();
        } else {
          this.router.navigate(['/']); // Fallback route
        }
        break;
    }
  }

controlText(){
  this.text.getGenericContent().subscribe((content)=>{
    this.content ={
    heading: content.content[this.category].title
    }
    // console.log(this.content.heading)
  })}



}