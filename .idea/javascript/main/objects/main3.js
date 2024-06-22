

/**factory functions**/
function createCircle(radius){

    return{
        radius,
        draw(){
            console.log("Draw")
        }
    };
}
const circle1=createCircle(1)
console.log(circle1);
const circle2=createCircle(2)
console.log(circle2)

/**constructor functions**/
function Circle(radius){
    this.radius=radius;
    this.draw=function (){
        console.log("draw")
    }
}

const circle3= new Circle(3);
console.log(circle3);

/**dynamic Nature of Objects**/
const circle={
    radius:10
}
circle.color='red'
circle.draw=function (){}

console.log(circle);
delete circle.color;
console.log(circle)
// delete circle.draw;
// console.log(circle)

/**constructor property**/
const another=new Circle(1)
console.log(circle.constructor)
console.log(another.constructor)

let x={}
new String()
new Boolean()
new Number()

/**Functions are Objects**/
console.log(Circle.constructor)

const Circle1=new Function('radius',`
    this.radius=radius;
this.draw=function (){
    console.log("draw")
}`
)
const circle4=new Circle1(2);
console.log(circle4)
Circle.call({},1)
Circle.apply({},[1,2,3])

/**Value vs Reference Types**/
let x1=10;
let y1=x1;
console.log(x1)
console.log(y1)
x1=20
console.log(x1)
console.log(y1)

let x2={value:10}
let y2=x2;
console.log(x2)
console.log(y2)
x2.value=20;
console.log(x2)
console.log(y2)

let number1=10;
function increase(number){
    number++;
}
increase(number1)
console.log(number1)

let number2={value: 10}
function increase2(number){
    number.value++;
}
increase2(number2)
console.log(number2)
//Примітиви коміюються за значенням, об'єкти за посиланням

/**enumerating properties of an Objects**/
for (let key in circle){
    console.log(key,circle[key])
}
for (let key of Object.keys(circle)){
    console.log(key)
}
for (let key of Object.entries(circle)){
    console.log(key)
}
if ('radius' in circle)
    console.log('yes')

/**Cloaning an object**/
const cloneCircle={}
for (let key in circle){
    cloneCircle[key]=circle[key]
}
console.log(cloneCircle)
const cloneCircle2=Object.assign({
    color: 'red'
},circle)
console.log(cloneCircle2)
const cloneCircle3={...circle}
console.log(cloneCircle3)

/**Math**/
console.log(Math.random())

/**String**/
const message='This is my first message'
console.log(typeof message)
console.log(message.length)
console.log(message[2])
console.log(message.includes('is'))
console.log(message.includes('second'))
console.log(message.startsWith('This'))
console.log(message.startsWith('this'))
console.log(message.indexOf('my'))
console.log(message.replace('my', 'Nazar'))
console.log(message.split(' '))
const message2=new String('hi')
console.log(typeof message2)

/**Date**/
const date=new Date();
console.log(date.toTimeString())

/**task**/
const address={
    street:'Lagunova',
    city: 'Brovary',
    zipCode: 727111,

}
function showAddress(address){
    for (let key in address){
        console.log(key,address[key])
    }
}
console.log(showAddress(address))

/**task**/

function Address2(street,city,zipCode){
    this.street=street
    this.city=city
    this.zipCode=zipCode

}
const home2=new Address2('A','Brovary',21256)
const home3=new Address2('A','Brovary',21256)
console.log(home2)

function createHome(street,city,zipCode){
    return {street,city,zipCode}
}
const home4 = createHome('a','b',12245)
console.log(home4)

/**task**/
function areEqual(address1,address2){
   return address1.street===address2.street&&
       address1.city===address2.city &&
       address1.zipCode===address2.zipCode
}

function areSame(address1,address2){
    return address1===address2
}
console.log(areEqual(home2,home3))

const Blog={
    title:'a',
    body:'b',
    author:'c',
    views:22,
    comments:[
        {author:'a', body:'b'},
        {author:'c', body:'d'},],
    isLive: true
}
console.log(Blog)

/**task**/

function createBlog(title, body, author, views, comments,isLive){
    this.title=title
    this.body=body
    this.author=author
    this.views=views
    this.comments=comments
    this.isLive=isLive
}
const blog2=new createBlog('a','b','c',21,[{author:'a', body:'b'},{author:'c', body:'d'}],true);
console.log(blog2)

/**task**/

const price=[
    {label:'$', tooltip:'Inexpensive',minPerPerson:0,maxPerPerson:10},
    {label:'$$', tooltip:'Moderate',minPerPerson:11,maxPerPerson:20},
    {label:'$$$', tooltip:'Expensive',minPerPerson:21,maxPerPerson:50}
]
let restouran=[
    {avgPerPerson:5}
]