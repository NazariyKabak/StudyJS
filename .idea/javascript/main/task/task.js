// /**Определить сколько раз каждый элемент встречается в массиве.**/
// const fruits= ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']
// const count={}
// fruits.forEach(f=>{
//     if (!count[f]){
//         count[f]=1
//     }else {
//         count[f]++
//     }
// });
// console.log(count);
//
// /**Задача 2. Создать массив который содержит только уникальные значения исходного массива.**/
// const fruitsUnique=Array.from(new Set(fruits));
// console.log(fruitsUnique);
//
// const unique={}
// fruits.forEach(f=>{
//     unique[f]=true;
// });
// console.log(unique);
// const key=Object.keys(unique);
// console.log(key);
//
// /**Задача 3. Создать функцию, которая группирует студентов по возрасту.**/
// const students = [
//     { name: 'alex', age: 20 },
//     { name: 'mike', age: 24 },
//     { name: 'masha', age: 20 },
//     { name: 'stas', age: 18 },
// ];
// const grouped={
// }
// students.forEach(s=>{
//     if (!grouped[s.age]){
//         grouped[s.age]=[s];
//     }else {
//         grouped[s.age].push(s);
//     }
// })
// console.log(grouped)
//
// /**task4**/
// let num1=3;
// if (num1<0){
//     console.log("отрицательное");
// }else{
//     console.log("нет")
// }
//
// /**task5:Дана строка. Выведите в консоль длину этой строки.**/
// let str1="Bebra"
// console.log(str1.length);
// /**task6:Дана строка. Выведите в консоль последний символ строки.**/
// let lastChar=str1[str1.length-1];
// console.log(lastChar)
// if (num1%2==0){
//     console.log("Even")
// }else {
//     console.log("Non-Even")
// }
// /**Даны два слова. Проверьте, что первые буквы этих слов совпадают.**/
// let str2="Chipik"
// console.log(str1[0]==str2[0])
//
// /**Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.**/
// let str3="хуясь"
// let lastLetter;
// if (str3.endsWith("ь")){
//     lastLetter=str3.charAt(str3.length-2)
// }else {
//     lastLetter=str3.charAt(str3.length-1)
// }
// console.log(lastLetter);
//
// /**Дано число. Выведите в консоль первую цифру этого числа.**/
// let num2=233;
// let firstDigit=String(num2)[0];
// console.log(firstDigit);
//
// let firstDigit1=Math.floor(Math.log10(num2))
// console.log(firstDigit1)
//
// // let firstDigit2=Math.abs(num2)
// // while (num2>=10){
// //     firstDigit2=Math.floor(firstDigit2/10)
// // }
// // console.log(firstDigit2);
// /**Выведите в консоль последнюю цифру этого числа.**/
// let lastDidgit=Math.abs(num2)%10
// console.log(lastDidgit);
//
// /**Выведите в консоль сумму первой и последней цифры этого числа.**/
// let sum=firstDigit1+lastDidgit;
// console.log(sum)
//
// const countNum={
// }
// let lenghtNum= Math.abs(num2).toString().length
// console.log(lenghtNum);
// let num=Math.abs(num2)
// let lenghtNum1=Math.floor(Math.log10(num))+1
// console.log(lenghtNum1);



let nums1 = 48;
let nums2 = 25;

function firstDigitsMatch(num1, num2) {
    let firstDigit1 = Math.abs(num1);
    while (firstDigit1 >= 10) {
        firstDigit1 = Math.floor(firstDigit1 / 10);
    }

    let firstDigit2 = Math.abs(num2);
    while (firstDigit2 >= 10) {
        firstDigit2 = Math.floor(firstDigit2 / 10);
    }

    return firstDigit1 === firstDigit2;
}

let result = firstDigitsMatch(nums1, nums2);
console.log(result);

/**task**/

function task1(a,b){
    return a>b?a:b;
}
console.log(task1(2,4))

/**task**/
function task2(width, height){
    return width<height? height:width;
}
console.log(task2(2,3))
/**task**/
function fizzBuzz(input){
    if (typeof input !=='number'){
        return "Not a number";
    }
    return (input%3===0)&&(input%5===0)?"FizzBuZZ":(input % 3 === 0)? "Fizz":(input % 5 === 0)? "Buzz": input;

}
const output=9;
console.log(fizzBuzz(output));

/**task**/
function checkSpeed(speed){

    const speedLimit=70
    const kmPerPoimt=5;

    if (speed<speedLimit+kmPerPoimt){
        return "Ok";
    } else {
       let points=Math.floor( (speed-speedLimit)/kmPerPoimt)
        if (points>=12){
            return "License suspended"
        }else {
            return points
        }
    }


}
console.log(checkSpeed(74));

/**task**/

function showNumber(num){
    for (let i = 0; i <=num; i++){
        console.log(i%2==0?i+" Even":i+" Odd")
    }
}
showNumber(10)

/**task**/
function countTrutgy(array){
    let count=0;
    // for (let i=0; i<array.length; i++){
    //     if (typeof(array[i])==='number'){
    //         count++;
    //     }
    //     else{
    //         return count
    //     }
    // }
    // return count;
    for (let value of array) {
        if (value){
            count++
        }
    }
    return count;
}
let arr=[-2,0,1,2,3,'',null, undefined]
console.log(countTrutgy(arr))

/**task**/

const movie={
    title:"a",
    releaseYear:2022,
    rating:8.2,
    director:"Nazar"
}

function showProperties(obj){
    for (let prop in obj){
        if (typeof obj[prop]!=='number'){
            console.log(prop,obj[prop]);
        }
    }
}
showProperties(movie);

/****/
function sum1(num){
    let sum=0;
    for (let i=0; i<=num; i++){
        if (i%3===0||i%5===0){
            sum +=i;
        }
    }
    return sum;
}
console.log(sum1(10))

/**task**/
function calcGrade(mark){
    let sum=0;
    for (let markElement of mark)
        sum+=markElement;
        let avg=sum/mark.length;
        if (avg<60)
            return 'F'

        if(avg>=60&&avg<70){
            return 'D'
        }
        if(avg>=70 && avg<80){
            return 'C'
        }
        if (avg>=80&&avg<90){
            return 'B'
        }
        return 'A'

}
let arr2=[100,100,100]
console.log(calcGrade(arr2));

/**task**/
function showStars(rows){
    for (let i=1; i<=rows; i++){
        let pattern=''
        for (let j=0; j<i; j++)
            pattern+='*'

        console.log(pattern)
    }
}
showStars(3)

/**task**/

function showPRimes(limits){
    for (let i=2;i<=limits;i++){
        let isPrime=true;
        for (let j=2; j<i;j++){
            if (i%j===0){
                isPrime=false;
                break;
            }
        }
        if (isPrime){
            console.log(i);
        }
    }
}
showPRimes(10)