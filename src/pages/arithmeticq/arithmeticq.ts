import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../../models/question.model';
import { QuestionsProvider } from '../../providers/questions/questions';

@IonicPage()
@Component({
  selector: 'page-arithmeticq',
  templateUrl: 'arithmeticq.html',
  providers: [QuestionsProvider]
})
export class ArithmeticqPage {

  questions = [];

  constructor(public navCtrl: NavController, private questionService: QuestionsProvider) {
  }

  ionViewWillEnter(){
    this.questions = this.recieveQuestion();
  }


  recieveQuestion(){
    return this.questionService.generateNum();
    
  }

}
