// anonymous function
let CD =["hello","world","this","is","sudalai","is","good","boy"]


let fn = function (b){

    return b.charAt(0).toUpperCase() + b.slice(1);
}
let UPcse =[]
for (let m=0; m<CD.length;m++){
      UPcse.push(fn(CD[m]));

}
console.log(UPcse)






// IIFE

let B = ["powder","coffee","arrayay","newdelhi","mumbai"]
let iife = (function(){

    return function(c) {
        return c.charAt(0).toUpperCase() + c.slice(1);
    }}

)();

let uppcase = [];
for (let g=0; g<B.length; g++){
    uppcase.push(iife(B[g]));
}
   console.log(uppcase)





