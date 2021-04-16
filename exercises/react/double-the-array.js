var myArr = [1,2,3];


// =========
// regular function solution
function double (result, item){
    console.log({result});
    return [...result, item, item];
};


// =========
// arrow function solution
var double = (result, item) => [...result ,item , item];


// =========

myArr.reduce(double, []);