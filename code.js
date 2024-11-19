const { sum } = require("jsverify");

function divideAndConquerSum(a) {
    return sumSplit3(a);
}

function sumSplit3(a){   
    var first = 0;
    if(a.length <= 3){ //if the total length cannot be split further, sum
        var result = 0;
        for(var i = 0; i < a.length; i++) result += a[i]; // n complexity
        return result;
    }
    //split the array up using endpoints
    var firstend = Math.floor(a.length / 3);
    var secondend = Math.floor(a.length * (2/3));
    return sumSplit3(a.slice(first,firstend)) + sumSplit3(a.slice(firstend,secondend)) + sumSplit3(a.slice(secondend,a.length))
}

/*
var test = [1,1,2,1,1,1,3,1,1];
var output = divideAndConquerSum(test);

console.log(output);
*/