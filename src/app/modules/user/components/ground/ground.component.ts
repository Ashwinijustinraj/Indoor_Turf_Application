import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { booking } from 'src/app/shared/booking';


@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
 
  styleUrls: ['./ground.component.scss']
})
export class GroundComponent implements OnInit {
  id!:string;
  
  bookingform:FormGroup =new FormGroup({
   groundName:new FormControl(''),
   address:new FormControl(''),
   noOfPersons:new FormControl(''),
   fromDate:new FormControl(''),
   toDate:new FormControl(''),
   totalPrice:new FormControl('')
 })


  booking=new booking();
  
  constructor(private router:Router,private service:BookingService,
    private route:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  handleBooking(){

    this.service.saveBooking(this.booking).subscribe(
      data=>{
        console.log(data);
        alert("Booked Successfully")
        this.router.navigate(['/user/bookedgrounds']);
      },
      error=>{
        console.log(error)
        alert(error)
      }
    )
  }
}
