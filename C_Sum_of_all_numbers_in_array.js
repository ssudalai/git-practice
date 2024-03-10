// anonymous function

let B = [1,2,3,4,5,6,7,8,9,10];

let fn = function (g){
   
let M = 0;
for (let z=0;z<g.length;z++){

   // M= M+g[z]
    if (typeof g[z]==='number'){

        M= M+g[z]
    }else if (typeof g[z] === 'string'){
       M ="not a number"
    }
    else if (typeof g[z]==='boolean'){
        M = "not a number1"
    }
}
return M;
}

console.log(fn(B));



// IIFE FUnction
let numbers = [1,2,3]
let iife = (function(){
    return function(hq){
        let sum = 0;
     for (let mi =0; mi<=hq.length; mi++){
        if (typeof hq[mi]==='number'){
             sum += hq[mi]
        }
        else if(typeof hq[mi] === 'string'){
            return "not a number"
        }
        else if(typeof hq[mi] === 'boolean'){
            return "not a number"
        }
    }
    return sum;} 
})()
console.log(iife(numbers))


