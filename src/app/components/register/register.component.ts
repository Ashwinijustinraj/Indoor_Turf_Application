import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form=new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''), 
    confirmpassword: new FormControl(''),  
});
  submitted = false;
  loading = false;
  errorMessage = '';
  constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private auth: AuthService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
     
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f(): { [key: string]: AbstractControl }{
    return this.form.controls; }
    onSubmit(): void {
      this.submitted=true;
      this.loading=false;
      if (this.form.invalid) {
        
        return;
      }
      
    if (this.form.valid) {
      
    } 
    }
}