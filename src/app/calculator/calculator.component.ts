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

    //if multiple operator press
    if(this.currentValue ===''){
      this.expression = this.expression.slice(0, -3);
      this.expression = this.expression + ' ' + op + ' ';
      this.operator = op;
      return
    }

    this.firstValue = Number(this.currentValue);
    this.operator = op;
    this.currentValue = '';
    this.expression = this.expression + ' ' + op + ' ';
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

  backspace() {

  if (this.expression === '') return;

  // check last 3 characters
  let lastThree = this.expression.slice(-3);

  // operator case ( " + ", " - ", " * ", " / " )
  if (lastThree === ' + ' || lastThree === ' - ' || lastThree === ' * ' || lastThree === ' / ') {
    this.expression = this.expression.slice(0, -3);
    this.operator = '';
  } else {
    // normal number delete (only 1 char)
    this.expression = this.expression.slice(0, -1);
  }

  // update currentValue
  let parts = this.expression.split(' ');
  this.currentValue = parts[parts.length - 1] || '';
}
  clear() {
    this.currentValue = '';
    this.firstValue = 0;
    this.operator = '';
    this.expression = '';
  }
}
