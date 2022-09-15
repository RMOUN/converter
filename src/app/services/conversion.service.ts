import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  constructor() {}
  public convert(entryAmount: number, conversionTaux: number): number {
    if (Math.abs(conversionTaux - 1.1) < 2) {
      return entryAmount * conversionTaux;
    } else {
      return entryAmount * 1.1;
    }
  }
}
