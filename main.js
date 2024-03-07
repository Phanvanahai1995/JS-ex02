// Bài 1

// var kilometer = +prompt("Nhập vào số km đã đi");
// var first = 15000;
// var second = 13500;
// var third = 11000;
// var money = 0;

// if (kilometer <= 1) {
//   money = first;
// } else if (1 < kilometer && kilometer <= 5) {
//   money = first + second * (kilometer - 1);
// } else if (kilometer > 5 && kilometer <= 120) {
//   money = first + second * 4 + third * (kilometer - 5);
// } else {
//   money = 0.9 * (first + second * 4 + third * (kilometer - 5));
// }
// console.log(money);

// Bài 2
// var electric = +prompt('Nhập vào số điện đã tiêu thụ');
// var bill = 0;
// if (electric >= 0 && electric <= 50) {
//   bill = 1678 * electric;
// } else if (electric >= 51 && electric <= 100) {
//   bill = 1678 * 50 + 1734 * (electric - 50);
// } else if (electric >= 101 && electric <= 200) {
//   bill = 1678 * 50 + 1734 * 50 + 2014 * (electric - 100);
// } else if (electric >= 201 && electric <= 300) {
//   bill = 1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * (electric - 200);
// } else if (electric >= 301 && electric <= 400) {
//   bill =
//     1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * 100 + 2834 * (electric - 300);
// } else {
//   bill =
//     1678 * 50 +
//     1734 * 50 +
//     2014 * 100 +
//     2536 * 100 +
//     2834 * 100 +
//     2927 * (electric - 400);
// }
// console.log(bill);

// Bài 3

// S = 1*2 + 2*3 + 3*4 + ... + n(n +1)

// const n = 10;
// let number = 1;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   number = i * (i + 1);
//   sum += number;
// }

// console.log(sum);

// Bài 4

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// const n = 111;

// if (isPrime(n)) {
//   console.log(`${n} là số nguyên tố`);
// } else {
//   console.log(`${n} không là số nguyên tố`);
// }

// Bài 5

// function triangle(n) {
//   let row = '';
//   let number = 1;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       row += number + ' ';
//       number++;
//     }
//     row += '\n';
//   }
//   return row;
// }

// console.log(triangle(5));

// Bài 6

// Cách 1
let sum = "";
for (let i = 0; i < 64; i++) {
  sum +=
    parseInt(i / 8 + i) % 2 === 0
      ? `<div class='box-black'></div>`
      : `<div class='box-white'></div>`;
}

document.write(`<div class='container'>${sum}</div>`);

// Cách 2
// for (let i = 0; i < 64; i++) {
//   document
//     .querySelector(".inner")
//     .appendChild(document.createElement("div")).style.backgroundColor =
//     parseInt(i / 8 + i) % 2 === 0 ? "#000" : "#fff";
// }

// Bài 7

/*
    2*1 =2;
    2*2 =4;
    2*3 =6
    ...
    2*10 =20

*/

// for (i = 1; i <= 10; i++) {
//   let result = 0;
//   for (j = 1; j <= 10; j++) {
//     result = i * j;
//     console.log(`${i} * ${j} = ${result}`);
//   }
// }

// Bài 8

//S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/n

// Cách 1:

let total = 0;
const number = function (n) {
  if (n === 0) {
    return 0;
  }
  return 1 / n + number(n - 1);
};

total = number(10);
console.log(total);

// Cách 2
// const n = 10;
// let result = 1;
// for (let i = 1; i < n; i++) {
//   result += 1 / (i + 1);
// }

// console.log(result);
