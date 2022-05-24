import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter/converter.component';
import { CultureConverterComponent } from './culture-converter/culture-converter.component';
import { FormsModule } from '@angular/forms';
import { CultureConverterService } from './service/culture-converter.service';
import { UsaConverterService } from './service/usa-converter.service';
import { EuropeConverterService } from './service/europe-converter.service';


@NgModule({
  declarations: [
    ConverterComponent,
    CultureConverterComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: CultureConverterService,
      useClass: UsaConverterService
    }
  ]
})
export class ConverterModule { }
