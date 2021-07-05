import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component'
import {AdminComponent} from './admin/admin.component'
import {BookingComponent} from './booking/booking.component'
import {MoviesComponent} from './movies/movies.component'
const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'book',
    component:BookingComponent
  },
  {
    path:'movie',
    component:MoviesComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
