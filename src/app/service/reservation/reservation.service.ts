import { Injectable } from '@angular/core';
import { Reservation } from '../../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservations:Reservation[]=[];

  constructor() {
    let savedReservations=localStorage.getItem('reservations');
    this.reservations=savedReservations?JSON.parse(savedReservations):[];
  }

  //curd
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
    localStorage.setItem('reservations',JSON.stringify(this.reservations));
    
  }

  public deleteReservation(id:string):void{
    let index=this.reservations.findIndex((res:any)=>res.id===id);
    this.reservations.splice(index,1);
    localStorage.setItem('reservations',JSON.stringify(this.reservations));
  }

  public updateReservation(id:string,uploadReservation:Reservation):void{
    let index=this.reservations.findIndex((res:any)=>res.id===id);
    this.reservations[index]=uploadReservation;
    localStorage.setItem('reservations',JSON.stringify(this.reservations));
  }


 
}
