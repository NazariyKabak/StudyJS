const arr=["Nazariy", "Bob", "Tom"];
// console.log(arr);
// console.log(arr[1]);
// const p=arr[2];
// console.log(p);
// arr[0]="Nazar";
// console.log(arr);
// arr[3]="Max";
// console.log(arr);
// const arr2=["Nazariy", "Bob", "Tom",1,true,3.14];
// console.log(arr2);
// const arr3=[
//     ["Nazariy", "Bob", "Tom"],
//     [1,2,3]
// ];
// console.log(arr3);
//
// console.log(arr3[1][0]);
//
// let num=59;
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
const person={name:"Nazar", age:21};
for (prop in person) {
    console.log(prop,person[prop]);
}
const text = "Hello!";
for ( char of text) {
    console.log(char)
}
for (const pers of arr) {
    console.log(pers);
}

var bebra =10;
console.log(bebra);
var bebra=11;
console.log(bebra)


const nums=[3,4];
console.log(nums)
//додавання в кінець
nums.push(2,5,2)
console.log(nums)
//додавання на початок
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
  return   course.name==="a";
})
console.log(course)
const course2=courses.find( course=>course.name==="a");
console.log(course)

//delete element
nums.pop()
console.log(nums)

nums.shift()
console.log(nums)

nums.splice(4,1)
console.log(nums)

nums.splice(0,nums.length)
console.log(nums)

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

const first2=[1,2,3];
const second2=[4,5,6];
const combd2=[...first2,...second2];
//const combd2=[...first2,"a",...second2]; можна об'єднувати масиви та додати в них елементи
console.log(combd2)
const copy=[...combd2]
console.log(copy)
copy.forEach(function (num){
    console.log(num)
})
copy.forEach(num=>{
    console.log(num)
})

//joining arr
console.log(first2.join('!'))

const message="This is my 1929 message";
const parts=message.split(" ")
console.log(parts)
const comb3=parts.join("-")
console.log(comb3)

//sort
const nums2=[2,5,3,-10,1]
nums2.reverse()
console.log(nums2)
nums2.sort()
console.log(nums2)

const corses2=[
    {id:1,name:"Node.js"},
    {id:2,name:"JavaScript"}
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

/**task1**/

function arrayFromRang(min,max){
    const arr = [];
    for (let i=min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}
const arr1=arrayFromRang(1,5);
console.log(arr1)

/**task2**/

function includes(arr, searchElem){
    for (let arrElement of arr) {
        if (searchElem === arrElement){
            return true;
        }
    }
    return false;
}
const nums3=[4,58,9,43,9];
console.log(includes(nums3,9));

function expect(arr, excludet){
    const output=[];
    for (let arrElement of arr) {
        if (!excludet.includes(arrElement)){
            output.push(arrElement)
        }
    }
    return output;
}
const output=expect(nums3,[58]);
console.log(output)

/**task4**/
function move(arr, index, offset){
    const output=[...arr];
    const element=output.splice(index,1)[0];
    output.splice(index+offset,0,element);
    return output;
}
console.log(move(nums3,1,2));

/**task5**/

function countOccurences(arr,searchElement){
    // let count=0;
    // for (let element of arr){
    //     if (element===searchElement){
    //         count++;
    //     }
    // }
    // return count;
   return  arr.reduce((accumulator,currentValue)=>{
       const occurenc=(searchElement===currentValue)?1:0;
       return accumulator+occurenc;
    },0)
}
console.log(countOccurences(nums3,9))

/**task6**/
function getMax(arr){
    // let max=arr[0];
    // for (let i=1;i<=arr.length;i++){
    //     // if (arr[i]>max){
    //     //     max=arr[i];
    //     // }
    //     (arr[i]>max)?max=arr[i]:max;
    // }
    // return max;
    return arr.reduce((a,b)=>(a>b)?a:b);
}
console.log(getMax(nums3))

/**task7**/
const movies=[
    {title:"a", year:2018,rating:4.5},
    {title:"b", year:2018,rating:7.5},
    {title:"c", year:2018,rating:6},
    {title:"d", year:2018,rating:8.5},
];

function searchMoive(arr){
    for (let arrElement of arr) {

    }
}
const filtM=movies
    .filter(m =>m.year===2018 && m.rating>5)
    .sort(function(a,b){
        if (a.rating<b.rating){
            return 1;
        }else if(a.rating>b.rating){
            return -1;
        }
        return 0;
    })
    .map(m=>m.title)
console.log(filtM)
