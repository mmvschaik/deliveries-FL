import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { ChangeColorDirective } from './change-color.directive';
import { SupplierFilterPipe } from './utils/supplier-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeliveriesComponent,
    ChangeColorDirective,
    SupplierFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
