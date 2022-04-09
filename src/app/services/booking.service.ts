import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from '../shared/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  saveBooking(data:booking):Observable<any>{
    return this.http.post<any>("http://localhost:8080/user/ground",data);
  }
  editBooking(id:string,data:booking):Observable<any>{
    return this.http.put<any>("http://localhost:8080/user/editbookedgrounds/"+id,data);
  }
  deleteBooking(id:string):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/user/deletebookedgrounds/"+id);
  }
  getBooking(id:string):Observable<any>{
    return this.http.get<any>("http://localhost:8080/admin/"+id);
  }
  bookedground(id:string):Observable<any>{
    return this.http.post<any>("http://localhost:8080/user/bookedgrounds",id);
  }
  
}
