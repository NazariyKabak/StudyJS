const tom={name:'Tom',age:20};
console.log(tom.__proto__);
console.log(Object.getPrototypeOf(tom))

/**Прототип функций-конструкторов**/
function Person(name,age){
    this.name=name;
    this.age=age;
}
const max= new Person("Max",24);
console.log(Person.prototype);
console.log(max.__proto__);
console.log(Object.getPrototypeOf(max))
console.log(Person.prototype.constructor)
console.log(max.constructor);

Person.prototype.print=function (){
    console.log(Person)
}
console.log(Person.prototype);

function Person2 (name, age) {
    this.name = name;
    this.age = age;
    this.print2 = function(){
        console.log(`[Конструктор] Name: ${this.name}  Age: ${this.age}`);
    };
}
Person2.prototype.print2=function (){
    console.log(Person2)
}
const slava=new Person2("Slava", 21)
const ira= new Person2("Ira", 24)
slava.print2();
ira.print2()

/**Определение свойств прототипа**/
Person2.prototype.company="Google"
console.log(slava.company)
console.log(ira.company)
ira.company="Pub"
console.log(ira.company)
console.log(slava.company)

/**Функция как объект. Методы call и apply**/
const square=new Function("n", "return n * n;")
console.log(square(5))
// Среди свойств объекта Function можно выделить следующие:
//
// arguments: массив аргументов, передаваемых в функцию
//
// length: определяет количество аргументов, которые ожидает функция
//
// caller: определяет функцию, вызвавшую текущую выполняющуюся функцию
//
// name: имя функции
//
// prototype: прототип функции

function sayHello(){
    console.log("Hello")
}
Function.prototype.program="Hello world";
console.log(sayHello.program)
console.log(sayHello.prototype)

/**call()**/
function sum(x,y){
    return x + y
}
const result=sum.call(this,2,3)
console.log(result)

function Example1(name, age){
    this.name=name
    this.age=age
}
const dima=new Example1("Dima",22)
function printExample(){
    console.log(this.name)
}
printExample.call(dima)

//Если нам не важен объект, для которого вызывается функция, то можно передать значение null:
const result2=sum.call(null,2,3)
console.log(result2)
/**apply()**/

const result3=sum.apply(null,[2,3])
console.log(result3)


/**Функция Object.create**/
//const tom = Object.create(прототип, {  свойства и методы });
const mike=Object.create(Object.prototype,{
    name:{
        value:"Mike"
    },
    age:{
        value:44
    },
    printMike:{
        value:function (){
            console.log(`name:${this.name} age:${this.age}`)
        }
    }
})
console.log(mike.name)
mike.printMike()

// writeable: хранит логическое значение, которое указывает, доступно ли это свойство для записи, то есть можно ли ему присвоить новое значение.
// По умолчанию этот атрибут имеет значение false.
//
// enumerable: хранит логическое значение, которое указывает, является ли соответствующее свойство перечислимым,
// то есть включается ли это свойство при переборе свойств соответствующего объекта (например, с использованием цикла for...in).
// По умолчанию имеет значение false.
//
// configurable: хранит логическое значение, которое указывает, можно ли изменить сам атрибут для соответствующего свойства,
// то есть можно ли впоследствии настроить свойство с помощью атрибутов.
// Значение по умолчанию для этого атрибута также равно false
//
// set: определяет, какая функция вызывается при изменении значения свойства
//
// get: определяет, какая функция вызывается при чтении значения свойства

const tony=Object.create(Object.prototype,{
    name:{
        value:"Tony",
        enumerable:true,     // доступно для перебора
        writable:false      // НЕ доступно для записи
    },
    age:{
        value:51,
        enumerable:true,
        writable:true //доступно для записи
    },
    printTony:{
        value:function (){console.log(tony)},
        enumerable:false,
        writable:false
    }
})

console.log(tony.name)
tony.name="Stark" //свойство name не доступно для изменения
console.log(tony.name)

console.log(tony.age)
tony.age=43
console.log(tony.age)
tony.printTony()
for (const tonyKey in tony) {
    console.log(tonyKey,tony[tonyKey])

}

/**Object.defineProperty**/

const strange={
    age:39,
    printStrange:function (){
        console.log(strange.name, strange.age)
    }
}
Object.defineProperty(strange,"name",{
    value:"Steve",
    writable:false
})
console.log(strange.name)
strange.name="Strange"
console.log(strange.name)
strange.printStrange()

//Если надо подобным образом доопределить несколько свойств, то применяется функция Object.defineProperties
Object.defineProperties(strange,{
    work:{
        value:"Doctor",
        writable:true
    },
    printStrange:{
        value:function (){
        console.log(`Name: ${this.name}  Age: ${this.age} Work: ${this.work}`)},
        writable:false
    }
})
strange.printStrange()
strange.printStrange=function (){console.log("Avengers")}

/**Наследование прототипов**/
const example2={
    name:"",
    age:0,
    print:function (){
        console.log(`name: ${this.name} Age: ${this.age}`)
    }
}

//В данном случае объект p1 создан на основе прототипа объекта example2, по сути объект p1 наследует прототип объекта example2.
// Благодаря такому наследованию объект p1 обладает всеми теми же свойствами и методами, которые определены в объекте example2.
const p1=Object.create(example2)
console.log(p1.__proto__)
p1.name="Pisya"
p1.age=23
p1.print()
p1.company="DUT"
console.log(p1)
p1.work=function (){
    console.log(` ${this.name} work in company: ${this.company}`)
}
p1.work()

//При необходимости можно переопределить унаследованные методы:

p1.print=function (){
    console.log(`Name: ${this.name}  Age: ${this.age} Company: ${this.company}`)
}
p1.print()
const manager = Object.create(p1);
manager.salary=44_000
manager.print=function (){
    console.log(`Name: ${this.name}  Age: ${this.age}\nManager in ${this.company} salary:${this.salary}`);
}
manager.print()
manager.name = "Bob";
manager.age = 43;
manager.company = "Microsoft";
manager.salary=12_000
manager.print();
//Таким образом, получаем цепочку прототипов - example2-p1-manager


/**Вызов методов базового прототипа**/
p1.print=function (){
    this.__proto__.print.call(this);
    // Object.getPrototypeOf(this).print.call(this);  // альтернативный вариант
    console.log(`${this.company}`)
}
p1.print()


/**Проверка наследования прототипов и Object.isPrototypeOf()**/
console.log(example2.isPrototypeOf(p1))
console.log(example2.isPrototypeOf(manager))
console.log(p1.isPrototypeOf(manager))
console.log(Person.isPrototypeOf(p1))

/**Наследование прототипов конструкторов**/
function Example3(name, age){
    this.name=name;
    this.age=age;
    this.sayHello=function (){
        console.log(`Person ${this.name} says "Hello"`)
    }
}
// добавляем прототип в функцию
Example3.prototype.printExample3=function (){
    console.log(`Name: ${this.name}  Age: ${this.age}`)
}
function Employye3(name, age,comp){
    Example3.call(this,name,age);// применяем конструктор Example3
    this.company=comp;
    this.work=function (){
        console.log(`${this.name}  works in ${this.company}`)
    }
}
// наследуем прототип от Example3
Employye3.prototype=Object.create(Example3.prototype)
console.log(Employye3.prototype.__proto__)
// устанавливаем конструктор
Employye3.prototype.constructor=Employye3

const eren=new Employye3("Eren", 19,"Paradise")
console.log(eren)
eren.sayHello()
eren.printExample3()
eren.work()
console.log(Employye3.prototype.__proto__)

/**Переопределение функций**/
function Employee4(name, age,comp){
    Example3.call(this,name,age);
    this.company=comp;
    this.sayHello=function (){
        console.log(`Employee ${this.name} says "Hello"`);
    }
}
Employee4.prototype=Object.create(Example3.prototype)
Employee4.prototype.constructor=Employee4;
Employee4.prototype.printExample3=function (){
    console.log(`Name: ${this.name}  Age: ${this.age}  Company: ${this.company}`);
}
const lera=new Employee4("Lera",23,"Google");
lera.sayHello()
lera.printExample3()


/**Вызов метода родительского прототипа**/
function Person3(name, age){
    this.name=name;
    this.age=age;
}
Person3.prototype.printPerson3=function (){
    console.log(`Name: ${this.name}  Age: ${this.age}`)
}
function Student3(name, age,company){
    Person3.call(this, name, age);
    this.company=company;
}
Student3.prototype=Object.create(Person3.prototype);
Student3.prototype.constructor=Student3;
Student3.prototype.printPerson3=function (){
    Person3.prototype.printPerson3.call(this);// вызываем метод printPerson3 из Person3
    console.log(`Company: ${this.company}`)
}
const yaroslav=new Student3("Yaroslav",27,"KPI");
yaroslav.printPerson3()

/**Проблемы прототипного наследования**/
Person3.prototype.sleep=function (){
    console.log(`${this.name} sleeps`)
}
yaroslav.sleep()
const den=new Person3("Den",23);
den.printPerson3()

/**Инкапсуляция свойств. Геттеры и сеттеры**/
function Person4(name, age){
    this.name=name;
    let _age=age;
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${_age}`);
    };
}
const p2=new Person4("Peter",23);
p2.print()
p2.age=44
p2.print()

/**get/set**/
function Person5(name, age){
    this.name=name;
    let _age=age;
    this.getAge=function (){
        return _age;
    }
    this.setAge=function (age){
        if (age>0&&age<110){
            _age=age;
        }else {
            console.log("Недопустимое значение")
        }
    }
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${_age}`);
    };
}
const p3=new Person5("Parker",23);
console.log(p3.getAge())
p3.setAge(33);
console.log(p3.getAge())

