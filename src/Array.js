let marks=[23,32,4,2,5,6,23,21];
const fruits=['Orange','Apple'];
const mixed=[2,'str',false];
const arr=new Array(323,23,32,'Orange');
console.log(arr);
console.log(mixed)
console.log(Array.isArray(arr))
console.log(arr[3]);
console.log(arr.indexOf(323));
arr.push('adfdsaf');
console.log(arr.unshift(2009));

console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(1,2);
console.log(arr);
marks.reverse();
console.log(marks);
let marks2=[3,32,1];
marks=marks.concat(marks2);
console.log(marks);
