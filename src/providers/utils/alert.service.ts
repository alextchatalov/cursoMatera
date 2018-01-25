import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

    constructor(private alertCtrl: AlertController) {

    }

    presentAlert(titulo: string, mensagem: string) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensagem,
            buttons: ['OK']
        });
        alert.present();
    }

    alertError(mensagem: string) {
        this.presentAlert("Ocorreu um erro: ", mensagem);
    }

    presentConfirm(titulo: string, mensagem: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const confirm = this.alertCtrl.create({
                title: titulo,
                message: mensagem,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            confirm.dismiss().then( res => resolve(false));
                            return false;
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            confirm.dismiss().then( res => resolve(true));
                            return false;
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
}