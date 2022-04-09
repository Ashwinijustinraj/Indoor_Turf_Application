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
    addName:new FormControl(''),
    addImageUrl:new FormControl(''),
    addAddress:new FormControl(''),
    addDescription:new FormControl(''),
    addTiming:new FormControl(''),
    addPrice:new FormControl('')
  })
 
  ground=new ground();
  constructor(private service:GroundService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addGroundForm = this.formBuilder.group({
      addName: [
        '', 
        [Validators.required, 
         
        ]
      ],
      addImageUrl: [
        '', 
        [Validators.required]
      ],
      addAddress: [
        '',
        [
          Validators.required,
        ]
      ],
      addDescription: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      addTiming: [
        '',
        [
          Validators.required,
        ]
      ],
      addPrice: [
        '',
        [
          Validators.required,
        ]
      ]
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
