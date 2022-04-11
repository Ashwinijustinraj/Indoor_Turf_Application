import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {
  users!:User[];

  closeResult!: string;

  constructor(private service:UserService,private router:Router, private formbuilder:FormBuilder) {}

  ngOnInit(): void {
   this.getUsers();
  }

  private getUsers(){
    this.service.getAdminList().subscribe(
      data=>{
        this.users=data;
      },
      error=>{
        console.log(error);
      }
    );
    this.service.getUserList().subscribe(
      data=>{
        this.users=data;
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  editUser(id:string){
    this.router.navigate(['/admin/edituser' ,id]);
  }

  deleteUser(id:string){
    this.router.navigate(['/admin/deleteuser' ,id]);
  }
}
