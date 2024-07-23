 const arr=["Nazariy", "Bob", "Tom"];
// console.log(arr);
// console.log(arr[1]);
// //Присвоєння змінній р третійй елемент масиву
// const p=arr[2];
// console.log(p);
// //Зміна першого елемента в масиві
// arr[0]="Nazar";
// console.log(arr);
// //Додавання ще одного елемента в масив
// arr[3]="Max";
// console.log(arr);
//
// const arr2=["Nazariy", "Bob", "Tom",1,true,3.14];
// console.log(arr2);
//
// //двовимірний масив
// const arr3=[
//     ["Nazariy", "Bob", "Tom"],
//     [1,2,3]
// ];
// console.log(arr3);
// console.log(arr3[1][2]);
//
// let num=43
// if (num){
//     console.log(`Num= ${num}`);
// }
// for (let i = 0; i<arr2.length;i++){
//     console.log(arr2[i]);
// }
//
// let i=0;
// while (i<5){
//     console.log(i);
//     i++;
// }
//
// let k=0;
// do {
//     console.log(k);
//     k++;
// }while (k<4);
//
// const person={name:"Nazar", age:21};
// for (prop in person) {
//     console.log(prop,person[prop]);
// }
//
// const text = "Hello!";
// for ( char of text) {
//     console.log(char)
// }
//
// for (const pers of arr) {
//     console.log(pers);
// }
//
// var bebra =10;
// console.log(bebra);
// var bebra=11;
// console.log(bebra)
//
//


const nums=[3,4];
console.log(nums)


// //додавання в кінець
nums.push(2,5,2)
console.log(nums)

// //додавання на початок
nums.unshift(10,7)
console.log(nums)

//+ в середину
nums.splice(2,0,15,21)
console.log(nums)

//Пошук елементів
console.log(nums.indexOf(4))//повертає індекс
console.log(nums.indexOf(11))
console.log(nums.lastIndexOf(2))//повертає індекс останього однакового числа
console.log(nums.includes(11))
console.log(nums.includes(10))

const courses=[
    {id:1,name:"a"},
    {id:2,name:"b"},
    {id:3,name:"c"},
]
const course=courses.find(function (course){
  return   course.name==="a";//якщо не буде знайдено, виведе undefined
})
console.log(course)
const course2=courses.find( course=>course.name==="c");
console.log(course2)
//
// //delete element
 //видалення останнього елмента
nums.pop()
console.log(nums)
//видалення першого елемента
nums.shift()
console.log(nums)
//
nums.splice(4,1)
console.log(nums)
//
nums.splice(0,nums.length)
console.log(nums)
//
//combining and slicing arr
const first=[{id:1}];
const second=[4,5,6];
const comb=first.concat(second)
console.log(comb);
first[0].id=10;
console.log(comb);
const slice=comb.slice();
console.log(slice);
console.log(comb===slice)
//
const first2=[1,2,3];
const second2=[4,5,6];
const combd2=[...first2,...second2];
const combd3=[...first2,"a",...second2]; //можна об'єднувати масиви та додати в них елементи
console.log(combd2);
 console.log(combd3);
const copy=[...combd2]
console.log(copy)
copy.forEach(function (num){
    console.log(num)
})
copy.forEach(num=>{
    console.log(num)
})
//
//joining arr
console.log(first2.join('!'))

const message="This is my 1929 message";
const parts=message.split(" ")
console.log(parts)
const comb3=parts.join("-")
console.log(comb3)

// //sort
const nums2=[2,5,3,-10,1]
nums2.reverse()
console.log(nums2)
nums2.sort()
console.log(nums2)
//
const corses2=[
    {id:1,name:"Node.js"},
    {id:2,name:"JavaScript"},
    {id:3,name:"A"}
]
corses2.sort(function(a,b){
    if (a.name<b.name){
        return -1;
    }else if(a.name>b.name){
        return 1;
    }
    return 0;
})
console.log(corses2)
//
const allPositive=nums2.every(function (value){
    return value>=0;
})
console.log(allPositive)

const onePositive=nums2.some(function (value){
    return value>=0;
})
console.log(onePositive)

const filtered=nums2.filter(function (value){
    return value>=0;
})
console.log(filtered)
//
/**Mapping in Arr**/
const items=filtered.map(n=>'<li>'+n+'</li>');
console.log(items)

const html=items.join()
console.log(html)

const items2=filtered.map(n=>{
    return {value:n};
})
console.log(items2)

const items3=nums2
    .filter(n=>n>=0)
    .map(n=>({value:n}))
    .filter(n1=>n1.value>2)
console.log(items3)
//
/**reducing an Arr**/
let sum=0;
for (let number of nums2) {
    sum+=number;
}
console.log(sum)

const sum2=nums2.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0)
console.log(sum2)
//
// /**task1**/
//
// function arrayFromRang(min,max){
//     const arr = [];
//     for (let i=min; i <= max; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// const arr1=arrayFromRang(1,5);
// console.log(arr1)
//
// /**task2**/
//
// function includes(arr, searchElem){
//     for (let arrElement of arr) {
//         if (searchElem === arrElement){
//             return true;
//         }
//     }
//     return false;
// }
// const nums3=[4,58,9,43,9];
// console.log(includes(nums3,9));
//
// function expect(arr, excludet){
//     const output=[];
//     for (let arrElement of arr) {
//         if (!excludet.includes(arrElement)){
//             output.push(arrElement)
//         }
//     }
//     return output;
// }
// const output=expect(nums3,[58]);
// console.log(output)
//
// /**task4**/
// function move(arr, index, offset){
//     const output=[...arr];
//     const element=output.splice(index,1)[0];
//     output.splice(index+offset,0,element);
//     return output;
// }
// console.log(move(nums3,1,2));
//
// /**task5**/
//
// function countOccurences(arr,searchElement){
//     // let count=0;
//     // for (let element of arr){
//     //     if (element===searchElement){
//     //         count++;
//     //     }
//     // }
//     // return count;
//    return  arr.reduce((accumulator,currentValue)=>{
//        const occurenc=(searchElement===currentValue)?1:0;
//        return accumulator+occurenc;
//     },0)
// }
// console.log(countOccurences(nums3,9))
//
// /**task6**/
// function getMax(arr){
//     // let max=arr[0];
//     // for (let i=1;i<=arr.length;i++){
//     //     // if (arr[i]>max){
//     //     //     max=arr[i];
//     //     // }
//     //     (arr[i]>max)?max=arr[i]:max;
//     // }
//     // return max;
//     return arr.reduce((a,b)=>(a>b)?a:b);
// }
// console.log(getMax(nums3))
//
// /**task7**/
// const movies=[
//     {title:"a", year:2018,rating:4.5},
//     {title:"b", year:2018,rating:7.5},
//     {title:"c", year:2018,rating:6},
//     {title:"d", year:2018,rating:8.5},
// ];
//
// function searchMoive(arr){
//     for (let arrElement of arr) {
//
//     }
// }
// const filtM=movies
//     .filter(m =>m.year===2018 && m.rating>5)
//     .sort(function(a,b){
//         if (a.rating<b.rating){
//             return 1;
//         }else if(a.rating>b.rating){
//             return -1;
//         }
//         return 0;
//     })
//     .map(m=>m.title)
// console.log(filtM)


 let array=[1,2,3];
 array.push(11,23)
 console.log(array)
 array.unshift(54,22)
 console.log(array)
 array.splice(2,1,44)
 console.log(array)

array.pop()
 console.log(array)
 array.shift()
 console.log(array)

 array.splice(2,1)
 console.log(array)

 console.log(array.indexOf(11))
 console.log(array.includes(4))

 const p=[{
     value:12,
     value:3,
     value:54
 }]
const search=p.find(function (value){
    return value.value===54;
})
console.log(search);
let array2=[1,2,3,4];
let c=array.concat(array2)
 console.log(c);
let c2=[...array,...array2];
console.log(c2);
let array3=c2.slice();
console.log(array3);
let j=array3.join('+');
console.log(j);
let text2="I love bebra";
let s= text2.split(" ");
console.log(s);
console.log(array3.reverse());
console.log(array3.sort());

let p2=[
    {id:1,name:"Node.js"},
    {id:2,name:"JavaScript"}
];
let sorts=p2.sort(function (a,b) {
    if (a.name<b.name){
        return -1;
    }else {
        return 1;
    }
});
console.log(sorts);

 let mapping=array3.map(n=>'<li>'+n+'</li>');
 console.log(mapping);
 let mapping2=mapping.join();
 console.log(mapping2);
 let mapping3=array3.map( value=>{
     return {value:value};
 });
 console.log(mapping3);

 let ev=array.every(function (value){
     return value>=0;
 });
 let only=array.some(value=>{
     return value<=0;
 })
 console.log(ev);
 console.log(only);


 /**Создание массива**/
 const users=new Array();
 const people=[];
 console.log(users);
 console.log(people);
 users[1]=33;
 console.log(users[0]);

 const users2=new Array(1,2,3,4);
 const people2=["A","B","C","D","E"];
 console.log(users2);
 console.log(people2);

 const people3=Array.of("A","B","C");
 console.log(people3);

 /**Array.from**/

 // Array.from(arrayLike)
 // Array.from(arrayLike, function mapFn(element) { ... })
 // Array.from(arrayLike, function mapFn(element, index) { ... })
     //В качестве первого параметра - arrayLike функция принимает некий объект(массив. строка
     // и некий объект, в котором определено свойство length. )
     //В качестве второго параметра передается функция преобразования,
     // которая через первый параметр получает текущий элемент набора и возвращает некоторый результат его трансформации.
 const text=Array.from("Hello!");
 console.log(text);

 const nums3=[1,2,3,4];
 const arr3=Array.from(nums3, n=>n*n);
 console.log(arr3);

 const arr4=Array.from({length:3,"0":"Tom","1":"Sam", "2":"Bob"}, (element)=>{
     console.log(element);
     return element;
 });
console.log(arr4);


/**Массивы и spread-оператор**/
//spread-оператор (оператор ...) позволяет разложить массив на отдельные значения
 const users3=["Nazar", "Adrey","Bobik"];
 console.log(...users3);

 //И, применяя этот оператор, мы можем наполнить один массив значениями из другого массива:
 const people4=[...users3];
 const people5=Array.of(...users3);
 const people6=new Array(...users3);
 console.log(people4);
 console.log(people5);
 console.log(people6);

 const men = ["Tom", "Sam", "Bob"];
 const women = ["Kate", "Alice", "Mary"];
 const all=[...men,"Nazarii",...women];
 console.log(all);

 /**Передача аргументов функции**/
function print(first, second, third){
    console.log(first);
    console.log(second);
    console.log(third);
 }
 print(...men);

/**Копирование массивов**/
const people7 = ["Sam", "Tom", "Bob"];
 const employees = [...people,   7] ;
 employees[0] = "Dan";
 console.log(employees);     // ["Dan", "Tom", "Bob"]
 console.log(people7);        //  ["Sam", "Tom", "Bob"]

 const people8 = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
 const employees2 = [...people8];
 //employees[0] = {name: "Dan"};
 employees2[0].name = "Dan";
 console.log(employees2);     //  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
 console.log(people8);        //  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]


 const people9 = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
 const employees3 = [...people];
 employees[0] = {name: "Dan"};
 console.log(employees3);     //  [{name:"Dan"}, {name:"Tom"}, {name:"Bob"}]
 console.log(people9);        //  [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}]

/**Операции с массивами**/
// concat(): объединяет элементы двух массивов в один массив
//
//  every(): проверяет, все ли элементы соответствуют определенному условию
//
//  filter(): фильтрует элементы массива
//
//  find(): возвращает первый элемент массива, который соответствует некоторому условию
//
//  findLast(): возвращает последний элемент, который соответствует условию
//
//  findIndex(): возвращает индекс первого элемента массива, который соответствует некоторому условию
//
//  findLastIndex(): возвращает индекс последнего элемента, который соответствует условию
//
//  flat(): упрощает структуру вложенных элементов массива.
//
//  forEach(): применяет определенную функцию к каждому элементу массива
//
//  includes(): проверяет, есть ли в массиве значение
//
//  indexOf(): возвращают индекс первого включения элемента в массиве.
//
//  join(): объединяет элементы массива в строку
//
//  lastIndexOf(): возвращают индекс последнего включения элемента в массиве.
//
//  map(): преобразует каждый элемент массива в другое значение на основе функции преобразования (проекция элементов)
//
//  pop(): удаление элемента с конца массива
//
//  push(): добавление элемента в конец массива
//
//  reduce(): объединяет элементы массива в одно значение
//
//  reverse(): располагает элементы массива в обратном порядке
//
//  shift(): удаляет первый элемент массива
//
//  slice(): вырезает отдельные элементы из массива
//
//  splice(): добавление элементы на определенную позицию в массиве
//
//  some(): проверяет, соответствует ли хотя бы один элемент условию.
//
//  sort(): сортирует массив
//
//  unshift(): добавляет новый элемент в начало массива

 /**copyWithin**/
 //Метод copyWithin() позволяет копировать элементы внутри массива. Он принимает три параметра
 // copyWithin(index1,  // позиция, в которую вставляются копируемые элементы
 //     index2,  // начальная позиция, с которой будут копироваться элементы
 //     index3   // конечная позиция, до которой будут копироваться элементы
 // )

 const people10 = ["Tom", "Sam", "Bob", "Alice", "Kate"];
 const users5=people10.copyWithin(0,2,5);
 console.log(users5);

 /**Наследование массивов**/
 class Team extends Array{
     constructor(name, ...members) {
         super(...members);
         this.name=name;
     }
 }
 const barcelona= new Team("Barcelona","Messi","Xavi","Suarez");
 console.log(barcelona);

 for (const barcelonaElement of barcelona) {
     console.log(barcelonaElement);
 }
 /**Переопределение методов**/

 class Team2 extends Array{
     constructor(name, ...members) {
         super(...members);
         this.name=name;
     }
     push(person) {
         if (person!=="admin")super.push(person);
     }
 }
 const snowbars= new Team2("Snowbars", "Tom", "Sam", "Bob");
 console.log(snowbars);
 snowbars.push("admin");
 console.log(snowbars);
 snowbars.push("Tim");
 console.log(snowbars);