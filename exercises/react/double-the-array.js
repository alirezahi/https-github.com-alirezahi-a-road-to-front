var myArr = [1,2,3];

function double (result, item){
    console.log({result});
    return [...result, item, item];
};

myArr.reduce(double, []);