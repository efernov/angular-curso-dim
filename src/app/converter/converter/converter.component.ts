import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../service/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  public kilometers = 0;
  public miles!: number;

  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
    this.convert();
  }

  public convert(): void {
    this.miles = this.converterService.fromKilometersToMiles(this.kilometers);
  }
}
