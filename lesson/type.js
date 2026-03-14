// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Grammar_and_types

let a = 1;
let b = 'это строка';
let c = '2';
//let d; // undefined
let d = null;
console.log('Что в d ? - ' + d);
if (typeof d !== 'undefined' && d !== null) {
  // переменная существует и не null
    console.log(d);
}
d = true;
e = false;
console.log(d);
console.log(a);
console.log(typeof(a));
console.log(typeof(c));
console.log(a+c);
console.log(a*c);
console.log(a+d);
console.log(a+e);

// 0 false
// '' false
// undefined false
// 'false' true
// -5 true
