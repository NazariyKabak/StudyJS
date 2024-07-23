/**Шаблоны строк**/

const name = "Tom";
const hello = `Hello ${name}`;
console.log(hello);

const tom={
    name:"Tom",
    age:"20"
}
console.log(`Hello ${tom.name}, ${tom.age}!`);

function sum(x,y){return x+y;}
let a=5;
let b=11;
console.log(`${a} + ${b}=${sum(a,b)}`);
console.log(`${a} * ${b}=${a*b}`);

/**Тег-функции и передача шаблона строки в функцию**/
const person="Tom";
function check(parts,name){
    console.log(parts);
    return parts[0] + name + parts[1];
}
const checkedTemplate=check`Person:${person}`;
console.log(checkedTemplate);
