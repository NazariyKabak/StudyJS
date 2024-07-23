/**Объект как результат функции**/
function createUser(pName, pAge){
    return{
        name: pName,
        age: pAge,
        print:function (){
            console.log(pName,pAge)
        }
    };
};

const tom=createUser("Tom", 25)
console.log(tom);
tom.print()
const alice=createUser("Alice", 35)
alice.print()
console.log(tom===alice)

function createUser2(pName, pAge){
    if (pAge<1||pAge>110){
        console.log("Age invalid")
        pAge=1
    }
    return{
        name: pName,
        age: pAge,
        print:function (){
            console.log(pName,pAge)
        }
    }
}
const bob=createUser2("Bob", 111)
bob.print()

function getMinMax(numbers){
    if (numbers.length===0)return {
        min:undefined,max:undefined
    }
    let MinNumber=numbers[0];
    let MaxNumber=numbers[0];
    for (let i=1;i<numbers.length;i++){
        if(numbers[i]<MinNumber){
            MinNumber=numbers[i]
        }else if(numbers[i]>MaxNumber){
            MaxNumber=numbers[i]
        }
    }
    return {min: MinNumber, max: MaxNumber}
}

const nums=[22,2,3,4,5]
const result=getMinMax(nums)
console.log(result)

/**Объект как параметр**/
function printPerson(person){
    console.log(person)
}
const nazar={name:"Nazar", age:21}
const jane = {name: "Jane", age: 35};
printPerson(nazar)
console.log(nazar===jane)

function setAge(person,age){
    person.age=age
}
const sam={name:"Sam",age:32}
console.log(sam.age)
setAge(sam,22)
console.log(sam.age)

function setDefault(person){
    person={name:"Undefined", age:0}
}
let mike={name:"Mike", age:21}
console.log(mike.name)
setDefault(mike)
console.log(mike.name)

/**Функции-конструкторы объектов**/
function createUser3(name, age, gender){
    this.name = name
    this.age = age
    this.gender=gender
}

const john = new createUser3("John", 5, 'M');
console.log(john);

function printUser3(user){
    console.log(user)
}
printUser3(john)

const users=[new createUser3("Igor",27,'M'),
    new createUser3("Yarik",27,'M'),
    new createUser3("Olya",44,'W')];
for (const user of users) {
    console.log(user)
}

/**Оператор instanceof**/
function People(name, age){
    this.name = name;
    this.age = age;
}
function Employee(name, age){
    this.name = name;
    this.age = age;
}
const vasya= new People("Vasya",22);
const peta=new Employee("Petro",12);
console.log(vasya instanceof People);
console.log(vasya instanceof Employee);