import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroundService } from 'src/app/services/ground.service';
import { ground } from 'src/app/shared/ground';

@Component({
  selector: 'app-addground',
  templateUrl: './addground.component.html',
  styleUrls: ['./addground.component.scss']
})
export class AddgroundComponent implements OnInit {
  addGroundForm: FormGroup =new FormGroup({
    GroundName:new FormControl(''),
    GroundImageURL:new FormControl(''),
    GroundAddress:new FormControl(''),
    GroundDescription:new FormControl(''),
    GroundTiming:new FormControl(''),
    price:new FormControl('')
  })
 
  ground=new ground();
  constructor(private service:GroundService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addGroundForm = this.formBuilder.group({
      GroundName: ['', [Validators.required, ]],
      GroundImageURL: ['', [Validators.required] ],
      GroundAddress: ['',[Validators.required,]],
      GroundDescription: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(40) ]],
      GroundTiming: ['',[ Validators.required, ]],
      price: ['',[Validators.required,]]
    })
  }
  handleGround(){
  this.service.addGround(this.ground).subscribe(
    data=>{
      console.log(data)
      alert("Ground added Successfully")
      this.router.navigate(['/admin/dashboard']);
    },
    error=>{
      console.log(error)
      alert(error)
    }
  )
}
}
