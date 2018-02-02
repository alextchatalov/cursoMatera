import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ToastService } from '../../providers/utils/toast.service';
import { OnInit } from '@angular/core';
import { AuthServiceProvider} from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, 
              private toastService: ToastService,
              private authService: AuthServiceProvider
  ) {
  }

  ngOnInit() {
    const isAuthorized = this.authService.isAuthorized();
    if(!isAuthorized) this.navCtrl.setRoot("LoginPage");
  }

  goToProfilePage() {
    this.toastService.presentToast('Redirecionamento para ProfilePage',true);
    this.navCtrl.push("ProfilePage");
  }

  goToListPage() {
    this.toastService.presentToast('Redirecionamento para ListPage');
    this.navCtrl.push("ListPage");
  }

  goToRelatorioPage() {
    this.toastService.presentToast('Redirecionamento para RelatorioPage');
    this.navCtrl.push("RelatorioPage");
  }

  goToScannerPage() {
    this.toastService.presentToast('Redirecionamento para ScannerPage');
    this.navCtrl.push("ScannerPage");
  }

  goToLoginPage() {
    this.toastService.presentToast('Redirecionamento para LoginPage');
    this.navCtrl.push("LoginPage");
  }

}
