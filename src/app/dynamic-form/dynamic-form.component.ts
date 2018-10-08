import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Question } from '../shared/models/question';

@Component({
  'selector': 'dynamic-form',
  'templateUrl': './dynamic-form.component.html'
})
export class DynamicFormComponent {
  @Input() question: Question;
  @Input() form: FormGroup;
  
}
