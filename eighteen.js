//Literal Notation
var country = {
    name:'India',
    capital:'Delhi',
    population:64496795479
}
undefined
typeof(country)
"object"
country
{name: "India", capital: "Delhi", population: 64496795479}capital: "Delhi"name: "India"population: 64496795479__proto__: Object
country.name
"India"
country.capital
"Delhi"
country.population
64496795479
country['name']
"India"
country['capital']
"Delhi"
country.language="Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 64496795479, language: "Hindi"}
delete country.population
true
country
{name: "India", capital: "Delhi", language: "Hindi"}


//constructor
var car = new Object()
typeof(car)
"object"
car.color="red"
"red"
car.brand="BMW"
"BMW"

var welcome = {
    firstName: 'bob',
    lastname: 'elven',
    greet: function(){
        return "hi bob welcome to oops"
    }
}



var calc = {
    sum: function(a,b){
        return a+b
    },
    sub: function(a,b){
        return a-b
    }
}


var city = [
    {name:'delhi',country:'India'},
    {name:'Helsinki', country:'Finland'},
    {name:'Paris', country:'France'}
]