// function hello(){
//     console.log("Hello");
// }
// hello()
// const message=hello;
// message();
//
// function hi(){
//     console.log("Hi");
// }
// function by(){
//     console.log("By");
// }
// let message1=hi;
// message1();
// message1=by;
// message1();
//
 /** анонимные функции**/
// const message2=function (){
//     console.log("Bebra!");
// }
// message2();
// //
 /**Локальные функции**/
// function print(){
//
//     function printHello(){
//         console.log("Hello LOX");
//     }
//     printHello();
//     printHello();
//     printHello();
// }
// print();

 /**Параметры функции**/
//
// function example1(message){
//     console.log(message);
// }
//
// example1("Nazar");
// example1(1);
// example1(); //undefined
//
// function example2(a,b){
//     console.log(a+b);
// }
// example2(2,2);
// example2(); //NAN
//
 /**Передача массива в качестве параметра и spread-оператор**/
//
// function example3(person){
//     console.log("Name:", person[0]);
//     console.log("Age:",person[1]);
//     console.log("Email:",person[2]);
//     console.log("=========================");
// }
// const tom=["Tom",21,"@email."];
// example3(tom);
//
 /**spread-оператор**/
// function example4(username, age, email){
//     console.log(username);
//     console.log(age);
//     console.log(email);
// }
// const bob=["Bob", 22,"@email"]
// example4(...bob) //example4(bob[0],bob[1],bob[2])
//
 /**Необязательные параметры и значения по умолчанию**/
// function example5(x,y){
//     if (y===undefined)y=5;
//     if (x===undefined)x=8;
//     console.log(x+y);
// }
// example5()
// example5(1)
// example5(2,1)
// function example6(x=2,y=3){
//     console.log(x+y);
// }
// example6()
// example6(4)
// example6(10,10)
//
// function example7(x=5,y=5+x){
//     console.log(x+y);
// }
// example7();
// example7(1,2);
// example7(3);
//
//
 /**Функции с произвольным количеством параметров(variadic function)**/
// function example8(){
//     let result=0;
//     for ( const n of arguments) {
//         result += n;
//     }
//     console.log(result);
// }
// example8(6);
// example8(6,4);
// example8(7,7,5);
//
// function example9(a,b,c){
//     // console.log(a)
//     // console.log(b)
//     // console.log(c)
//     let result=0;
//     for (const n of arguments) {
//         result += n;
//     }
//     console.log(result)
// }
// example9()
// example9(1,2);
// example9(12,3,5)
// example9(13,6,7,8)
//
// function example10(nums){
//     let result=0;
//     if (arguments.length>=1){
//         result+=arguments[0]
//     }
//     if (arguments.length>=2){
//         result+=arguments[1]
//     }
//     console.log(result);
// }
// example10(1)
// example10(2)
// example10(1,10)
// example10(4,5,8)
//
 /**rest-оператор**/
// function example11(...numbers){
//     let result=0;
//     for (const n of numbers){
//         result+=n;
//     }
//     console.log(result)
// }
// example11(1,2,3,4)
// example11()
// example11(23,10)
//
// function example12(season,...temps){
//     console.log(season)
//     for (index in temps){
//         console.log(temps[index])
//     }
// }
// example12("Summer",20,25,31)
//
 /**Массив как параметр**/
// function example13(numbers){
//     let result=0;
//     for (const n of numbers){
//         result += n;
//     }
//     console.log(result);
// }
// example13([1,3,4,5])
// example13([1])
//
 /**Функции в качестве параметров**/
//
// function sum(x,y){
//     return x + y;
// }
// function substruct(x,y){
//     return x-y;
// }
// function op(x,y,func){
//     console.log(func(x,y))
// }
// op(10,5,substruct)
// op(2,2,sum)
//
 /**Результат функции**/
// function example14(a,b){
//     const result=a+b;
//     return result;
// }
// console.log(example14(1,2))
//
// function rextangle(width,height){
//     const perimeter=width*2+height*2;
//     const area=height*width;
//     return [perimeter,area]
// }
// console.log(rextangle(2,3))
//
// function rectangle(width,height){
//     const rectPerimeter=width*2+height*2;
//     const rectArea=height*width;
//     return{perimeter: rectPerimeter, area:rectArea}
// }
// console.log(rectangle(2,3))
//
 /**Возвращение функции из функции**/
// function example15(n){
//     if (n==1) return function (x,y){return x+y;}
//     else if (n==2) return function (x, y){return x-y;}
//     else if (n==3) return function (x, y){return x*y;}
//     return function (){return 0;}
// }
// const action=example15(1)
// const result=action(1,2)
// console.log(result)
// console.log(example15(2)(10,5))
// function sum1(x,y){
//     return x+y;
// }
// function subtract1(x,y){
//     return x-y;
// }
// function multiply(x,y){
//     return x*y;
// }
// function menu1(n){
//     switch (n){
//         case 1:
//             return sum1;
//             break;
//         case 2:
//             return subtract1;
//             break;
//         case 3:
//             return multiply;
//             break;
//     }
// }
// console.log(menu1(3)(2,2))
//
 /**Стрелочные функции**/
// const hello3 =()=>console.log("Hello");
// hello3();
// const example16=(mes)=>console.log(mes)
// example16(122)
// const example17=(x,y)=>console.log(x+y)
// example17(1,2)
// const example18=(x,y)=>x+y
// console.log(example18(12,4))
// const example19=name=>`Hello ${name}`
// console.log(example19("Max"))
//
 /**Возвращение объекта**/
// const example20= (userName,userAge)=>({name: userName, age:userAge})
// console.log(example20("Nazar",11));
//
 /**Функция из нескольких инструкций**/
// const example21=n=>{
//     const result=n*n;
//     console.log(result)
// }
// example21(3)
/**Function Declaration vs. Exspression**/

//Function Declaration
function walk(){
 console.log("Walk");
}
walk()

//Exspression
let run=function (){
 console.log("Run");
}
run();

function sum(...args){
 return args.reduce((a,b)=>a+b);
}
console.log(sum(1,2,3,4));


function sum2(discount,...prices){
 const total=prices.reduce((a,b)=>a+b);
 return total*(1-discount);
}
console.log(sum2(0.1,20,30));

function sum3(principal, rate, years){
     rate=rate||3.5;
     years=years||5;

     return principal * rate/100*years;
}
console.log(sum3(10000,3.5,5));
console.log(sum3(10000));

/**get and set**/
// const person = {
//   firstName: 'Nazar',
//   lastName: 'Kabak',
//   age: 21,
//   get fullName (){
//    return `${person.firstName} ${person.lastName}`;
//   },
//  set fullName(value){
//
//    if (typeof value!=='string')
//     throw new Error('Value must be a string');
//    const parts=value.split(" ");
//    this.firstName=parts[0];
//    this.lastName = parts[1];
//
//  }
// };
// console.log(person.fullName)
// try{
//  person.fullName=null;
// }catch (e){
//  console.log(e)
// }
// console.log(person.fullName)

/**local vs global**/

const color="red";
function start(){
    const a="Hi";
    const color="green";// локальна змінна має пріорітет і визветься вона, а не глобальна
    console.log(color)//можна визивати всюди глобальну змінну
    if (true){
        const another='by';
    }
  //  console.log(another); не можна визвати, бо вона локальна в блоці іф
}
//console.log(a)не можна визвати, бо вона знаходить в блоці

/**let vs var**/


/**this**/
//це посилання на об'єкт який виконує поточну функцію
const video={
    title:"a",
    tags:["b","c","d","e","f","g","h","i"],
    play(){
        console.log(this)
    },
    showTags(){
        this.tags.forEach(function(tag){
            console.log(tag);
        })
    }
}
video.play();

function Video(title){
    this.title=title;

    console.log(this)
}
const v=new Video("b");
// console.log(v)
video.showTags()