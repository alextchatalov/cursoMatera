import { ToastController, Toast } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
    toast: Toast;

    constructor(private toastCtrl: ToastController) {

    }

    presentToast(mensagem: string, ok = false, duration = 2000) {

        if(this.toast) {
            this.toast.dismiss();
        }

        this.toast = this.toastCtrl.create({
            message: mensagem,
            showCloseButton: ok,
            closeButtonText: ok ? 'ok': null,
            duration: duration,
            position: 'top'
        });

        this.toast.present();
    }
}