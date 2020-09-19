import { Component, OnInit } from '@angular/core';
import { FormsModule, Form, NgForm } from '@angular/forms';
import { WalkingCalorieCalculator } from '../walking-calorie-calculator';


@Component({
  selector: 'app-walking-calorie-calculator',
  templateUrl: './walking-calorie-calculator.component.html',
  styleUrls: ['./walking-calorie-calculator.component.scss']
})
export class WalkingCalorieCalculatorComponent implements OnInit {
  

  walkingCalorieCalculatorModel = new WalkingCalorieCalculator("SI", 32, 165, "Male", 60, 120, 2, 2);
  // unit: string,
  // age: number,
  // height: number,
  // sex: string,
  // weight: number
  // duration: number,
  // walkingSpeed: number,
  // speed: number

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {


    this.walkingCalorieCalculatorModel
  }

}
