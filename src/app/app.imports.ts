// Providers
import { ToastService } from '../../src/providers/utils/toast.service';
import { AlertService } from '../../src/providers/utils/alert.service';
// Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

// Modules
import { ProfilePageModule } from '../pages/profile/profile.module';
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { RelatorioPageModule } from '../pages/relatorio/relatorio.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { LoginPageModule } from '../pages/login/login.module';
// Native Modeles
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';

export const PROVIDERS = [
    ToastService,
    AlertService
];

export const NATIVE_PROVIDERS = [
    StatusBar,
    SplashScreen,
    Camera,
    
]; 

export const MODULES = [
    ProfilePageModule,
    HomePageModule,
    ListPageModule,
    RelatorioPageModule,
    ScannerPageModule,
    LoginPageModule
];

export const NATIVE_MODULES = [
    BrowserModule,
    IonicStorageModule.forRoot()
];