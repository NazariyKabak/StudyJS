// /**Вложенные объекты и массивы в объектах**/
// // const country={
// //     name:"America",
// //     language:"Eng",
// //     capital: {
// //         name:"Washington",
// //         population:750_000_000,
// //         year:1237
// //     }
// // }
// // console.log(country)
// // console.log(country.capital)
// //
// // const country2={
// //     name:"Швейцария",
// //     lang:["немецкий", "французский", "итальянский"],
// //     capital:{
// //         name:"Берн",
// //         population:126598
// //     },
// //     cities:[
// //         {name: "Цюрих", population: 378884},
// //         {name: "Женева", population: 188634},
// //         {name: "Базель", population: 164937}
// //     ]
// // };
// // console.log("Официальные языки Швейцарии: ");
// //
// // for (const lang of country2.lang){
// //     console.log(lang)
// // }
// //
// // console.log("Города Швейцарии:");
// // for (const city of country2.cities) {
// //     console.log(city.name)
// // }
//
// /**Копирование и сравнение объектов**/
// const tom={name:"Tom"}
// const bob=tom;
// console.log(tom.name)
// console.log(bob.name)
// //
// // bob.name="Bob"
// // console.log(bob.name)
// // console.log(tom.name)
// // bob.age=37;
// // console.log(bob.age)
// // console.log(tom.age)
// // console.log(tom===bob)
//
// /**Метод Object.assign**/
// // const nazar={name:"Nazar", age:22};
// // const max=Object.assign({},nazar)
// // console.log(max)
// // max.name="Max"
// // max.age=23;
// // console.log(nazar)
// // console.log(max)
// // console.log(max===nazar)
// // delete max.age
// // console.log(max)
// // console.log(nazar)
// /**Копирование из нескольких объектов**/
// // const mike={name:"Mike"}
// // const sam={age:12}
// // const person={height:170}
// // Object.assign(person,mike,sam)
// // console.log(person)
//
// /**Копирование одноименных свойств**/
// // const kate={name:"Kate",age:26}
// // Object.assign(person,kate,sam)
// // console.log(person)
//
//
// /**Копирование свойств-объектов**/
// // const jane={name:"Jane",company:{title:"Apple"}}
// // const jake =Object.assign({},jane)
// // console.log(jake)
// // jake.name="Jake";
// // jake.company.title="Google"//десь свойство company объекта jane представляет объект с одним свойством.
// // // И при копировании объект jake получит не копию значения jane.company, а ссылку на этот объект.
// // console.log(jane)
// // console.log(jake)
//
// /**Копирование объекта с помощью spread-оператора**/
// //spread-оператор ... позволяет разложить объект на различные пары свойство-значение,
// // которые можно передать другому объекту.
// // const yarik={name:"Yarik",age:27,company: "Google"};
// // const slavik={...yarik,age:21}
// // console.log(yarik)
// // console.log(slavik)
// // slavik.name="Slava"
// // console.log(yarik)
// // console.log(slavik)
// //
// // const igor={name:"Igor", company:{title:"Samsung"}}
// // const sveta={...igor,name:"Sveta",company:{title:"lenovo"}};
// // // console.log(sveta)
// // // sveta.company.title="Lenovo"
// // console.log(igor)
// // console.log(sveta)
//
// /**Проверка наличия и перебор методов и свойств**/
// // const user={}
// // user.name="Vlad"
// // user.age=21
// // user.print=function (){
// //     console.log(user)
// // }
// // const hasNameProp="name" in user;
// // console.log(hasNameProp)
// //
// // const hasWieghtProp ="weight" in user;
// // console.log(hasWieghtProp)
// //
// // const hasPritProp="print" in user;
// // console.log(hasPritProp)
// //
// // //Альтернативный способ
// // const hasNameProp1=user.name!==undefined
// // console.log(hasNameProp1)
// // const hasWeightProp1 = user.weight!==undefined;
// // console.log(hasWeightProp1);
// //
// // //hasOwnProperty()
// // const hasNameProp2=user.hasOwnProperty("name")
// // console.log(hasNameProp2)
// // const hasWeightProp2=user.hasOwnProperty("weight")
// // console.log(hasWeightProp2)
//
// /**Перебор свойств и методов**/
// const dzhamal={
//     name:"Dzhamal",
//     age:"22",
//     print(){
//         console.log(user)
//     }
// }
// for (const dzhamalKey in dzhamal) {
//     console.log(dzhamalKey,dzhamal[dzhamalKey])
// }
//
// /**Функции Object.entries, Object.keys, Object.values**/
// for (const dzhamalKey of Object.entries(dzhamal)) {
//     console.log(dzhamalKey)
// }
//
// //Object.keys
// console.log(Object.keys(dzhamal))
//
// for (const dzhamalElement of Object.keys(dzhamal)) {
//     const value=tom[dzhamalElement]
//     console.log(dzhamalElement,value)
// }
// //
// //Object.values()
// console.log(Object.values(dzhamal))
//

let p1={
    name:"Nazarii",
    age:22,
    university:{
     name: ["KNU", "DUIKT"]
    },
    print(){
      console.log(p1)
    }
}
p1.print();
for (let unik in p1.university){
    console.log(unik, p1.university[unik]);
}

for (let unik of Object.entries(p1)){
    console.log(unik);
}

for (let p1Element of Object.keys(p1)) {
    console.log(p1Element);
}
for (let p1Element of Object.values(p1)) {
    console.log(p1Element);
}

let p2=Object.assign({}, p1);
console.log(p2);
console.log(p2===p1);
p2.age=25;
p2.university={name:["KPI","KNTU"]};
console.log(p2);
let p3 = {...p1, age:30};
console.log(p3);
let hasNamrProp = "name" in p1;
let hasGenderProp = "gender" in p1;
console.log(hasNamrProp);
console.log(hasGenderProp);
let hasNamrProp2 = p1.hasOwnProperty("name");
console.log(hasNamrProp2);

for (const p1Key in p1) {
    console.log(p1Key);
}
