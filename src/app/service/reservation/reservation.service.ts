import { Injectable } from '@angular/core';
import { Reservation } from '../../model/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservations:Reservation[]=[];
  private apiUrl='http://localhost:3000/';

  constructor(private http:HttpClient) {}

  //curd
  public getReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl+"reservations");
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
