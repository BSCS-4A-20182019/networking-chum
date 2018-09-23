import { Component }  from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';

import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import { QuestionsService } from '../shared/services/questions.service';

@Component({
  'selector': 'app-main',
  'templateUrl': './main.component.html',
  'styleUrls': ['./main.component.css']
      
})
export class MainComponent extends AbstractFormComponent {
  fullImagePath: string;
  name: any;
  panleExpanded = true;
  testValue: string = '';

    constructor(questionsService: QuestionsService, private router: Router) {
        super(questionsService);
        this.fullImagePath = './CA.png';
    }

    getComponentName() {
         return 'main';
    }

    isDisabled(): boolean {
      return this.formGroup.value['username'] !== undefined &&
        this.formGroup.value['password'] !== undefined &&
        this.formGroup.value['confirmPassword'] !== undefined;
    }
}
