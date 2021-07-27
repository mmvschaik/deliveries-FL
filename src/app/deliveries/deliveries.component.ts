import { Component, OnInit } from '@angular/core';
import { Delivery } from '../utils/delivery';
import { DeliveriesService } from '../utils/deliveries.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  table: Delivery[] = [];
  filterArgs = {Dock_Lang: 'Citrus'};

  constructor(public deliveriesService: DeliveriesService) {}

  ngOnInit(): void {}

  handleFileSelect(e): any {
    const elem = document.documentElement;
    elem.requestFullscreen(); // fullscreen mode
    this.table = [...this.table];
    let files = null;
    files = e.target.files; // filelist object
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file); // read content of file as text string
    reader.onload = (event: any) => {
      const csv = event.target.result; // content of csv file
      this.deliveriesService.parseCsv(csv); // parse csv file
      this.table = this.deliveriesService.table; // update table
    };
  }
}

