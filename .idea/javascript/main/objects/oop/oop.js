/**Объекты
 **/

// //Первый способ
const user=new Object();//использовании конструктора Object
user.name="Max";
user.age=23;
console.log(user)
user.age=24;
console.log(user)

//Второй способ
const user2={};
user2.name="Nazar";
user2.age=21;
console.log(user2)

const user3={
    name:"Nazarii",
    age:21,
    gender:"Male"
}
console.log(user3)

const name= "Yarik";
const age=30;
const user4={name,age}
console.log(user4)
user4.age=27
console.log(user4)

const teacher={user,course:'JS'}
console.log(teacher)

/**Методы объекта**/
// user.display1=function (){
//     console.log(user4)
// }
// user.display1()
//
// user2.display2=function (objects){
//     console.log(objects)
// }
// user2.display2(teacher)
// user2.display2(user3)
//
// const user5={
//     name:"Tom",
//     age:33,
//     display: function (){
//         console.log(this.name+"-"+this.age)
//     }
// }
// user5.display();
//
// let user6={
//     name: "Bob",
//     age: 26,
//     display(){
//         console.log(this.name,this.age);
//     },
//     move(place){
//         console.log(this.name,"goes to", place)
//     }
// };
// user6.display();
// user6.move("the shop")


/**Синтаксис массивов**/
// const user7={}
// user7["name"]= "Slavik"
// user7["age"]=21
// user7["display3"]=function (){
//     console.log(user7.name+" lox")
// }
// console.log(user7);
// user7.display3();
// user7["display3"]();
//
// const user8={
//     ["name"]:"Igor",
//     ["age"]:18,
//     ["display8"]:function (){
//         console.log(this.name+" "+this.age)
//     }
// }
// user8["display8"]();

/**Строки в качестве свойств и методов**/
// const user9={
//     "name":'Chipik',
//     "age":9,
//     "display9":function (){
//         console.log(this.name+" "+this.age)
//     }
// };
// user9.display9();
//
const user10={
    name:'Jake',
    age:9,
    "fullname": "Jake Summers",
    display10:function (){
        console.log(this.name,this.age);
    }
};
user10.display10()
console.log(user10["fullname"])

/**Динамическое определение имен свойств и методов**/
// const prop1="name";
// const prop2="age";
// const user11={
//     [prop1]:"John",
//     [prop2]:43
// };
// console.log(user11)
// console.log(user11.name)
// console.log(user11["age"])
//
// function createObjects(propName, propValue){
//     return{
//         propName:propValue,
//         print(){
//             console.log(`${propName}: ${propValue}`);
//         }
//     };
// }
// console.log(createObjects("name","Neyzr"))
// const book=createObjects("title","The Witcher")
// console.log(book)
// book.print();

/**Удаление свойств**/
// delete user10.age
// console.log(user10)
// delete user10["name"]
// console.log(user10)

/**Создание объекта из переменных и констант**/
// function getSalary(status){
//     if (status==="senior") return 1500;
//     else return 500;
// }
// const name12="Yana";
// const age12=18;
// const salary=600;
// const person={name:name12,age:age12, salary:getSalary()};
// const person2={name:name12,age:age12, salary:getSalary("senior")};
// const person3={name12,age12, salary};
// console.log(person)
// console.log(person2)
// console.log(person3)
// console.log(person2===person)
//
//
// function print2(){
//     console.log(this.name13, this.age13);
// }
// const move= function (place){
//     console.log(this.name13,"goes to",place);
// }
// const name13='Ira';
// const age13=23;
// const person4={name13,age13,print2,move}
// console.log(person4)
// person4.print2()
// person4.move("Cinema")
// const move2=(place)=>{
//     console.log(this.name14,"goes to", place);
//     console.log(this);
// }
// const name14='Kate';
// const person5={name14,move2};
// console.log(person5)
// person5.move2("work")

/**Фукция Object.fromEntries()**/
//Object.fromEntries() — це метод, який приймає масив пар ключ-значення і повертає об'єкт,
// створений з цих пар
// const personDate=[["name","Tom"],["age",37]];
// const person6=Object.fromEntries(personDate);
// console.log(person6)
// console.log(person6.name)

/**Ключевое слово this**/
/**Глобальный контекст и объект globalThis**/
// console.log(this)
// console.log(globalThis);


/**Контекст функции**/
// function foo(){
//     var bar = "local";
//     console.log(this.bar);
// }
//
// var bar = "global";
//
// foo();

// function foo2(){
//     var bar = "local";
//     console.log(bar);
// }
//
// var bar = "global";
//
// foo2();
//
// 'use strict';
// function foo3(){
//     var bar = "local";
//     console.log(this.bar);
// }
//
// var bar = "global";
//
// foo3();

/**Контекст объекта**/
// const obj={
//     bar2:"object",
//     foo4:function () {
//         console.log(this.bar2)
//     }
// }
// var bar2="global";
// obj.foo4()

/**Динамическое определение контекста**/
// function foo5(){
//     var bar = "foo_bar";
//     console.log(this.bar);
// }
// const obj1={bar:"obj1_Bar",foo5:foo5}
// const obj2={bar:"obj2_Bar",foo5:foo5}
// var bar="Global bar"

// obj1.foo5()
// obj2.foo5()
// foo5();

/**Контекст во вложенных функциях**/
// var bar = "global bar";
//
// function foo6(){
//     var bar = "foo bar";
//     function moo(){
//
//         console.log(this.bar);
//     }
//     moo();
// }
// foo6();

// /**Явная привязка**/
// function foo6(){
//     console.log(this.bar5);
// }
// var obj5={bar5:"obj5_Bar"}
// var bar5="global Bar"
// foo6()
// foo6.apply(obj5)
//
// /**Метод bind**/
// const func=foo6.bind(obj5)
// func();
//
/**this и стрелочные функции**/
const user15={
    name:"Pisya",
    say:()=> console.log(`Меня зовут ${this.name}`)
}
user15.say()

const user16={
    name:'Kaka',
    hello(){
        console.log("Hi")
        let say=()=>console.log(`Меня зовут ${this.name}`);
        say()
    }
}
user16.hello()

const school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses(){
        this.courses.forEach(function(course){
            console.log(this.title, course);
        })
    }
}
school.printCourses();

const school2 ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses2(){
        const that = this;
        this.courses.forEach(function(course){
            console.log(that.title, course);
        })
    }
}
school2.printCourses2();

const school3 ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses(){
        this.courses.forEach((course)=>console.log(this.title, course))
    }
}
school3.printCourses();

