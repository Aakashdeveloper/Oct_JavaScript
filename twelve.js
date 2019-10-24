function add(a,b){
    return a+b
}

add(1,2)

function isEven(userInput){
    var result;
    if(userInput%2==0){
        result = "number is even"
    } else {
        result = "number is odd"
    }

    return result
}

isEven(10)
"number is even"
isEven(9)
"number is odd"

var isEven = function (userInput){
    var result;
    if(userInput%2==0){
        result = "number is even"
    } else {
        result = "number is odd"
    }

    return result
}

// Es6
var isEven = (userInput) => {
    var result;
    if(userInput%2==0){
        result = "number is even"
    } else {
        result = "number is odd"
    }

    return result
}

