import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertService} from '../../providers/utils/alert.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../providers/utils/toast.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public profileFilePicture: string;
  public placeHolderPicture: string;
  public user = {
    imageUrl: null
  }

  constructor(public navCtrl: NavController, 
              private alertService: AlertService,
              private camera: Camera,
              private storage: Storage,
              private toastService: ToastService
             ) {
    this.placeHolderPicture = "https://api.adorable.io/avatar/200/bob";
  }

  openGallery(): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };

    this.camera.getPicture(cameraOptions).then(
      imageData => this.updateImage(imageData),
      err => this.toastService.presentToast('Error: '+ err)
    );
  } 
  
  updateImage(value) {
    this.profileFilePicture = "data:image/jpge;base64," + value;
    // Opção de adicionar no localStorage
    localStorage.setItem("imageUrl", this.profileFilePicture);
    // Opção de adicionar no storage do Ionic
    this.storage.set("imageUrl", this.profileFilePicture);
    this.user.imageUrl = this.profileFilePicture;
  }

  exibirMensagem() {
    return new Promise((resolve, reject) => {
      this.alertService.presentConfirm('Olá','Essa mensagem é utiliza promise =D').then((res) => {
        console.log('Response: ' + res);
      });
    });
  }

}
