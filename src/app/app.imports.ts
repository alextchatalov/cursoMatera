// Providers
import { ToastService } from '../pages/providers/utils/toast.service';
// Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Modules
import { ProfilePageModule } from '../pages/profile/profile.module';
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { RelatorioPageModule } from '../pages/relatorio/relatorio.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { LoginPageModule } from '../pages/login/login.module';
// Native Modeles
import { BrowserModule } from '@angular/platform-browser';


export const PROVIDERS = [
    ToastService
];

export const NATIVE_PROVIDERS = [
    StatusBar,
    SplashScreen
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
    BrowserModule
];