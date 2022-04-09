import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  user=new User();
  form=new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    mobileNumber: new FormControl(''),
    password: new FormControl(''), 
    confirmPassword: new FormControl('') , 
    userRole:new FormControl('')
});

  

  constructor(private formbuilder:FormBuilder,private service:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      userRole:['', Validators.required]
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });
  }
  onSubmit(): void {
  }
  userSignup(){

    this.service.saveUser(this.user).subscribe(
      data=>{
        console.log(data);
        alert("User added Successfully")
        this.router.navigate(['/admin/displayusers']);
      },
      error=>{
        console.log(error);
        alert(error)
      }
    )
  }
}
