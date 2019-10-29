var welcome = {
    firstName: 'bob',
    lastname: 'elven',
    greet: function(){
        return `hi ${this.firstName} ${this.lastname} welcome to oops`
    }
}


function calc(){
    this.sum = function(a,b){ return a+b},
    this.sub = function(a,b){ return a-b}
}

var mycalc = new calc()
undefined
mycalc.sum(1,2)
3
mycalc.sub(2,3)
-1

const thiscal = new calc()