import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { booking } from 'src/app/shared/booking';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.scss']
})
export class AddbookingComponent implements OnInit {
  id!:string;
   booking=new booking();
   addbooking:FormGroup =new FormGroup({
    groundName:new FormControl(''),
    address:new FormControl(''),
    noOfPersons:new FormControl(''),
    fromDate:new FormControl(''),
    toDate:new FormControl(''),
    totalPrice:new FormControl('')
  })
  constructor(private router:Router,private service:BookingService,private formBuilder: FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.addbooking = this.formBuilder.group({
      groundName: ['', [Validators.required]],
      address: ['',[Validators.required]],
      noOfPersons: ['',[Validators.required]],
      fromDate: ['',[Validators.required]],
      toDate: [ '',[Validators.required,]],
      totalPrice: ['',[ Validators.required, ]]
    }),
    this.id=this.route.snapshot.params['id'];
  this.service.bookedground(this.id).subscribe(
    data=>{
      this.booking=data;
    },
    error=>{
      console.log(error);
    }
  )
  }

  
editBooking(id:string){
  this.router.navigate(['/user/editbookedgrounds' ,id]);
}

deleteBooking(id:string){
  this.router.navigate(['/user/deletebookedgrounds' ,id]);
}
}
