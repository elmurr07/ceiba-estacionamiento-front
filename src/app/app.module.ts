import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrarVehiculoComponent } from './components/registrarVehiculo/registrarVehiculo.component';
import { ForFilterPipe } from './pipes/forFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
	RegistrarVehiculoComponent,
    ForFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,RegistrarVehiculoComponent]
})
export class AppModule { }
