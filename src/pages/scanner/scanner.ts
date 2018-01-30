import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  constructor(public navCtrl: NavController,
                private barcodeScanner: BarcodeScanner) {

  }

  scan() {
     const config = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: false,
      disableAnimations: true,
      disableSuccessBeep: true,
      prompt: 'EITA!',
      formats: 'PDF_417',
      orientation: 'landscape',
      torchOn: false,
      resultDisplayDuration: 500
    };

    this.barcodeScanner.scan(config).then( res =>
      {
        console.log('SCAN: ' + res);
      }
    )
  }

}
