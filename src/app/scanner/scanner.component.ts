import { Component, OnInit } from '@angular/core';


declare var Quagga: any;


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

  // experimenting
  catId: string = "";
  name: string = "";
  foo: string = "";


  constructor() { }

  ngOnInit(): void {

    this.state = {};
    this.scanner = Quagga;
    Quagga.init(this.state, function(err) {
      if (err) {
        console.log(err);
        return;
      }
      this.attachListeners();
      this.checkCapabilities();
      Quagga.start();
    });

  }

  startScanner(): void {}
  initCameraSelection(): void {}
  checkCapabilities(): void {}
  onReaderConfigChage(): void {}


  attachListeners(): void {
    this.initCameraSelection();
    // var $target = $(e.target),
    // value = checked;
    // this.setState(state, value);

    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      // safely access `navigator.mediaDevices.getUserMedia`
    }
  }

  onStopButtonClick(): void {
    Quagga.stop();
  }


  setState(catalogId: string, name: string): void {
    this.confirmation = `state:: ${catalogId} in ${name}.`;
    this.state = {
      catalogId,
      name
    };
  }


  decodeSingle(): void {
    Quagga.decodeSingle({
        decoder: {
            readers: ["code_128_reader"] // List of active readers
        },
        locate: true, // try to locate the barcode in the image
        src: '/test/fixtures/code_128/image-001.jpg' // or 'data:image/jpg;base64,' + data
    }, (result) => {
        if(result.codeResult) {
            console.log("result", result.codeResult.code);
        } else {
            console.log("not detected");
        }
    });
  }



}
