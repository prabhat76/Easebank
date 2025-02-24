import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Dashboard } from '../modals/dashbaord';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { HomeComponent } from "../home/home.component";


@Component({
  selector: 'app-dasboard',
  imports: [CommonModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.scss'
})
export class DasboardComponent implements OnInit {

  isMobile: boolean = false;

 

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed
  }


  customerdetails: Dashboard['customerdetails'] = {}; 
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute, ) {

  }

  ngOnInit() {
    this.api.getCustomerDetails().subscribe((data) => {
      this.customerdetails = {
        customerId: data.data.customerId,
        customerName: data.data.firstName,
        customerOptions: data.data.options,
      }
      console.log(this.customerdetails.customerOptions);
    });
  }


  navigateToPage(options: string) {

    let routePath = '';
    switch (options) {
      case 'Wealth':
        console.log('Navigating to Wealth page');
        routePath = 'wealth';
        break;
      case 'Insurance':
        console.log(`Navigating to ${options} page`);
        routePath = 'insurance';
        break;
      case 'Home':
        console.log(`Navigating to ${options} page`);
        routePath = 'home';
        break;
      case 'Cards':
        console.log(`Navigating to ${options} page`);
        routePath = 'cards';
        break;
      default:
        console.warn(`No route defined for ${options}`);
        return; // Exit if no route is found
    }
    this.router.navigate([routePath], { relativeTo: this.route });
  }

  logout() {
    console.log('Logging out');
  }
}