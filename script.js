
function sayName(batch){
    return `Hey ${this.name} are you starting ${batch}?`
}

var obj={
    name:"CALL"
}
var obj2={
    name:"APPLY"
}
var obj3={
    name:"BIND"
}
// CALL 
console.log(sayName.call(obj,'cf'))

//APPLY 
console.log(sayName.apply(obj2,['cf2']))

//BIND
const sayFunc=sayName.bind(obj3,"cf3")

console.log(sayFunc())