import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../models/question';

@Injectable()
export class QuestionsService {
  private questions: Question[] = [];

  constructor() { }

  public toFormGroup(): FormGroup {
    
    let group = {};
    this.questions.forEach(
      question => {
        group[question.controlName] = question.required ? new FormControl(question.value || '', Validators.required) :
          new FormControl(question.value || '');
      });
      return new FormGroup(group);
  }

  public getQuestionByControlName(controlName: string): Question {
    return this.questions.find(
      question => question.controlName === controlName
    );
  }

  public getQuestions(): Question[] {
    return this.questions;
  }

  public addQuestion(question: Question) {
    this.questions.push(question);
  }
}
