import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ConversionHistoryModel } from '../model/ConversionHistoryModel';
import { ConversionHistoryService } from '../services/conversion-history.service';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.css'],
})
export class ConversionHistoryComponent implements OnInit {
  public conversionsHistory = new ConversionHistoryModel([]);

  displayedColumns: string[] = [
    '_customConverisonTaux',
    '_conversionTaux',
    '_entryAmount',
    '_convertedAmount',
  ];

  @ViewChild(MatTable)
  table!: MatTable<ConversionHistoryModel>;
  dataSource = this.conversionsHistory.conversions;
  constructor(private conversoinHistorySerive: ConversionHistoryService) {}

  ngOnInit(): void {
    this.conversoinHistorySerive.historyObservable.subscribe((val) => {
      this.dataSource.push(val);
      let length = this.dataSource.length;
      if (length > 5) {
        this.dataSource = this.dataSource.slice(Math.max(length - 5, 1));
      }
      this.table.renderRows();
      this.table.renderRows();
    });
  }
}
