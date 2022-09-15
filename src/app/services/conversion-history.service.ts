import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ConverisonModel } from '../model/ConversionModel';

@Injectable({
  providedIn: 'root',
})
export class ConversionHistoryService {
  constructor() {}
  historyObservable = new ReplaySubject<ConverisonModel>(1);
  public getObservable() {
    return this.historyObservable.asObservable();
  }

  public updateHistory(newConversion: ConverisonModel) {
    this.historyObservable.next(newConversion);
  }
}
