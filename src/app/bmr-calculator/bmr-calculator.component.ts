import { Component, OnInit } from '@angular/core';
import { FormsModule, Form, NgForm } from '@angular/forms';
import { BMRCalculator } from '../bmrcalculator';


@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.scss']
})
export class BMRCalculatorComponent implements OnInit {
  bmrValue: number = 1;
  maleBMR: number;
  femaleBMR: number;
  BMRCalculatorModel = new BMRCalculator("SI", 32, 165, "Male", 60);
  // unit: string,
  // age: number,
  // height: number,
  // sex: string,
  // weight: number
  constructor() { }

  ngOnInit(): void {

  }



  onSubmit(formValue): void {
    const { age, weight, height, sex } : { age:number, weight:number, height:number, sex:string }  = formValue;
    // BMR for Men = 66.47 + (13.75 * weight [kg]) + (5.003 * height [cm]) - (6.755 * age [years])
    // BMR for Women = 655.1 + (9.563 * weight [kg]) + (1.85 * height [cm]) - (4.676 * age [years])

    // const { name, age }: { name: string; age: number } = body.value

    this.maleBMR  = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    this.femaleBMR = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)
    // this.maleBMR = 66.47 + (13.75 * formValue.weight) + (5.003 * formValue.height) - (6.755 * formValue.age);
    // this.femaleBMR = 655.1 + (9.563 * formValue.weight) + (1.85 * formValue.height) - (4.676 * formValue.age)
    //alert(JSON.stringify(form));
    // console.log(form);
    // console.log(form.form.value.age);
    // console.log(formValue.age);
    // console.log(age, weight, height, sex);
    console.log(formValue.age, formValue.weight, formValue.height, formValue.sex);
    console.log("maleBMR", this.maleBMR);
    console.log("femaleBMR", this.femaleBMR);
    if (sex === "Male") {
      this.bmrValue = this.maleBMR;
    } else {
      this.bmrValue = this.femaleBMR;
    }
    
  }

  calculateBMR(formValue): void {

  }
  

}
