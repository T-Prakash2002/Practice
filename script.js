// {
//     const person1 ={
//     name:'jane',
//     age:23
// }
// 
// const person2=Object.create(person1)
// console.log(Object.getPrototypeOf(person2))//{ name: 'jane', age: 23 }
// 
// console.log(person2.age);//23
// 
// }
// 

// {
// console.log(Boolean([]));//true
// console.log(Boolean({}));//true
// console.log(Boolean(""));//false
// console.log(Boolean(0));//false
// }
// 
// const profile={
//     name:"john",
//     getName:()=>{
//         console.log(this.name);
//     }
// }
// 
// profile.getName();
// 
// const a=[1,2,3,4]
// 
// const b=[...a]
// 
// b.push(5)
// 
// console.log(a);//[ 1, 2, 3, 4 ]
// console.log(b);//[ 1, 2, 3, 4 ,5]
// 
// 
// const x=function(){}
// const y=class{}
// 
// console.log(typeof x);//function
// console.log(typeof y);//function
// 
// async function check(){
//     await Promise.resolve(console.log(1))
//     console.log(2)
//     await Promise.resolve(console.log(6))
// }
// 
// console.log(3);
// check()
// console.log(4);
// check()
// console.log(8)
// 
// const users=[{
//     brand:"samsung",
//     model:"galaxy m33"
// }]
// 
// console.table(users)
// 
// 
// var a;
// console.log(a);
// a=5//undefined


