import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarModule } from './car.module';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  {
    path: "",
    component: CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
