import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { AbstractFormComponent } from '../shared/abstract-component/abstract-form.component';
import {QuestionsService} from '../shared/services/questions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent extends AbstractFormComponent {

  fullImagePath: string;
  name: any;
  panleExpanded = true;
  testValue: string = '';

  constructor(questionsService: QuestionsService, private router: Router) { 
    super(questionsService);
    this.fullImagePath = './CA.png';
  }

  getComponentName() {
    return 'signup';
  }
}
