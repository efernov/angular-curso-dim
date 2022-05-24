import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car-model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public car!: CarModel;
  public disableBrake!: boolean;
  public disableThrottle!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.car = { name: 'Roadster', maxSpeed: 120, currentSpeed: 0 };
    this.checkLimits();
  }

  private checkLimits(): void {
    this.disableBrake = false;
    this.disableThrottle = false;
    if (this.car.currentSpeed <= 0) {
      this.car.currentSpeed = 0;
      this.disableThrottle = true;
    }
  }
  public onBrake(drive: number) : void {
    this.car.currentSpeed -= this.getDelta(drive);
    this.checkLimits();
  }
  public onThrottle(drive: number): void {
    this.car.currentSpeed += this.getDelta(drive);
    this.checkLimits();
  }
  getDelta(drive: number) {
    return drive + (this.car.maxSpeed - this.car.currentSpeed) / 10;
  }


}
