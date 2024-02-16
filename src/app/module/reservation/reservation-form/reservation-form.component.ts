import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../../../model/reservation';
import { ReservationService } from '../../../service/reservation/reservation.service';
import { log } from 'node:console';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{
  
  reservationForm: FormGroup = new FormGroup({});
  reservationsList:Reservation|any[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private reservationService:ReservationService){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let reservation = this.reservationService.getReservation(id)

      if(reservation){
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit() {
    if(this.reservationForm.valid){

      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if(id){
        // Update
        this.reservationService.updateReservation(id, reservation).subscribe((res)=>{
          console.log("updated!");
          
        })
      } else {
        // New
        this.reservationService.addReservation(reservation).subscribe((res:Reservation)=>{
          console.log('Inserted!');
        })   

      }

      this.router.navigate(['/list'])
    }
  }  
  
  }




