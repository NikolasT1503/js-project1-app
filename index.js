console.log("Hello, world!");
console.log("---");

const a = 0,
  b = 8;
const c = 3;

function getSqrtDiscriminant(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    throw new Error("Дискриминант отрицательный");
  }

  return Math.sqrt(discriminant);
}

function checkA(a) {
  if (a === 0) {
    throw new Error("Знаменатель равен 0");
  }
}

try {
  checkA(a);
  const sqrtDiscriminant = getSqrtDiscriminant(a, b, c);

  const x1 = (-b + sqrtDiscriminant) / (2 * a);
  const x2 = (-b - sqrtDiscriminant) / (2 * a);

  console.log(a, b, c, x1, x2);
} catch (exception) {
  console.error(exception);
}

console.log("---");
class QuadraticEquation {
  a;
  b;
  c;
  x1;
  x2;
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getSqrtDiscriminant(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      throw new Error("Дискриминант отрицательный");
    }

    return Math.sqrt(discriminant);
  }

  checkA(a) {
    if (a === 0) {
      throw new Error("Знаменатель равен 0");
    }
  }

  solve() {
    try {
      this.checkA(this.a);
      const sqrtDiscriminant = this.getSqrtDiscriminant(this.a, this.b, this.c);

      this.x1 = (-this.b + sqrtDiscriminant) / (2 * this.a);
      this.x2 = (-this.b - sqrtDiscriminant) / (2 * this.a);
      //return { x1:this.x1, x2:this.x2 };
      return this;
    } catch (exception) {
      console.error(exception);
    }
  }
}

const ex3 = new QuadraticEquation(3,8,2);
console.log(ex3.solve());

console.log("---");
console.log(this);

console.log("---");
function example1() {
    //контекст (this) будет смотреть на глобальный объект (в случаем с браузером будет смотреть на объект window)
    console.log(this); 
    
}
example1();

console.log("---");
function example2() {
    'use strict' //контекст (this) будет равен underfined
    console.log(this);
    
}
example2();