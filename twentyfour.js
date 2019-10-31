var car = {
    brand:'BMW',
    color:'Red',
    price: 878888
}

var out = '';
var j;

for(j in car){
    out += car[j]+" "
}


var coding = ['JavaScript','React','Node']

var x;
for (x of coding){
    console.log(x)
}