// 
// // {
// // // Normal function definition
// // // function to get the value of the input field
// // function getValue(x) {
// //   console.log(x);
// // }
// // 
// // getValue("hello");
// // 
// // }
// 
// // {// Anonymous function
// // 
// // let sum = function (a, b) {
// //   return a + b;
// // };
// // 
// // console.log(sum(2, 3));
// // }
// // {
// // // Arrow function
// // 
// // let getValue=(x) {
// //   console.log(x);
// // }   
// // 
// // getValue("hello");
// // }
// 
// // Immediately Invoked Function Expression (IIFE)
// // 
// // ((x) =>{
// //   console.log(x);
// // })("hello");
// 
// 
// // Spread & rest Operartor
// // 
// // const print= (...x) =>
// // {
// //   console.log(x);
// // }
// // 
// // 
// // print(1,2,3,4,5,6,7,8,9,10);
// // 
// // let values=['nandha',23,100000];
// // // 
// // // let name=values[0]
// // // let age=values[1]
// // // let salary=values[2]
// // 
// // let [name,...details]=values;
// // 
// // console.log(name);
// // 
// // console.log(details);
// 
// // let person1={
// //     name:"nandha",
// //     age:23,
// //     salary:100000,
// //     gender:"male",
// //     address:"chennai",
// //     city:"chennai",
// //     state:"tamilnadu",
// //     country:"india",
// //     email:"nandha@gmail.com",
// //     phone:"0987654321",
// //     mobile:"0987654321",
// // 
// // }
// // 
// // // person1.address="Namakkal";
// // // person1.city="Vellore";
// // // person1.state="Tamilnadu";
// // 
// // 
// // // let {name,city,state,country,email,phone,mobile}=person1;
// // 
// // let person2={
// //     
// //     ...person1,
// //     name:"Prakash",
// //     address:"Trichy",
// //     city:"Trichy",
// //     email:"prakash@gmail.com",
// //     
// // }
// // 
// // 
// // console.log(person2);
// 
// //Short hand object property
// 
// let name="nandha";
// let age=23;
// let salary=100000;
// let gender="male";
// let address="chennai";
// let city="chennai";
// let state="tamilnadu";
// let country="india";
// let email="nandha@gmail.com";
// let phone="0987654321";
// let mobile="0987654321";
// 
// let person1={
//     name,
//     age,
//     salary,
//     gender,
//     address,
//     city,
//     state,
//     country,
//     email,
//     phone,
//     mobile,
// 
// }
// 
// // 
// // console.log(person1);
// 
// // Template literals
// 
// // 
// // let name="nandha";
// // let age=23;
// // 
// // console.log(`Hello ${name} your age is ${age+2}`);
// 
// 
// 
// 
// // Map
// // 
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// // 
// // 
// // let result=numbers.map((x,index,arr)=>{
// //     console.log(arr);
// //     return x*2;
// // })
// // 
// // console.log(result);
// 
// 
// // Filter
const arr=[
    {
        name:"nandha",
        age:19,
        salary:100000,
        gender:"male",
        address:"chennai",
        city:"chennai",
        state:"tamilnadu",
        country:"india",
        email:"nandha@gmail.com",
        phone:"0987654321",
        mobile:"0987654321",
    },
    {
        name:"prakash",
        age:25,        
        salary:100000,
        gender:"male",
        address:"chennai",
        city:"chennai",
        state:"tamilnadu",
        country:"india",
        email:"prakash@gmail.com",
        phone:"0987654321",
        mobile:"0987654321",
    },
    {
        name:"prakash",
        age:30,        
        salary:100000,
        gender:"male",
        address:"chennai",
        city:"chennai",
        state:"tamilnadu",
        country:"india",
        email:"prakash@gmail.com",
        phone:"0987654321",
        mobile:"0987654321",
    }
]

// console.table(arr);

// 
// 
// let result=arr.filter((item)=>{
//     return item.age < 20;
// })
// 
// console.log(result);
// 
// 
const numbers=[1,2,3,10];
// 
// const result=numbers.every((x)=>{
//     return x<4;
// })
// 
// console.log(result);


const result=numbers.reduce((preVal,curValue)=>preVal*curValue)

console.log(result);


