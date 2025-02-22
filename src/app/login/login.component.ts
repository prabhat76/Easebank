import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router:Router,private api:ApiService) {}
  username: string = "";
  password: string = "";
    login(): any {
      this.api.login().subscribe(
        (data: any[]) => {
          
          const matchedCustomer = data.find((customer: any) => {
            return customer.username === this.username && customer.password === this.password;
          });
    
          if (matchedCustomer) {
            console.log("Login successful!", matchedCustomer);
            this.router.navigate(['/dasboard']);

          } else {

            console.error("Invalid username or password");
          }
        },
        (error: any) => {
          // Handle error from API call
          console.error("Error during login API call", error);
        }
      );
    }
    
  }

