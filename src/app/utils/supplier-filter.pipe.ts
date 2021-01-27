import { Pipe, PipeTransform } from '@angular/core';
import { Delivery } from '../utils/delivery';

@Pipe({
  name: 'supplierFilter',
})
export class SupplierFilterPipe implements PipeTransform {

  transform(table: any[], filter: any): any {
    if (!table || !filter) {
      return table;
    }
    // filter items array, items which match and return true will be filtered out, false will be kept
    return table.filter(cel => cel.Dock_Lang.indexOf(filter.Dock_Lang) === -1);
  }

}
