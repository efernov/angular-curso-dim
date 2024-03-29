import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pedals',
  templateUrl: './pedals.component.html',
  styleUrls: ['./pedals.component.css']
})
export class PedalsComponent implements OnInit {

  @Input()
  public disableBrake!: boolean;
  @Input()
  public disableThrottle!: boolean;
  @Output() public brake = new EventEmitter<number>();
  @Output() public throttle = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
