import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertService} from '../../providers/utils/alert.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, private alertService: AlertService) {

  }

  exibirMensagem() {
    return new Promise((resolve, reject) => {
      this.alertService.presentConfirm('Olá','Essa mensagem é utiliza promise =D').then((res) => {
        console.log('Response: ' + res);
      });
    });
  }

}
