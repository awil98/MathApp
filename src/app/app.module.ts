import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArithmeticPage } from '../pages/arithmetic/arithmetic';
import { ArithmeticqPage } from '../pages/arithmeticq/arithmeticq';
import { QuestionsProvider } from '../providers/questions/questions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArithmeticPage,
    ArithmeticqPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArithmeticPage,
    ArithmeticqPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionsProvider
  ]
})
export class AppModule {}
