// Ee5
var
// Es6
let 
const


var =  we can decalre and reassign
let = we cannot redecalre but can reassign
const = we cannot redecalre as well as cannot reassign

var a = [2,5,6,8,3]

function mul(abc){
    return abc*3
}
a.map(mul)
a.map((a) => {console.log(a)})

var a = [2,5,6,8,3]

function isEven(a){
    if(a%2==0){
        return a
    }
}

a.filter(isEven)


var marks = [0,1,2,3,4]
marks.filter((a) =>  { return a*1})
marks.map((a) =>  { return a*1})


var b = [1,2,3,4]
console.log(...b)
1 2 3 4
var c = ["a","b","c",...b,"d"]

Math.pow(2,2)
4
2**2
4