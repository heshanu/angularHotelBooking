import { Injectable } from '@angular/core';
import { Reservation } from '../../model/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservations:Reservation[]=[
  
      {
        "id": "res1",
        "checkInDate": "2024-02-15",
        "checkOutDate": "2024-02-20",
        "guestName": "John Doe",
        "guestEmail": "john.doe@example.com",
        "guestPhone": "+1234567890",
        "roomNumber": 101
      },
      {
        "id": "res2",
        "checkInDate": "2024-02-16",
        "checkOutDate": "2024-02-22",
        "guestName": "Jane Smith",
        "guestEmail": "jane.smith@example.com",
        "guestPhone": "+0987654321",
        "roomNumber": 102
      },
      {
        "id": "res3",
        "checkInDate": "2024-02-17",
        "checkOutDate": "2024-02-23",
        "guestName": "Alice Johnson",
        "guestEmail": "alice.johnson@example.com",
        "guestPhone": "+1122334455",
        "roomNumber": 103
      }
    
  ];
  private apiUrl='http://localhost:3000/';

  constructor(private http:HttpClient) {}

  //curd
  // public getReservations():Observable<Reservation[]>{
  //   return this.http.get<Reservation[]>(this.apiUrl+"reservations");
  // } 

  public getReservations():Reservation[]{
    return this.reservations;
  } 

  public getReservation(id:string):Reservation|undefined{
    return this.reservations.find((res:any)=> res.id===id);
  }

  public addReservation(reservation:Reservation):void{
    reservation.id=Date.now().toString();   
    this.reservations.push(reservation);
    console.log(this.reservations); 
  }

  public deleteReservation(id:string):void{
    let index=this.reservations.findIndex((res:any)=>res.id===id);
    this.reservations.splice(index,1);
  }

  public updateReservation(id:string,uploadReservation:Reservation):void{
    let index=this.reservations.findIndex((res:any)=>res.id===id);
    this.reservations[index]=uploadReservation;
  }


 
}
