function fiftyPercent(obj) {
    let result
    let price
    for (k in obj){ 
    price = obj[k];
    result = price + price/100*15;
    result = Math.ceil(result/5)*5;
    obj[k] = result;
    console.log(obj[k]);
    }
  }
let product = {
    "apple": 800,
    "banana": 600,
    "milk": 700
  };

fiftyPercent(product); 
console.log(product);