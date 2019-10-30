function robot(name){
    this.name = name;
    this.legs = 2;
    this.color='White'
}


function human(name){
    this.name = name;
    this.hands = 2
}

human.prototype = new robot();
robot.prototype = new human();


var pepper = new robot('Pepper')
var nao = new human('nao')

pepper
robot {name: "Pepper", legs: 2, color: "White"}
nao
human {name: "nao", hands: 2}