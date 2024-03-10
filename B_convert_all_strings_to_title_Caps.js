// anonymous function
var A = ["hello","world","bharat","india","off"]

var uppercase = function (b){

    return b.charAt(0).toUpperCase() + b.slice(1);
}
var uppercaseA=[];
for(i=0;i<A.length;i++){
     uppercaseA.push(uppercase(A[i]));

}

console.log(uppercaseA);


// IIFE

let B = ["powder","coffee","arrayay","newdelhi","mumbai"]
let iife = (function(c){


     let supercase =[];
     for(d=0;d<c.length;d++){
        supercase.push(c[d].charAt(0).toUpperCase() + c[d].slice(1));
           
       }
       console.log(supercase);
}

)(B);
   





