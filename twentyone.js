function loop(){
    for(i=0;i<10;i++){
        console.log(i)
    }
}

//es6
function * loop(){
    for(i=0;i<10;i++){
        yield i
    }
}