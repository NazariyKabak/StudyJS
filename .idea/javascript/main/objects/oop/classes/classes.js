/**Определение класса**/
class Person {
    name;
    age;
}
const Person2=class {} //анонимный класс
const user=class Person3{}// неанонимный класс
const tom=new Person();
const bob=new Person2();
const sam=new user();

tom.name="Tom";
tom.age=23;
console.log(tom)

class Person4{
    name=undefined;
    age=18;
}
const max=new Person4();
console.log(max)
max.name="Max";
console.log(max)

/**Поведение класса и его методы**/
class Person5{
    name;
    age;
    move(place){
        console.log(`Go to ${place}`);
    }
    eat(){
        console.log("eat apples");
    }
}

const jake=new Person5();
jake.name="Jake";
jake.age=65;
jake.move("Hospital");
jake.eat();

/**Обращение к полям и методам внутри класса. Слово this**/
class Person6{
    name;
    age;
    display(){
        console.log(this.name,this.age);
    }
}
const nazar=new Person6();
nazar.name="Nazar";
nazar.age=21;
nazar.display();

/**Определение конструктора**/
class Person7{
    // name;
    // age; //не обов'язково, якщо є конструктор
    constructor(pName,pAge) {
        this.name=pName;
        this.age=pAge;
    }
    print(){
        console.log(this.name,this.age);
    }
}
const p7=new Person7("Peter",23);
p7.print();

/**Выражения классов**/
const Person8=class {
    constructor(pName,pAge){
        this.name=pName;
        this.age=pAge;
    }
    print(){
        console.log(this.name,this.age)
    }
}
const p8=new Person8("Jery",33);
p8.print();

/**Получение прототипа**/
console.log(Person7.prototype);
console.log(p7.__proto__);
console.log(Object.getPrototypeOf(p7));
console.log(p7.constructor);

/**Приватные поля**/
class Person9{
    #name;
    #age;
    constructor(pName, pAge) {
        this.#name=pName;
        this.#age=pAge;
    }
    print(){
        console.log(this.#name,this.#age)
    }
}
const lera=new Person9("Lera",23);
lera.print();
// lera.#name="Valeria";//! Ошибка - нельзя обратиться к приватному полю
// console.log(lera.#name)! Ошибка - нельзя обратиться к приватному полю

class Person10 {
    #name;
    #age=1;
    constructor(name, age) {
        this.#name=name;
        this.setAge(age)
    }
    setAge(age){
        if (age>0&&age<110){
            this.#age=age;
        }
    }
    print(){
        console.log(this.#name,this.#age)
    }
}

const slavik=new Person10("Slavic", 21);
slavik.print();
slavik.setAge(22)
slavik.print()
const den=new Person10("Denne",111);
den.print()

/**Приватные методы**/
class Person11{
    #name = "undefined";
    #age = 1;
    constructor(name,age){
        this.#name=this.#checkName(name);
        this.setAge(age);
    }
    #checkName(name){
        if (name!="admin"){
            return name;
        }
    }
    setAge(age){
        if (age>0&&age<110){
            this.#age=age;
        }
    }
    print(){
        console.log(this.#name,this.#age)
    }
}
const p11=new Person11("Bober", 12);
p11.print()
const bib=new Person11("admin", 13);
bib.print();
//let personName = bob.#checkName("admin"); // ! Ошибка - нельзя обратится к приватному методу

/**Свойства и методы доступа**/
class Person12{
    #name;
    #age=1;
    setAge(age){
        if (age>0&&age<110){
            this.#age=age;
        }
    }
    getAge(){
        return this.#age
    }
    getName(){
        return this.#name;
    }
    constructor(name,age){
        this.#name=name;
        this.setAge(age);
    }
}
const p12=new Person12("Yaroslav",27);
console.log(p12.getAge(), p12.getName())

class Person13{
    #name;
    #ageValue=1;
    constructor(name,age){
        this.#name=name;
        this.#ageValue=age;
    }
    set age(value){
        console.log(`${value}`);
        if (value>0&&value<110){
            this.#ageValue=value;
        }
    }
    get age(){
        return this.#ageValue;
    }
}

const p13=new Person13("Chel", 11);
console.log(p13.age)
p13.age=22;
console.log(p13.age);

/**Свойства, доступные только для чтения**/
class Person14{
    #age=1;
    #name;
    constructor(name,age) {
        this.#name=name;
        this.age=age;
    }
    get name(){
        return this.#name;
    }
    set age(value){
        if (value>0&&value<110){
            this.#age=value;
        }
    }
    get age(){
        return this.#age;
    }

}
const p14=new Person14("Slavic", 14);
console.log(p14.name)


/**Свойства только для установки**/
class Person15{
    #id;
    constructor(name,age,id){
        this.#id=id;
        this.name=name;
        this.age=age;

    }
    set id(value){
        this.#id=value;
    }
    print(){
        console.log(this.name, this.age, this.#id)
    }
}
const p15=new Person15("Vadim", 14,1);
p15.print()
p15.id=3;
p15.print()

/**Свойства без обращения к полям**/
class Person16{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value){
        [this.firstName, this.lastName]=value.split(" ");
    }
}
const p16=new Person16("Nazariy", "Kabak");
console.log(p16.fullName)
p16.fullName="Vova Kabak";
console.log(p16.firstName)


/**Статические поля**/
class Person17{
    static retirementAge=65;
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
    print(){
        console.log(this.name, this.age)
    }
}
console.log(Person17.retirementAge);
Person17.retirementAge = 62;
console.log(Person17.retirementAge);
//При этом мы НЕ можем в нестатических методах и конструкторе класса обращаться к этим полям через this, наподобие следующего:
// print(){
//     console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
//     console.log(`Пенсионный возраст: ${this.retirementAge}`);   // к статическому полю нельзя обратиться через this
// }
/**Правильнке звернення в методі**/
// print(){
//     console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
//     console.log(`Пенсионный возраст: ${Person.retirementAge}`);
// }

/**Статические методы**/
class Person18{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(this.name, this.age)
    }
    static printClassInfo(){
        console.log("Класс Person представляет человека")
    }
}
Person18.printClassInfo();
//Поскольку статический метод относится классу в целом, а не к объекту,
// то мы НЕ можем обращаться в нем к нестатическим полям/свойствам и методам объекта, наподобие следующего:

class Person19{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(this.name, this.age)
    }
    static printAge(){
        console.log(this.age) // для статического метода this.age не существует
    }
}
Person19.printAge()

class Person20{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static print(person){
        console.log(`Имя: ${person.name}  Возраст: ${person.age}`);
    }
}
const p20=new Person20("Luda", 44);
Person20.print(p20)

class Person21{
    static retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
    static calcRestAges(person){
        if (this.retirementAge>person.age){
            const restAges=this.retirementAge-person.age;
            console.log(`До пенсии осталось ${restAges} лет`)
        }else{
            console.log("Вы уже на пенсии")
        }
    }
}
const p21=new Person21("Harry", 34);
p21.print()
Person21.calcRestAges(p21)

/**Приватные статические поля и методы**/
class Person22{
    static #retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
    static calcRestAges(person){
        if (this.#retirementAge>person.age){
            const restAges=this.#retirementAge-person.age;
            console.log(`До пенсии осталось ${restAges} лет`)
        }else {
            console.log("Вы уже на пенсии")
        }
    }
}
// console.log(Person.#retirementAge);  // ! Ошибка: поле retirementAge -приватное
const p22=new Person22("Jane", 28);
Person22.calcRestAges(p22)

class Person23{


    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person23{


    company;

    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
const p23= new Person23("Olya", 44);
const empl23= new Employee("Tolya", 45, "Google");
empl23.print()

/**Определение конструктора в классе-наследнике и ключевое слово super.**/
class Employee23 extends Person23{
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}

/**Переопределение методов базового класса.**/
class Person24{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee24 extends Person24{

    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
    print(){
        super.print()
        console.log(`Company: ${this.company}`);
    }
}

/**Наследование и приватные поля и методы**/
class Person25{
    #name
    constructor(name, age){
        this.#name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.age}`);
    }
}
class Employee25 extends Person25{

    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
    print(){
        super.print()
        console.log(`Company: ${this.company}`);
    }
    // work(){
    //     console.log(`${this.#name} works in ${this.company}`);  // ! Ошибка - поле #name недоступно из Employee
    // }
}
const p25=new Employee25("Nazar",43,"Apple");
p25.print()
//При необходимости в базовом классе можно определить геттеры и сеттеры, которые обращаются к приватным полям.
// А в классе-наследники через эти геттеры и сеттеры обращаться к приватным полям базового класса.



