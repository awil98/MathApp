import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../../models/question.model';

@Injectable()
export class QuestionsProvider {

  question = [];
  

  constructor() {
  }

  generateNum(){
    let num1;
    let num2;
    let choice;

    num1 = Math.floor(Math.random() * 100) + 10;
    num2 = Math.floor(Math.random() * 100) + 10;
    choice = Math.floor(Math.random() * 4);

    switch(choice){
      case 0:
        this.question.push(num1 + "+" + num2);
        break;
      case 1:
        this.question.push(num1 + "-" + num2);
        break;
      case 2:
        this.question.push(num1 + "*" + num2);
        break;
      case 3:
        this.question.push(num1 + "/" + num2);
        break;
    }

    return [...this.question];

  }

}
