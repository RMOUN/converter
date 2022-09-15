import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ConverisonModel } from '../model/ConversionModel';

@Injectable({
  providedIn: 'root',
})
export class ConversionHistoryService {
  constructor() {}
  //to broadcast the new converions in order to store the history
  historyObservable = new ReplaySubject<ConverisonModel>(1);

  public getObservable() {
    return this.historyObservable.asObservable();
  }
  //Emitt the new history object
  public updateHistory(newConversion: ConverisonModel) {
    this.historyObservable.next(newConversion);
  }
}
