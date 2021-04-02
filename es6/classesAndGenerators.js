
class Calculator {
  constructor(a, b) {
    this.valueA = a;
    this.valueB = b;
  }

  sum() {
    return this.valueA + this.valueB; 
  }
}

class Multiply extends Calculator {
  constructor(c, d){
    super(c, d);
  }
  mult(){
    return this.valueA * this.valueB;
  }
}

const newCalc = new Calculator(7, 8);
console.log('ADD', newCalc.sum());
const newMulti = new Multiply(8, 8);
console.log('ADD', newMulti.sum());
console.log('MULT', newMulti.mult());