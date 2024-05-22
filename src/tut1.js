function sayHello(){
    alert("Hello ");
}
function changeColor(){
    document.getElementById("two").innerHTML="BLUE";
}

console.log(typeof(a));
a=32;
console.log(typeof(a));

let a1="100";
let a2=100;
console.log(a1==a2);
console.log('this is ')
const sym1=Symbol("My Identifier");
const sym2=Symbol("My Identifier");
console.log(sym1==sym2)
console.log(null===null)
console.log(undefined===undefined);
const k1=Symbol();
const k2=Symbol();
myObj={'k3':"ram"};
myObj[k1]="Harry";
myObj[k2]='Rohit';  
console.log(myObj[k2])
console.log(myObj[k1])
myObj["name"]='Hrutik';
myObj["name1"]='Rohan';
console.log(myObj["name"]);
for(key in myObj){
    console.log(key,myObj[key]);//Symbols are ignored in for in loops
}
console.time('Your code Took');
console.log(JSON.stringify(myObj));
console.log(JSON.parse(JSON.stringify(myObj)));
console.log("hi")
console.log([23,3,2,2,1])
console.table({harry:'this',dikshant:'wagh'})
console.timeEnd('Your code Took');
console.warn("this is warning");
console.assert(true,'Age >189 not possible')
console.error('this is error')