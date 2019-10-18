Date()
"Fri Oct 18 2019 03:56:52 GMT+0100 (British Summer Time)"
var a = new Date().getDay()
undefined
a
Fri Oct 18 2019 03:57:23 GMT+0100 (British Summer Time)
a.getDate()
18
a.getDay()
5
a.getTime()
1571367443097

switch(new Date().getDay()){
    case 0:
        console.log('Today is sunday');
        break;
    case 1:
        console.log('Today is sunday');
        break;
    case 2:
        console.log('Today is sunday');
        break;
    case 5:
        console.log('Today is Firday');
        break;
    default:
        console.log('Wrong Input');   
    
}

var a = 'aakash'
switch(a){
    case 'aakash':
        console.log('you are admin');
    case 'eva':
        console.log('you are admin');
        break;
    case 'john':
        console.log('you are user');
        break;
    default:
        console.log('We dont know you');   
    
}


if(a=="aakash"||a==="eva"){
    console.log('you are admin');
}else{
    console.log('We dont know you');   
}
