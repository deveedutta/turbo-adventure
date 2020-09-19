import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  title: string = "A simple, clean, and responsive HTML invoice template";
  constructor() { }

  ngOnInit(): void {
  }

}
