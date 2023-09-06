function min(num1, num2){
    if(num1>num2){
        return num2
    } else if(num1===num2){
        return "they are equal"
    } else {
        return num1
    }
}

console.log(min(3,6))

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }