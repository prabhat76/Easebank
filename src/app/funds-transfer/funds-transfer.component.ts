import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funds-transfer',
  imports: [],
  templateUrl: './funds-transfer.component.html',
  styleUrl: './funds-transfer.component.scss'
})
export class FundsTransferComponent implements OnInit{
  ngOnInit(){
    console.log("fs");
  }
}
