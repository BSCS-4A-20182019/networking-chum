import { Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


import {Router} from '@angular/router';

@Component({
	'selector': 'app-profile',
	'templateUrl': './profile.component.html'
    
})
export class ProfileComponent  {
  fullImagePath: string;
  form: FormGroup;
  name: any;
  info: 'Doesnt have an account ?';
  

  constructor(private router: Router) {
    this.initialiseForms();
    this.name = this.getName();
    this.fullImagePath = './CA.jpg';
  }

  private initialiseForms() {
    this.form = new FormGroup({  
      username: new FormControl(),
      password: new FormControl()
    });
  }
  
  

  isDisabled(): boolean {
    return !this.form.controls['password'].value;
  }

	submit() {
	  this.router.navigate(['/main']);
  }
   signup(){
        this.router.navigate(['/signup']);
   }

  private getName() {
    return {
      firstName: 'JP',
      lastName: 'Manaloto'
    };
  }
}
