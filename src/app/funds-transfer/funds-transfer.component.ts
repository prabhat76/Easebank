import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-funds-transfer',
  imports: [CommonModule, FormsModule],
  templateUrl: './funds-transfer.component.html',
  styleUrl: './funds-transfer.component.scss'
})
export class FundsTransferComponent implements OnInit{

  constructor(private api:ApiService){

  }

  ngOnInit(){

  }

  custdata : any;
  selectedfundTransferType: string = 'inside india'; // Default selection
  selectedCountry: string= '';
  selectedbanktrnsfer: string='Inside the Bank';
  selectAccount:string = '';
  onTransferTypeChange() {
    console.log("Transfer Type Changed:", this.selectedfundTransferType);
  }
  
  
  generatePDF() {
    const pdf = new jsPDF();
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text("Digital Banking Funds Transfer", 10, 10);
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text("From:", 10, 30);
    pdf.text(this.selectedbanktrnsfer || "Not Selected", 50, 30);
    pdf.text(this.selectedbanktrnsfer|| "", 10,10)
    if (this.selectedfundTransferType === 'outside india') {
      pdf.text("Selected Country:", 10, 100);
      pdf.text(this.selectedCountry || "Not Selected", 10, 10);
    }
    pdf.save('funds-transfer-form.pdf');
  }
}

