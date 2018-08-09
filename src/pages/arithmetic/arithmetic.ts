import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';
import { ArithmeticqPage } from '../arithmeticq/arithmeticq';


@IonicPage()
@Component({
  selector: 'page-arithmetic',
  templateUrl: 'arithmetic.html'
})
export class ArithmeticPage {


  constructor(public navCtrl: NavController, private questionProvider: QuestionsProvider) {
  }

  displayQuestion(){
    this.navCtrl.push(ArithmeticqPage);

  }

}
