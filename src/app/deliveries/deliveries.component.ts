import { Component, OnInit } from '@angular/core';
import { Delivery } from '../utils/delivery';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  table: Delivery[] = [];

  constructor() {}

  ngOnInit(): void {}

  handleFileSelect(e): any {
    console.log('kom ik hier langs?');
    this.table = [...this.table];
    let files = null;
    files = e.target.files; // filelist object
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      const csv = event.target.result; // content of csv file
      this.parseCsv(csv);
    };
  }

  parseCsv(csv): void {
    const tableData = [];
    const rows = csv.split(/\n|\r\n/); // split into rows
    const headers = rows.shift() // get headers
      .split(' ')
      .join('_') // get rid of spaces in headers
      .split(','); // split headers
    for (let i = 0; i < rows.length; i++) {
      const dataWithComma = rows[i] // get data rows
        .replace(/\".*?\"/g, match => match.replace(/,/g, ';')) // get rid of double quoted comma
        .split(','); // split data rows
      const dataRows = tableData[i] = {};
      for (let j = 0; j < dataWithComma.length; j++) {
        const dataVal = dataWithComma[j]
          .replace(/;/g, ',') // get comma back
          .replace(/\"/g, ''); // get rid of double quotes
        const dataHead = headers[j]; // index headers
        dataRows[dataHead] = dataVal; // make key:value pairs
      }
    }
    this.table = [...tableData];
    this.table.pop(); // delete blank row at bottom??
    console.log('parseCSV complete: ', this.table);
  }
}

