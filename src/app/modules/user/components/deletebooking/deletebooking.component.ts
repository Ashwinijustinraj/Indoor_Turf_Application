import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-deletebooking',
  templateUrl: './deletebooking.component.html',
  styleUrls: ['./deletebooking.component.scss']
})
export class DeletebookingComponent implements OnInit {

  constructor(private service:BookingService,private router:Router,private route:ActivatedRoute) { }

  id!:string;
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

  }

  delete(){
    this.service.deleteBooking(this.id).subscribe(
      data=>{
        console.log(data);
        alert("Ground Deleted Successfully");
        this.deleteBooking();
      },
      error=>{
        console.log(error);
      }
    )
  }

  deleteBooking(){
    this.router.navigate(['/user/dashboard']);
  }
}
