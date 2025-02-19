import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule, MatSidenavContainer, MatSidenav, } from '@angular/material/sidenav';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatSidenavContainer, MatSidenav, MatListModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  dashboardcontent:any;
  title = 'Easebank';
  constructor(private api:ApiService) {
  
  }

  ngOnInit(){
    this.api.getDashbaordcontent().subscribe((data)=>{
      this.dashboardcontent = {
        greet : data.content.greet.greet_Welcome,
        content : data.data.content,
        options : data.data.options,
        footer : data.content.footer.footer_text,
      }
    });
  }
}
