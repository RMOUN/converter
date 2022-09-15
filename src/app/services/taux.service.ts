import { Injectable } from '@angular/core';
import { interval, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TauxService {
  constructor() {}

  //Valeurs par défault
  private minTauxChangement: number = -5;
  private maxTauxChangement: number = 5;
  private currentTaux: number = 1.1;
  tauxObservable = new ReplaySubject<number>(1);

  // tax edition
  private changeTaux() {
    this.currentTaux +=
      Math.floor(
        Math.random() * (this.maxTauxChangement - this.minTauxChangement) +
          this.minTauxChangement
      ) / 100;
  }

  //start the changement of the current taux each 3 seconds
  public startTauxChangements() {
    interval(3000).subscribe(() => {
      this.changeTaux();
      this.tauxObservable.next(this.currentTaux);
    });
  }
}
