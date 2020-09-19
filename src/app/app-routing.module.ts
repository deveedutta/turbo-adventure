import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RocketComponent } from './rocket/rocket.component';
import { CComponent } from './c/c.component';
import { SIPCalculatorComponent } from './sipcalculator/sipcalculator.component';
import { BComponent } from './b/b.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WalkingCalorieCalculatorComponent } from './walking-calorie-calculator/walking-calorie-calculator.component';
import { BMRCalculatorComponent } from './bmr-calculator/bmr-calculator.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    component: ScannerComponent, //RocketComponent,
    pathMatch: 'full'
  },
  {
    path: 'scanner',
    component: ScannerComponent,
    pathMatch: 'full'
  },
  {
    path: 'product-description',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full'
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
    pathMatch: 'full'
  },
  {
    path: 'calculators',
    children: [
      {
        path: 'sip',
        pathMatch: 'full',
        component: SIPCalculatorComponent 
      },
      {
        path: 'walking-calorie-calculator',
        pathMatch: 'full',
        component: WalkingCalorieCalculatorComponent 
      },
      {
        path: 'bmr-calculator',
        pathMatch: 'full',
        component: BMRCalculatorComponent 
      }
    ]
    
  },
  {
    path: 'something-else',
    component: BComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
