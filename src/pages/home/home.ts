import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArithmeticPage } from '../arithmetic/arithmetic';
import { QuestionsProvider } from '../../providers/questions/questions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [QuestionsProvider] 
})
export class HomePage {

  constructor(public navCtrl: NavController, private questionProvider: QuestionsProvider) {

  }

  goToArithmeticPage(){
    this.navCtrl.push(ArithmeticPage);
  }

}
