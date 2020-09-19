import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { SIPCalculatorComponent } from './sipcalculator/sipcalculator.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { WalkingCalorieCalculatorComponent } from './walking-calorie-calculator/walking-calorie-calculator.component';
import { BMRCalculatorComponent } from './bmr-calculator/bmr-calculator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RocketComponent } from './rocket/rocket.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ScannerComponent } from './scanner/scanner.component';
import { CartComponent } from './cart/cart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    SIPCalculatorComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CalculatorsComponent,
    BMRCalculatorComponent,
    WalkingCalorieCalculatorComponent,
    NavbarComponent,
    RocketComponent,
    FooterComponent,
    ScannerComponent,
    CartComponent,
    InvoiceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
