import { Injectable } from '@angular/core';
import { Delivery } from './delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  table: Delivery[] = [];

  constructor() { }

  parseCsv(csv): Delivery[] {
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
    console.log('DeliveriesService: CSV file parsed successfully! ', this.table);
    return this.table;
  }

}
