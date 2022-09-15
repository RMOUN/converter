import { Component, OnInit } from '@angular/core';
import { ConversionHistoryModel } from '../model/ConversionHistoryModel';
import { ConverisonModel } from '../model/ConversionModel';
import { ConversionHistoryService } from '../services/conversion-history.service';
import { ConversionService } from '../services/conversion.service';
import { TauxService } from '../services/taux.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  public conversion = new ConverisonModel();

  isFixTaux: boolean = false;

  constructor(
    private conversionService: ConversionService,
    private tauxService: TauxService,
    private conversionHistoryService: ConversionHistoryService
  ) {}

  ngOnInit(): void {
    this.tauxService.startTauxChangements();

    this.tauxService.tauxObservable.subscribe((val) => {
      if (!this.isFixTaux) {
        this.conversion.conversionTaux = val;
      }
    });

    // this.conversionService.convert(1000, 1.5);
  }

  switchCurrency(entryAmount: any, taux: any) {
    if (this.conversion.entryAmountCurrency === '€') {
      this.conversion.entryAmountCurrency = '$';
      this.conversion.convertedAmountCurrency = '€';
    } else {
      this.conversion.entryAmountCurrency = '€';
      this.conversion.convertedAmountCurrency = '$';
    }
    this.conversion.entryAmount = this.conversion.convertedAmount;
    this.conversion.conversionTaux = 1 / this.conversion.conversionTaux;
    this.convert(this.conversion.entryAmount, taux);
  }
  convert(entryAmount: any, taux: any) {
    this.conversion.entryAmount = entryAmount;
    this.conversion.convertedAmount = this.conversionService.convert(
      entryAmount,
      taux
    );
    if (this.isFixTaux) {
      this.conversion.customConverisonTaux = taux;
    }

    let history: ConverisonModel = new ConverisonModel();

    history.conversionTaux = this.conversion.conversionTaux;
    history.customConverisonTaux = this.conversion.customConverisonTaux;
    history.entryAmount = this.conversion.entryAmount;
    history.entryAmountCurrency = this.conversion.entryAmountCurrency;
    history.convertedAmount = this.conversion.convertedAmount;
    history.convertedAmountCurrency = this.conversion.convertedAmountCurrency;

    this.conversionHistoryService.updateHistory(history);
  }
  showHistory() {}
}
