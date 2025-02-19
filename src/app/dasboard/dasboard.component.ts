import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule, MatSidenavContainer, MatSidenav, } from '@angular/material/sidenav';
import { Dashboard } from '../modals/dashbaord.model';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dasboard',
  imports: [CommonModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.scss'
})
export class DasboardComponent implements OnInit {

  //customerdetails!: Dashboard;
  customerdetails: { customerId?:string; customerName?: string; customerOptions?: string[] } = {};
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {
  
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
    switch (options) {
      case 'Wealth':
        console.log('Navigating to Welath page');
        break;
      case 'Insurance':
        this.router.navigate(['insurance'], { relativeTo: this.route });
        console.log(`Navigating to ${options} page`);
        break;
      case 'Home':
        console.log(`Navigating to ${options} page`);
        this.router.navigate(['home'], { relativeTo: this.route });

        break;
      case 'Credit Cards':
        console.log('Navigating to Credit Cards page');
        break;
      case 'Debit Cards':
        console.log('Navigating to Debit Cards page');
        break;
    }
  }

}
