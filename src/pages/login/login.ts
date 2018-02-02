import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Console } from '@angular/core/src/console';
import { AlertService } from '../../providers/utils/alert.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  formLogin = { login: "", senha: "" };

  constructor(public navCtrl: NavController,
    private auth: AuthServiceProvider,
    private alerta: AlertService) {

    const isAuthorized = this.auth.isAuthorized();
    if (isAuthorized) this.navCtrl.setRoot("HomePage");
  }

  realizarLogin() {

    if (this.realizarValidacao()) {
      this.auth.login(this.formLogin).subscribe(res => {
        if (res) {
          console.log("RES: ",res);
          this.auth.saveAcessData(res);
          this.navCtrl.setRoot("HomePage");
        } else {
          this.alerta.alertError("Usuário ou Senha inválido!");
        }
      })
    }
  }

  realizarValidacao() {
    if (this.formLogin.login === "" || this.formLogin.senha === "") {
      this.alerta.alertError("Usuário ou Senha inválido!");
      return false;
    }
    return true;
  }

}
