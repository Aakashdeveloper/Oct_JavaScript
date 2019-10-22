import { access } from "fs"

var a = ["a","b","c"]
var b = [1,2,3,4]
var c =[true,false,true]

var d = [1,2,"d",3,"dc",true,3,"dc"]
undefined
typeof(d)
"object"
d.length
8
d[0]
1
d[-1]
undefined
d[2]
"d"
d[d.length-1]
"dc"
Push always add at the end of Array
Pop always take out form the end of Array
unshift always add first value to Array
shift always take out first value from array

var city=["London","NewYork","Delhi"]
undefined
city.push('Helsinki')
4
city
(4) ["London", "NewYork", "Delhi", "Helsinki"]
city.pop()
"Helsinki"
city
(3) ["London", "NewYork", "Delhi"]
city.pop(1)
"Delhi"

var city=["London","NewYork","Delhi"]
undefined
city.unshift("Amsterdam")
4
city
(4) ["Amsterdam", "London", "NewYork", "Delhi"]
city.shift()
"Amsterdam"
city
(3) ["London", "NewYork", "Delhi"]
city.shift(1)
"London"

var a = [1,2,3]
var b = [4,5,6]
a+b

var a = [1,2,3]
var b = [4,5,6]
a+b
"1,2,34,5,6"
a.concat(b)
(6) [1, 2, 3, 4, 5, 6]
var c = [7,8,9
         ]
undefined
a.concat(b,c)
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
c.concat(a,b)
(9) [7, 8, 9, 1, 2, 3, 4, 5, 6]

var city1 = ["Amsterdam", "London", "NewYork", "Delhi"]
city1.slice(2)

var city1 = ["Amsterdam", "London", "NewYork", "Delhi"]
city1.slice(2)
(2) ["NewYork", "Delhi"]
var city1 = ["Amsterdam", "London", "NewYork", "Delhi","helsinki"]
city1.slice(2)
(3) ["NewYork", "Delhi", "helsinki"]
var city1 = ["Amsterdam", "London", "NewYork", "Delhi","helsinki"]
city1.slice(1,4)
(3) ["London", "NewYork", "Delhi"]

var city1 = ["Amsterdam", "London", "NewYork", "Delhi","helsinki"]
undefined
city1.splice(2,0,"Mumbai","Innsburg")
[]
city1
(7) ["Amsterdam", "London", "Mumbai", "Innsburg", "NewYork", "Delhi", "helsinki"]0: "Amsterdam"1: "London"2: "Mumbai"3: "Innsburg"4: "NewYork"5: "Delhi"6: "helsinki"length: 7__proto__: Array(0)
city1.splice(3,1,"Venice","Roam")
["Innsburg"]
city1
(8) ["Amsterdam", "London", "Mumbai", "Venice", "Roam", "NewYork", "Delhi", "helsinki"]

[a,b]=["Hii","Bye"]

var a = [1,2,3]
Array.isArray(a)
false
a.valueOf()
"k"
var a = [1,2,3]
undefined
a.valueOf()
(3) [1, 2, 3]
var a = ["a","b","c"]
undefined
a.join()
"a,b,c"


You have to take array of user in that add
3-5
You have to take input from the user as name
if name is part of array you have to console allow access
else add that user to array and next time say allow access

Sava array in localStorage

Regex