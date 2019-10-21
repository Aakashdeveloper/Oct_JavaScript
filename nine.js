for
for/in
for/of 
while
do while

for(i=0; i<10;i++){
    console.log(i)
}

var a = "London"

for(i=0;i<a.length;i++){
    console.log(a[i])
}


var city = ["delhi", "london", "amsterdam"]

for(i=0;i<city.length;i++){
    var out = `Welcome to ${city[i]}`
    console.log(out) 
}

Welcome to delhi
Welcome to london
Welcome to amsterdam

var city = [["delhi", "mumbai", "pune"], ["Haug","Amsterdam","Rottadam"],
             ["Zurich","Davos","Zenser"]]

for(i=0;i<city.length;i++){
    for(j=0;j<city[i].length;j++){
        if(i==0){
            console.log(`City of Inida is ${city[i][j]}`)
        }else if(i==1){
            console.log(`City of Netherlands is ${city[i][j]}`)
        }else{
            console.log(`City of Switzerland is ${city[i][j]}`)
        }
        
    }
}

var i = 0 ;
while(i < 10){
    console.log(i);
    i++
}

var city = ["delhi", "london", "amsterdam"]
var i =0;

while(city[i]){
    console.log(city[i])
    i++
}

var a = 0
var b = 0
while(a <3 ){
    a++
    b += a
}

a = 1
b = 1

a = 2
b = 3

a =3
b = 6

a=4
b=6

//////////////////Do While///////////
var i =0
do {
    console.log(i);
    i++;
}
while(i<10)

var city = ["delhi", "london", "amsterdam"]
var i =0;
do{
    console.log(city[i])
    i++;
}
while(city[i])

