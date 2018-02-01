// Providers
import { ToastService } from '../../src/providers/utils/toast.service';
import { AlertService } from '../../src/providers/utils/alert.service';
import { ScannerServiceProvider } from '../../src/providers/scanner-service/scanner-service';
import { AuthServiceProvider } from '../../src/providers/auth-service/auth-service';
import { UserServiceProvider } from '../../src/providers/user-service/user-service';
import { ReportServiceProvider } from '../../src/providers/report-service/report-service';
// Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// Modules
import { ProfilePageModule } from '../pages/profile/profile.module';
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { RelatorioPageModule } from '../pages/relatorio/relatorio.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { LoginPageModule } from '../pages/login/login.module';
import { PrintPageModule } from '../pages/relatorio/print/print.module';

// Native Modeles
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

export const PROVIDERS = [
    ToastService,
    AlertService,
    ScannerServiceProvider,
    AuthServiceProvider,
    UserServiceProvider,
    ReportServiceProvider
];

export const NATIVE_PROVIDERS = [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner
    
]; 

export const MODULES = [
    ProfilePageModule,
    HomePageModule,
    ListPageModule,
    RelatorioPageModule,
    ScannerPageModule,
    LoginPageModule,
    PrintPageModule
];

export const NATIVE_MODULES = [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    HttpModule
];