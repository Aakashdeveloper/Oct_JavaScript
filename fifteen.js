a = 10
var a;

add(a)

function add(a){
    return a*a
}

/////////
var a;
a = 10
function add(a){
    return a*a
}
add(a)



// Global
var a = 10
function test(){
    //local
    var b = 10
    console.log(b)
    return "hii"+a
}
console.log("outside "+b)

if(a= 10){
    var z ="hi"
}

for(i=0;i<10;i++){
    let w ="hi" 
}