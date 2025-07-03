class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));        // 5
console.log(calc.add("안녕, ", "세상!")); // "안녕, 세상!"
console.log(calc.add("33", "5"));