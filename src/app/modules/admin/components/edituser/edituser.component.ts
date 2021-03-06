import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  id!:string;
  user=new User();
  form=new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    mobileNumber: new FormControl(''),
    password: new FormControl(''), 
    confirmPassword: new FormControl('') , 
    userRole:new FormControl('')
});

  

  constructor(private formbuilder:FormBuilder,private service:UserService,private router:Router,private route:ActivatedRoute) {}

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
  this.id=this.route.snapshot.params['id'];
  this.service.getUserById(this.id).subscribe(
    data=>{
      this.user=data;
    },
    error=>{
      console.log(error);
    }
  )
  }
  
  editUser(){

    this.service.edituser(this.id,this.user).subscribe(
      data=>{
        console.log(data);
        alert("User edited Successfully")
        this.router.navigate(['/admin/displayusers']);
      },
      error=>{
        console.log(error)
        alert(error)
      }
    )
  }
}
