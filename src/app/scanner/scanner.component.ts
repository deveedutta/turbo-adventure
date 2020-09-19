import { Component, OnInit, ViewChild, ContentChildren, ElementRef } from '@angular/core';
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

  result: any;

  @ViewChild('wrapper', { read: ElementRef }) wrapper: ElementRef;
  @ViewChild('img', { read: ElementRef }) img: ElementRef;
  @ViewChild('label', { read: ElementRef }) label: ElementRef;
  //@ContentChildren('label', { descendants: true }) label: ElementRef; 
  

  constructor() { }

  ngOnInit(): void {
    this.state = {};
    this.scanner = Quagga;

  }

  ngAfterViewInit(): void {
    let images = this.wrapper.nativeElement.querySelector('img','.post-body');
    let img = this.img.nativeElement;
    console.log(`img.src: ${img.src}`);
    console.log(this.wrapper.nativeElement);
    console.log(this.label.nativeElement.textContent);
    console.log(images);
  }
  
  // just placeholders for now
  decodeFromCamera(): void {
    try {
      (async () => {
        const videoInputDevices = await codeReader.listVideoInputDevices();
        const firstDevice = videoInputDevices[0];
        const firstDeviceId = firstDevice.deviceId;

        videoInputDevices
        .forEach(device => console.log(`${device.label}, ${device.deviceId}`));
        console.log(`firstDeviceId: ${firstDevice.label}, ${firstDevice.deviceId}`); 

        this.result = codeReader.decodeOnceFromVideoDevice(firstDeviceId, 'video'); 
        console.log(`this.result.text:: ${this.result.text}`);
      })()
    } catch(err) {
      console.log(err);
    }
  }


  decodeFromImage(): void {
    try {
      (async () => {
        const img = this.img.nativeElement;
        this.result = await codeReader.decodeFromImage(img);
        console.log(`this.result.text:: ${this.result.text}`);
      })()
    } catch(err) {
      console.log(err);
    }

  }
  setState(catalogId: string, name: string): void {
    this.confirmation = `state:: ${catalogId} in ${name}.`;
    this.state = {
      catalogId,
      name
    };
  }




}
