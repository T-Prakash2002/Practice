// 
// function sayName(batch){
//     return `Hey ${this.name} are you starting ${batch}?`
// }
// 
// var obj={
//     name:"CALL"
// }
// var obj2={
//     name:"APPLY"
// }
// var obj3={
//     name:"BIND"
// }
// // CALL 
// console.log(sayName.call(obj,'cf'))
// 
// //APPLY 
// console.log(sayName.apply(obj2,['cf2']))
// 
// //BIND
// const sayFunc=sayName.bind(obj3,"cf3")
// 
// console.log(sayFunc())
// 
// const market=[
//     {
//         shop_name:"Shop1",
//         special:"Mango"
//     },{
//         shop_name:"Shop2",
//         special:"Apple"
//     }
// ]
// 
// function printMarkets(index){
//     this.show=function(){
//         console.log(`${this.shop_name} : ${this.special}`)
//     }
//     this.show()
// }
// for(let i=0;i<market.length;i++){
//     printMarkets.call(
//         market[i]
//     )
// }
// const arr=[1,2,3]
// const ele=[4,5,6]
// 
// arr.push.apply(arr,ele)
// 
// console.log(arr)
// 
// function add(num){
//     num+5
// }
// function sub(num){
//     num-3
// }
// function mul(num){
//     num*3
// }
// 
// const iterator=calculate(add,sub,mul)
// console.log(iterator(7));
// 
// function calculate(...funcs){
//     return function (firstNum){
//         let res=firstNum
//         for(let i=funcs.length-1;i>=0;i--){
//             res=funcs[i](res)
//         }
//         return res
//     }
// }
// 
// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this);
//   }
// }
//    
// obj.getName();


const arr=[{},'2','Hello']

delete arr[2]

console.log(arr) //[ {}, '2', <1 empty item> ]

async function getlion(){
    return "O"
}

const lion = getlion()

console.log(lion);

console.log(lion == "O");

class lan {
    static lib = 'vue'
    lib = 'React'
    log() {
        console.log(this.lib);
    }

    static log() {
        console.log(this.lib);

    }
}

const obj = new lan();
obj.log();

lan.log();



