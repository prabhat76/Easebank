import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule, MatSidenavContainer, MatSidenav, } from '@angular/material/sidenav';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatListModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  dashboardcontent:any;
  title = 'Easebank';
  constructor(private api:ApiService) {
  
  }

  ngOnInit(){
   
  }
}
