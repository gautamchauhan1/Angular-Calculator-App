import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  currentValue: string = '';
  firstValue: number = 0;
  operator: string = '';
  expression: string = '';

  onNumberClick(num: string) {
    this.currentValue = this.currentValue + num;
    this.expression = this.expression + num;
  }

  onOperatorClick(op: string) {
    if (this.currentValue === '' && this.expression === '') return;

    this.firstValue = Number(this.currentValue);
    this.operator = op;
    this.currentValue = '';
    this.expression = this.expression + '' + op + '';
  }

  calculate() {
    let secondValue = Number(this.currentValue);
    let result = 0;

    if (this.operator === '+') {
      result = this.firstValue + secondValue;
    } else if (this.operator === '-') {
      result = this.firstValue - secondValue;
    } else if (this.operator === '*') {
      result = this.firstValue * secondValue;
    } else if (this.operator === '/') {
      result = this.firstValue / secondValue;
    }

    this.currentValue = result.toString();
    this.expression = this.currentValue;
  }

  clear() {
    this.currentValue = '';
    this.firstValue = 0;
    this.operator = '';
    this.expression = '';
  }
}
