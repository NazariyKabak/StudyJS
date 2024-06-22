/**Деструктуризация**/
const user ={
    name:"Tom",
    age:22,
    phone:"+38098047712",
    email:"tom@gmail.com"
};
const {name, email} = user;
console.log(name,email)
const {name:userName, email:userEmail}=user;
console.log(userName,userEmail)

const user2={
    name: "Tom",
    age: 24,
}
const {email:mailaddress="sam@gmail.com"}=user2;
console.log(name,mailaddress)

const user3={
    name: "Bob",
    age: 24,
    account: {
        login: "tom555",
        password: "qwerty"
    }
}
const {account}=user3;
console.log(account.login, account.password)
const {name:user3Name, account:{login}}=user3;
console.log(user3Name,login);

/**Получение оставшихся свойств объекта с помощью rest-оператора**/
const {name:user1Name, email:user1Email,...contacts}=user;
console.log(user1Name,user1Email,contacts)

/**Деструктуризация массивов**/
const users=["Tom", "Sam", "Bob"];
const [a,b,c]=users;
console.log(c)
//Если переменных/констант меньше, чем элементов массива, то оставшиеся элементы массива просто опускаются.
//Если переменных/констант больше, чем элементов массива, то несопоставленные переменные/константы получают значение undefined:
const users2 = ["Tom", "Sam", "Bob", "Mike"];
const [firstElement,...others] = users2;
console.log(firstElement);
console.log(others);

/**Пропуск элементов**/
const users3 = ["Tom", "Sam", "Bob", "Ann", "Alice", "Kate"];
const [first,,,,,fifth]=users3;
console.log(first);
console.log(fifth);
const [,second,,,last]=users3;
console.log(second)
console.log(last)

/**Деструктуризация многомерных массивов**/
const coordinates = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const [
    [x1,y1,z1],
    [x2,y2,z2],
    [x3,y3,z3]
]=coordinates;
console.log(y3)

/**Деструктуризация объектов из массивов**/
const people = [
    {name: "Tom", age: 34},
    {name: "Bob", age: 23},
    {name: "Sam", age: 32}
];
const [,{name:namePeople}]=people;
console.log(namePeople)
//Другой пример - деструктуризация объектов при переборе массива объектов:
for (let{name:namePeople,age:agePeople} of people){
    console.log(`Name:${namePeople} age:${agePeople}`)
}

/**Деструктуризация параметров**/
function display({name:userName, age:userAge}){
    console.log(userName,userAge)
}
const user4={name:"Max", age:24};
display(user4);
function sum ([a,b,c]){
    const result=a+b+c;
    console.log(result);
}
const nums=[2,3,5];
sum(nums);

/**Обмен значениями**/
let firstMan="John";
let secondMan="Doe";
[firstMan,secondMan]=[secondMan,firstMan];
console.log(firstMan,secondMan)
let nums2 = [9, 3, 5, 2, 1, 4, 8, 6];
for (let i=0; i<nums2.length;i++){
    for (let j=0;j<nums2.length;j++){
        if (nums2[i]<nums2[j])[nums2[j],nums2[i]]=[nums2[i],nums2[j]];
    }
}
console.log(nums2)

/**Оператор ?. (optional chaning-оператор)**/
const naz=null;
const dima={name:"Dima"};
function printName(person){
    console.log(person.name)
}
// printName(naz)/  / Uncaught TypeError: Cannot read properties of null (reading "name")
printName(dima)

const naz2=null;
const dima2={name:"Dima"};
function printName2(person){
    if (person!==null && person!==undefined){
        console.log(person.name)
    }
}
printName2(dima2)
printName2(naz2)
//Также мы можем сократить проверку:
// function printName(person){
//     if(person) console.log(person.name);
// }
//Если person равен null или undefined, то if(person) возвратит false.

function printName3(person){
    console.log(person?.name)
}
printName3(dima2)
printName3(naz2)

const naz3=null;
const dima3={
    name:"Dima",
    sayHello(){
        console.log(`Hi, I am ${this.name}`);
    }
};
console.log(naz3?.name);
console.log(dima3?.name);
naz3?.sayHello();
dima3?.sayHello()
// obj.val?.prop       // проверка свойства
// obj.arr?.[index]    // провера массива
// obj.func?.(args)    // проверка функции

/**Проверка свойства**/
const sveta={name:"Sveta"};
const lera={
    name:"Lera",
    company:{title:"Samsung"}
};
console.log(sveta.company?.title)
console.log(lera.company?.title)
console.log(sveta.company?.["title"]);    // undefined
console.log(lera.company?.["title"]);    // Microsoft

/**Проверка свойства-массива**/
const vlad={name:"Vlad"};
const john={
    name:"John",
    languages:["JS","Java"],
    say(words) {
        console.log(words)
    }
};
console.log(john.languages?.[0]);
console.log(john.languages?.[1]);
console.log(vlad.languages?.[0]);

/**Проверка метода**/
console.log(vlad.say?.("say my name Vlad"));
console.log(john.say?.("say my name John"));

/**Цепочка проверок**/
const sam = {name: "Sam"};
const tom = {
    name: "Tom",
    company: { title: "Google"}
};
const bob = {
    name: "Bob",
    company: {
        title: "Microsoft",
        print(){
            console.log(`Компания ${this.title}`)
        }
    }
};
sam?.company?.print?.();    // не вызывается - нет свойства company
tom?.company?.print?.();    // не вызывается - нет метода print
bob?.company?.print?.();    // Компания Microsoft

/**Константные объекты. Запрет изменения объекта**/
//метод Object.preventExtensions():
//Для проверки расширяемости можно использовать метод Object.isExtensible().
const nazarii={name:"Nazarii"};
console.log(Object.isExtensible(nazarii))
Object.preventExtensions(nazarii);
console.log(Object.isExtensible(nazarii));
nazarii.company="TV";
nazarii.name="Nazar";
console.log(nazarii)
nazarii.name="Nazar";
console.log(nazarii)

/**Закрытие объектов**/
const tom2 = {name: "Tom"};

// для свойства name запрещаем изменение
Object.defineProperty(tom2, "name", { writable: false});
tom2.name = "Tomas";

// добавляем новое свойство - age
tom2.age = 39;
console.log(`Name: ${tom2.name}  Age: ${tom2.age}`);  // Name: Tom  Age: 39

// для свойства name разрешаем изменение
Object.defineProperty(tom2, "name", { writable: true});
tom2.name = "Tomas";
console.log(`Name: ${tom2.name}  Age: ${tom2.age}`);  // Name: Tomas  Age: 39


Object.seal(nazarii);
Object.defineProperty(nazarii, "name",{writable:false})
nazarii.age=21;
console.log(nazarii)
// Object.defineProperty(nazarii, "name",{writable:true})// Uncaught TypeError: Cannot redefine property: name
console.log(Object.isExtensible(nazarii));
console.log(Object.isSealed(nazarii));

/**Запрет на изменение значений свойств**/
const yarik={name:"Yarik"};
Object.freeze(yarik);
yarik.name="Yaroslav";
console.log(yarik)
console.log(Object.isFrozen(yarik))