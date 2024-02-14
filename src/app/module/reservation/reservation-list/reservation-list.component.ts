import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../service/reservation/reservation.service';
import { Reservation } from '../../../model/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{
  reservationList:Reservation[]=[];
  constructor(private reservationService:ReservationService){}

  ngOnInit(): void {
    this.reservationList=this.reservationService.reservations;
  }

  public deleteReservation(id:string){
    this.reservationService.deleteReservation(id);
  }



}
