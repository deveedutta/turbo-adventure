import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BrowserQRCodeReader } from '@zxing/library';

declare var Quagga: any;
const codeReader = new BrowserQRCodeReader();


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  title: string = "Scanner";
  
  scanner: any;
  state: any;
  confirmation: string = "";

  // ignore
  catId: string = "";
  name: string = "";
  foo: string = "";

  @ViewChild('wrapper', { read: ElementRef }) wrapper: ElementRef;
  @ViewChild('label', { read: ElementRef }) label: ElementRef;
  @ViewChild('img', { read: ElementRef }) img: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.state = {};
    this.scanner = Quagga;
  }

  ngAfterViewInit(): void {
    let images = this.wrapper.nativeElement.querySelector('img','.post-body');
    console.log(this.wrapper.nativeElement);
    console.log(this.label.nativeElement.textContent);
    console.log(images);
  }
  
  // just placeholders for now
  startScanner(): void {}
  decodeSingle(): void {}
  setState(catalogId: string, name: string): void {
    this.confirmation = `state:: ${catalogId} in ${name}.`;
    this.state = {
      catalogId,
      name
    };
  }




}
