var email = "a@a"


^([a-zA-Z])$
^([0-9])$


var a = "john"
undefined
a.match(^([a-zA-Z])$)
VM376:1 Uncaught SyntaxError: Unexpected token '^'
a.match("^([a-zA-Z])$")
null
var b = "h"
undefined
b.match("^([a-zA-Z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
a.match("^([a-zA-Z]{1,5})$")
(2) ["john", "john", index: 0, input: "john", groups: undefined]
a.match("^([a-zA-Z]+)$")
(2) ["john", "john", index: 0, input: "john", groups: undefined]0: "john"1: "john"groups: undefinedindex: 0input: "john"length: 2__proto__: Array(0)
var a ="hi john"
undefined
a.match("^([a-zA-Z]+)$")
null
var phone = 1234567890
undefined
phone.match("^([0-9]{10})$")
phone.match("^([0-9]{10})$")

var phone = 1234567890
undefined
phone
1234567890
phone.match("^([0-9]{10})$")

var phone = "1234567890"
undefined
phone.match("^([0-9]{10})$")
(2) ["1234567890", "1234567890", index: 0, input: "1234567890", groups: undefined]
var a = 1111
undefined
a.toString()
"1111"


var email = "a@a"

^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2})$

^([a-zA-Z0-9]{2})([a-zA-Z]+)\.([a-zA-Z]{2})$


"^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-z]{2,5})$"

"^(([a-z])|[a-z]+[0-9])+@+([a-z])+\.+([a-z]{2,5}))$"

"^[1-30]\/[1-12]\/[2018-2099]\:[]"
"^[a-z]+[A-Z]+[0-9]+$