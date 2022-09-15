import { ConverisonModel } from './ConversionModel';

export class ConversionHistoryModel {
  public get conversions(): ConverisonModel[] {
    return this._conversions;
  }
  public set conversions(value: ConverisonModel[]) {
    this._conversions = value;
  }
  constructor(private _conversions: ConverisonModel[]) {}
}
