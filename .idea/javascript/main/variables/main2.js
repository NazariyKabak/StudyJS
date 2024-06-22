/**Область видимости переменных*
 "use strict";

/**Глобальні змінні**/
// var a=5;
// let b=8;
// const c=9;
function display(){
    var d=a+b+c; //d-неглобальна
    return d;
}
// console.log(display())

/**Определение локальной области видимости**/
{
    var a1 = 5;//var определяет локальные переменные уровня функции
    let b1 = 8;//let определяет локальные переменные уровня блока кода
    const c1 = 9;//const определяет константы уровня блока кода
}

function print(){
    var a2=5;
    let b2=8;
    const c2=9;
    console.log(a2)
    console.log(b2)
    console.log(c2)
}
print()
// console.log(a2)

/**Переменная var**/
{
    var a3=5;
}
console.log(a3)

if (true){
    var b3=6;
}
console.log(b3)
for (var i = 0; i < 10; i++){
    var c3=4;
}
console.log(c3)

// if(false){
//     var b = 6;
// }
// console.log("b =", b);  // b = undefined
//
// // цикл
// for(let i = 1; i < 0; i++){
//     var c = 7;
// }
// console.log("c =", c);  // c = undefined
//
// /**Переменная let и константы**/
// {
//     let a4 = 5;
// }
// console.log(a4)// Uncaught ReferenceError: a4 is not defined
//
// {
//     const b4=3;
// }
// console.log(b4)// Uncaught ReferenceError: b4 is not defined

// /**Скрытие переменных**/
// var z=89;
// function example1(){
//     var z=2;
//     console.log(z)
// }
// example1()
// /**Скрытие переменной var**/
// function example2(){
//     var z1=2;
//     {
//         var z1=30;// Не определяет новую переменную, а изменяет значение переменной z уровня функции
//         console.log("Block: ",z);
//     }
//     console.log("Functiob:", z);
// }
// example2()

/**Скрытие переменной let**/
let z2=10;
function example3(){
    let z2=20;
    {
        let z2=30;
        console.log(z2)
    }
    console.log(z2)
}
example3()
console.log(z2)

const z3 = 10;
function example4(){

    const z3 = 20;

    {
        const z3 = 30;
        console.log("Block:", z3);   // 30
    }
    console.log("Function:", z3);    // 20
}

example4()
console.log("Global:", z3);  // 10

/**Scope chain / Цепочка областей видимости**/
const z4=10;
function example5(){
    const z4=20;
    console.log(z4)
}
example5()

const z5=11;
function example6(){
    console.log(z5)// применяется scope chain - интерпретатор обращается к окружающей области видимости и выполняет поиск там
}
example6()

/**Необъявленные переменные
 При определении переменных в JavaScript **/
{
    userName="Tom"
}
console.log(userName)
{
    console.log(userName)
}

function example7(){
    userage=17 //global
}
example7() // обов'язково використовуємо виклик методу, щоб вивзати змінну.
console.log(userage)/// ошибка - Uncaught ReferenceError: userage is not defined

/**strict mode**/

userName1="Bob";
console.log(userName1)
let x=10
let y=x++
console.log(y)
let x1=10
let y1=++x1
console.log(y1)

let a="red";
let b="blue";
let swap;
swap=a
a=b
b=swap
console.log(a)
console.log(b)

/**Замыкание (closure)**/
function example8(){ // внешняя функция
    let n=5;// некоторая переменная
    function inner(){// вложенная функция
        n++;
        console.log(n)
    };
    return inner;
}
console.log(example8())
const fn=example8()
fn()
fn()
fn()
const fn2=example8()
fn2()
fn2()
fn2()

function example9(n){
    let x=n;
    return function (m){
        return x*m;
    }
}
const ex1=example9(5)
const result1=ex1(6)
console.log(result1)
console.log(example9(4)(4))

/**Замыкания и объектно-ориентированное программирование**/
function example10(name, age){
    console.log("Person:", name, " Created");
    function print(){
        console.log("Person ", name, "("+age+")");
    }
    function work(){
        console.log("Person ", name, " works");
    }
    function incrementAge(value){
        age+=value;
    }
    return [print,work,incrementAge]
}
const tom=example10("Tom", 21)
tom[0]()
tom[1]()
tom[2](1)
tom[0]()

/**Функции IIFE
 * Самовызывающиеся функции**/
    // (function(){
    //     console.log("Привет мир");
    // }());
    //
    // (function (a,b){
    //     const result=a+b;
    //     console.log(`${a}+${b}=${result}`);
    // }(4,5))

/**Функциональный стиль**/
console.log(
    ((x,y)=>(
        ((proc2)=>(
            ((proc1)=>proc1(5,30))((x,y)=>[x,proc2(),y])
        ))(()=>x+y)
    ))(10,15)
);

/**Рекурсивные функции**/
function factorial(n){
    if (n==1){
        return 1;
    }else {
        return n*factorial(n-1);
    }
}
console.log(factorial(4))
/**result = 4 * factorial(3);
 result = 4 * 3 * factorial(2);
 result = 4 * 3 * 2 * factorial(1);
 result = 4 * 3 * 2 * 1; // 24**/
function fibonachi(n){
    if (n===0||n===1){
        return n;
    }else {
        return fibonachi(n-1)+fibonachi(n-2);
    }
}
console.log(fibonachi(8))

/**Переопределение функций**/
function example11(){
    console.log("Good morning");
    example11=function (){
        console.log("Good day");
    }
}
const message11 =example11
example11()
example11()
message11()
message11()

/**Hoisting**/
/**Переменные var**/
console.log(foo)  // undefined
var foo="Naz"
var c11=a11*b11;
var a11=2;
var b11=3;
console.log(c11)

example12()
function example12(){
    console.log("Good morning");
}
// example13()
// var example13=function (){
//     console.log(2)
// }

/**let-переменные и константы**/
// console.log(foo1)// Uncaught ReferenceError: Cannot access 'foo' before initialization
// let foo1="Tom";
// console.log(foo1)// не будет выполняться

/**Передача параметров по значению**/
function example13(x){
    x*=2;
    console.log("x in change:",x)
}
let n=10;
console.log(n) //n before change: 10
example13(n) //// x in change: 20
console.log(n)// n after change: 10

/**Передача по ссылке**/

function example14(user){
    user.name = "Tom";
}
let bob={
    name:"Bob"
};
console.log(bob.name)
example14(bob)
console.log(bob.name)

function example15(user){
    user={name:"Tom"};
}
let bob1={
    name:"Bob"
};
console.log(bob1.name)
example15(bob1)
console.log(bob1.name)

function example16(arr){
    arr[0]=8;
}
function example17(arr){
    arr=[9,8,7]
}
let nums=[1,2,3]
console.log(nums)
example16(nums)
console.log(nums)
example17(nums)
console.log(nums)
null + {0:1}[0] + [,[1],][1][0]

// let f = function g() { return 23; };
// console.log(typeof g());
let obj = {
    "0": 1,
    0: 2
};

console.log( obj["0"] + obj[0])
var num_1=2
console.log(num_1)