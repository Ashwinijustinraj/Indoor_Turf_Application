import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { booking } from 'src/app/shared/booking';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.scss']
})
export class EditbookingComponent implements OnInit {
  id!:string;
  
  editbooking:FormGroup =new FormGroup({
   groundName:new FormControl(''),
   address:new FormControl(''),
   noOfPersons:new FormControl(''),
   fromDate:new FormControl(''),
   toDate:new FormControl(''),
   totalPrice:new FormControl('')
 })

  constructor(private router:Router,private service:BookingService,
    private route:ActivatedRoute) { }

    booking=new booking();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getBooking(this.id).subscribe(
      data=>{
        this.booking=data;
      },
      error=>{
        console.log(error);
      }
    )
  }
  handleBooking(){
    
    this.service.editBooking(this.id,this.booking).subscribe(
      data=>{
        console.log(data)
        alert("Booked Ground edited Successfully")
        this.router.navigate(['/user/bookedgrounds']);
      },
      error=>{
        console.log(error)
        alert(error)
      }
    )
  }

}
