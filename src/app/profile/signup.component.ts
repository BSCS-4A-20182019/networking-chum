import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  'selector': 'app-signup',
  'templateUrl': './signup.component.html'
})
export class SignupComponent {
fullImagePath: string;
  form: FormGroup;
  name: any;
  
  
  
  
  constructor(private router: Router) {
    this.initialiseForms();
    this.name = this.getName();
    this.fullImagePath = './CA.jpg';
  }
  
  
  

  private initialiseForms() {
    this.form = new FormGroup({ 
      email: new FormControl(),
      fname: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      conpassword: new FormControl()
    });
    
  }
  
  
  
 

  isDisabled(): boolean {
  
  
    return !this.form.controls['conpassword'].value;
  }
  submit() {
	  this.router.navigate(['/profile']);
  }
  
   signup(){
        this.router.navigate(['/profile']);
   }
   

  private getName() {
    return {
      firstName: 'JP',
      lastName: 'Manaloto'
    };
  }
  
  
}




