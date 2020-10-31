import { Component, OnInit } from '@angular/core';
import { DeliveriesService } from '../services/deliveries.service';
import { Delivery } from '../utils/delivery';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  table: Delivery[];

  constructor(private deliveriesService: DeliveriesService) {}

  ngOnInit(): void {
    // this.getDeliveries();
  }

  /* getDeliveries(): void {
    this.deliveriesService.getDeliveries()
      .subscribe(deliveries => this.table = deliveries);
  } */

  handleFileSelect(e): void {
    const files = e.target.files; // filelist object
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
    this.table = tableData;
    this.table.pop(); // delete blank row at bottom??
    // this.addDeliveries(this.table); // push deliveries to server
    console.log('parseCSV complete: ', this.table);
    this.deliveriesService.addDeliveries(this.table);

    // zonder *ngFor:

    /* const tbody = document.querySelector('tbody');

    for (let i = 1; i < this.table.length; i++) {
      const tr = document.createElement('tr');
      tbody.appendChild(tr);

      tr.onclick = () => {
        if (tr.style.backgroundColor === '') {
          tr.style.backgroundColor = 'rgb(50, 168, 82)';
        } else if (tr.style.backgroundColor === 'rgb(50, 168, 82)') {
          tr.style.backgroundColor = 'rgb(255, 0, 0)';
        } else {
          tr.style.backgroundColor = '';
        }
      };

      for (const [key, value] of Object.entries(this.table[i])) {
        // console.log(`${key}: ${value}`);
        const td = document.createElement('td');
        td.textContent = value.toString();
        tr.appendChild(td);
      }
    } */
  }

  /* addDeliveries(table: Delivery[]): void {
    for (const i of table) {
      this.deliveriesService.addDeliveries(i)
        .subscribe(delivery => this.table.push(delivery));
    }
  } */
}

