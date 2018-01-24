import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PROVIDERS, NATIVE_PROVIDERS, MODULES, NATIVE_MODULES } from './app.imports';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    MODULES,
    NATIVE_MODULES,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    PROVIDERS,
    NATIVE_PROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
