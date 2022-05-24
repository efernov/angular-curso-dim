import { Component, OnInit } from '@angular/core';
import { CultureConverterService } from '../service/culture-converter.service';

@Component({
  selector: 'app-culture-converter',
  templateUrl: './culture-converter.component.html',
  styleUrls: ['./culture-converter.component.css']
})
export class CultureConverterComponent implements OnInit {
  public source!: string;
  public target!: string;
  public sourceUnits!: 0;
  public targetUnits!: number;

  constructor(private cultureConverterService: CultureConverterService) { }

  public ngOnInit(): void {
    this.source = this.cultureConverterService.sourceCulture;
    this.target = this.cultureConverterService.targetCulture;
    this.convert();
  }
  public convert(): void {
    this.targetUnits = this.cultureConverterService.convertDistance(this.sourceUnits);
  }

}
