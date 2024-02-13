import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//lazy loading to home module
const routes: Routes = [
  {path: '',loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)},
  {path: 'reservation',loadChildren: () => import('./module/reservation/reservation.module').then(m => m.ReservationModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
