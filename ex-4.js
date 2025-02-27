// Start coding here
let calculator = {
  add: (a, b) => {
    let output = a + b;
    return output;
  },

  subtract: (a, b) => {
    let output = a - b;
    return output;
  },

  multiply: (a, b) => {
    let output = a * b;
    return output;
  },

  divide: (a, b) => {
    let output = a / b;
    return output;
  },
};


let addResult = calculator.add(10,20); 
console.log(addResult); 

let divideResult = calculator.divide(3000,10); 
console.log(divideResult); 
