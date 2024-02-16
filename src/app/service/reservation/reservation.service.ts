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

  public getReservation(id:string):Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl+"reservation/"+id);
  } 

  public addReservation(reservation:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(this.apiUrl+"reservation/",reservation);
  }

  public deleteReservation(id:string):Observable<void>{
    return this.http.delete<void>(this.apiUrl+"reservation/"+id);
  }

  public updateReservation(id:string,uploadReservation:Reservation):Observable<void>{
    return this.http.put<void>(this.apiUrl+"reservation/"+id,uploadReservation);
  }


 
}
