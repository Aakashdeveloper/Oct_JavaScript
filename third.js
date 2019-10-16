var city = ' loNDoN'

city1 = city.trim()

city1.trim().charAt(0).toUpperCase()+city1.trim().slice(1).toLowerCase()


var city = 'london'
undefined
city.toUpperCase()
"LONDON"
var city1="HElsinkI"
undefined
city1.toLowerCase()
"helsinki"
city1[0]
"H"
city1[1]
"E"
city.length
6
city[6]
undefined
city[5]
"n"
var a = "i am doing javascript"
undefined
a.replace('javascript','react')
"i am doing react"
var a = " london "
undefined
a.length
8
a.trim()
"london"
var b = a.trim()
undefined
b.length
6
b.charAt(0)
"l"
b.charAt(2)
"n"
var a = "i am doing javascript"
undefined
a.trim()
"i am doing javascript"
a.replace('doing javascript','doingjavascript')
"i am doingjavascript"
a.replace(/ /g,'')
"iamdoingjavascript"
a.replace(/ /,'')
"iam doing javascript"
a.replace(/ /g,'')
"iamdoingjavascript"
var b = "i am doingjavascript"
undefined
b.replace('javascript','react')
"i am doingreact"
b.replace('a','x')
"i xm doingjavascript"
b.replace('a/g','x')
"i am doingjavascript"
b.replace('a'/g ,'x')

b.replace(/a/g ,'x')
"i xm doingjxvxscript"
var city="london"
undefined
city.slice(1)
"ondon"
city.slice(2)
"ndon"
var city=" london"
undefined
city.slice(1)
"london"
var city = 'loNDoN'

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"


var a = "mukesh"
undefined
a.slice(2,4)
"ke"
a.slice(-2,-4)
""
var a = "mukesh"
undefined
a.substring(1)
"ukesh"
a.substring(1,4)
"uke"
a.substring(-2)
"mukesh"
a.substring(-3)
"mukesh"
a.substring(-1)
"mukesh"
a.slice(-1)
"h"
a.slice(-2)
"sh"
a.substr(1,1)
"u"
a.substr(1,4)
"ukes"
a.substring(1,4)
"uke"
a.slice(1,4)
"uke"


var a ="i am doing javascript"
undefined
a.split(' ')
(4) ["i", "am", "doing", "javascript"]
var b = 'javascript'
undefined
b.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var url ="https://ngproductsparam.herokuapp.com/api/getProductDetails/3"
undefined
url.slice(-1)
"3"
url.split('/')
(6) ["https:", "", "ngproductsparam.herokuapp.com", "api", "getProductDetails", "3"]
url.length-1
60
var output = url.split('/')
undefined
output.length-1
5
output.charAt(output.length-1)

output.charAt(0)

output[output.length-1]
"3"

var a  = 'i am happy'
undefined
a.repeat(2)
"i am happyi am happy"
a.repeat(2,'/n')
"i am happyi am happy"
var a = "hi "
undefined
var b = "John"
undefined
a+b
"hi John"
a.concat(b)
"hi John"
b.charCodeAt(0)
74