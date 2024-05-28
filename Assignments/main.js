/*
console.log("Hello Raghav");
let a = 10;
a = 11;
console.log(a);

let name = "Raghav";
let age = 25;
let isMarried = "not" ;
console.log("This person name is "+ name +" and his age is "+ age +" and he is "+ isMarried +" married. ");

//object
const user1 ={
    firstname: "Raghvendra",
    gender: "male"
}
console.log(user1["gender"]); */

/*function sum(a, b){
    const sumValue = a + b;
    return sumValue ;
}
const value = sum(1,2)
console.log(value);*/

// 1 way of writing function
function calculateArthmetic(a,b,type){

    if(type=="sum"){
         return a+b;
    }

    if(type=="minus"){
        return a-b;
    }
}

const value = calculateArthmetic(3,2,"minus");
console.log(value);