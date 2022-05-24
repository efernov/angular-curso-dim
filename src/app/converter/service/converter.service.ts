import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }
  public fromKilometersToMiles = (kilometers: number) => kilometers * 0.621;
  public fromMilesToKilometers = (miles: number) => miles * 1.609;
  public fromCelsiusToFarenheit = (celsius: number) => celsius * (9 / 5) + 32;
  public fromFarenheitToCelsius = (farenheit: number) => (farenheit-32)*(5/9);
}
