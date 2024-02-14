import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../../../model/reservation';
import { ReservationService } from '../../../service/reservation/reservation.service';


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

    

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      let reservatition=this.activatedRoute.snapshot.paramMap.get('id');

      if(reservatition){
        
       // this.reservationForm.patchValue(reservatition);
      }
    }

  }

  onSubmit() {
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);
      
     // this.reservationsList=localStorage.getItem(JSON.parse('reservations'));  

      this.router.navigate(['/list']);
    }else{
      alert('Form is invalid');
    }
    this.reservationForm.reset();
  }


  
  
  }




