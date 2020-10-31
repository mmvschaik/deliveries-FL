import { Injectable } from '@angular/core';
import { Delivery } from '../utils/delivery';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService{

  private deliveriesUrl = 'http://localhost:3000/users';
  private objectState: any = new BehaviorSubject('initial state');

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

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
    const deliveries = [];
    const rows = csv.split(/\n|\r\n/); // split into rows
    const headers = rows.shift() // get headers
      .split(' ')
      .join('_') // get rid of spaces in headers
      .split(','); // split headers
    for (let i = 0; i < rows.length; i++) {
      const dataWithComma = rows[i] // get data rows
        .replace(/\".*?\"/g, match => match.replace(/,/g, ';')) // get rid of double quoted comma
        .split(','); // split data rows
      const dataRows = deliveries[i] = {};
      for (let j = 0; j < dataWithComma.length; j++) {
        const dataVal = dataWithComma[j]
          .replace(/;/g, ',') // get comma back
          .replace(/\"/g, ''); // get rid of double quotes
        const dataHead = headers[j]; // index headers
        dataRows[dataHead] = dataVal; // make key:value pairs
      }
    }
    deliveries.pop(); // delete blank row at bottom??
    this.addDeliveries(deliveries);
    console.log('parseCSV complete: ', deliveries);
  }

  getDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.deliveriesUrl);
  }

  /* addDeliveries(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(this.deliveriesUrl, delivery, this.httpOptions);
  } */

  addDeliveries(deliveries: Delivery[]): any {
    console.log(deliveries);
    this.http.post<any>(this.deliveriesUrl, deliveries, this.httpOptions).subscribe({
      next: data => {
        console.log('post done!');
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }
}
