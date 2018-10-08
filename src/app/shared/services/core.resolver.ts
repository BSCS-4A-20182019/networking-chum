import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/services/api.service';
import { QuestionsService } from '../../shared/services/questions.service';

import { Question } from '../../shared/models/question';

@Injectable()
export class CoreResolver implements Resolve<any> {
  constructor(private apiService: ApiService, private questionsService: QuestionsService) { }

  resolve(): Promise<any> {
    return this.apiService.getFile('/assets/config/questions.config.json')
                .toPromise()
                .then(
                  response => {
                    for (let key of Object.keys(response)) {
                        for (let q of response[key]) {
                          let question: Question = new Question();
                          question.key = key;
                          question.controlName = q.controlName;
                          question.label = q.label;
                          question.type = q.type;
                          question.placeholder = q.placeholder||'';

                          this.questionsService.addQuestion(question);
                        }
                      }
                      return true;
                    },
                    error => {
                      throw new Error(error);
                    });
  }
}