function calc(operator){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    var flag = false;
    if(isNaN(a)== false && isNaN(b) == false){
        if(operator==="add"){
            out = parseInt(a)+parseInt(b)
            flag=true
        }else{
            out = parseInt(a)-parseInt(b)
            flag=true
        }
    }else{
        out= "Please enter valid input"
    }
    
    document.getElementsByClassName('output')[0].style.color=flag?"green":"red"
    document.getElementsByClassName('output')[0].innerText='Output is '+out
}







/*function add(){
    // alert("calling")
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = parseInt(a)+parseInt(b)
    // alert("out is "+out)
    document.getElementsByClassName('output')[0].innerText='Output is '+out
}
function sub(){
    // alert("calling")
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = parseInt(a)-parseInt(b)
    // alert("out is "+out)
    document.getElementsByClassName('output')[0].innerText='Output is '+out
}*/