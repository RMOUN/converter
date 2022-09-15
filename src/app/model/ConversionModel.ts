export class ConverisonModel {
  private _entryAmount: number;
  private _entryAmountCurrency: string;
  private _convertedAmount: number;
  private _convertedAmountCurrency: string;
  private _conversionTaux: number;
  private _customConverisonTaux: number;

  public get entryAmount(): number {
    return this._entryAmount;
  }
  public set entryAmount(value: number) {
    this._entryAmount = value;
  }

  public get entryAmountCurrency(): string {
    return this._entryAmountCurrency;
  }
  public set entryAmountCurrency(value: string) {
    this._entryAmountCurrency = value;
  }

  public get convertedAmount(): number {
    return this._convertedAmount;
  }
  public set convertedAmount(value: number) {
    this._convertedAmount = value;
  }

  public get convertedAmountCurrency(): string {
    return this._convertedAmountCurrency;
  }
  public set convertedAmountCurrency(value: string) {
    this._convertedAmountCurrency = value;
  }

  public get conversionTaux(): number {
    return this._conversionTaux;
  }
  public set conversionTaux(value: number) {
    this._conversionTaux = value;
  }

  public get customConverisonTaux(): number {
    return this._customConverisonTaux;
  }
  public set customConverisonTaux(value: number) {
    this._customConverisonTaux = value;
  }

  constructor() {
    this._entryAmount = 0;
    this._entryAmountCurrency = '€';
    this._convertedAmount = 0;
    this._convertedAmountCurrency = '$';
    this._conversionTaux = 1.1;
    this._customConverisonTaux = 0;
  }
}
