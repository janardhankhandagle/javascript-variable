// variable in js
/*
var 
let
const
*/
//automitacally variable
 x=7;
 y=9;
 z=x+y;
 console.log("output of automatically variable",z) 


 
 // var keyword 
 var a =10;
 var b=50;
 {
    var a=20;
    console.log(a)
 }
console.log(a+b)


// let keyword 
let p=24;
if(p>6){
    let q=34;
    console.log(q)

}
//console.log(q) let having block of scope ,when we try to access outside of 
//block on that time they show reference error
//console.log(p)


// const keyword 
const j=45
console.log(j)
// const  j='jk'; we cant reassigned const with same variable name
//console.log(j)
const m=9;
function ex(){
    const n=10;
    console.log(n)
}
 console.log(n)   // const having block of scope ,when we try to access outside of 
//block on that time they show reference error