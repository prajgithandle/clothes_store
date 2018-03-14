import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { DressesComponent }      from '../dresses/dresses.component';
import { DressDetailsComponent }  from '../dress-details/dress-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DressDetailsComponent },
  { path: 'dresses', component: DressesComponent }
  
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
