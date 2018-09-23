import { OnInit } from '@angular/core';

import { AbstractControl, FormGroup, FormControl } from '@angular/forms';

import { QuestionsService } from '../services/questions.service';

import { Question } from '../models/question';

export class AbstractFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private questionsService: QuestionsService) { }
  
  ngOnInit() {
    this.formGroup = this.questionsService.toFormGroup();
  }

  abstract getComponentName();

  public getQuestion(controlName: string): Question {
    return this.questionsService.getQuestionByControlName(controlName);
  }
}