import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToProfilePage() {
    this.navCtrl.push("ProfilePage");
  }

  goToListPage() {
    this.navCtrl.push("ListPage");
  }

  goToRelatorioPage() {
    this.navCtrl.push("RelatorioPage");
  }

  goToScannerPage() {
    this.navCtrl.push("ScannerPage");
  }

  goToLoginPage() {
    this.navCtrl.push("LoginPage");
  }

}
