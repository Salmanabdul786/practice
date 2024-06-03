console.log('dello')
//javascript is dynamic lang
let name ='Kabilan';
console.log(name);

//cannot be reserved keyword
//cannal notation firstName

//constants
//does not reasign
const rate=0.3;
//rate=1;
console.log('rate');

//primitive type
let nme='mosh';//string
let age=30;//number
let isApprove=true;//boolean
let fistName=undefined;
let lastName=null;//clear a value of variable

//Referene type  
//objects
let person={
    lame:'Mosh', //key:value
    agee:30
};
person.lame='john';
person['lame']='marry';
console.log(person.lame);

//arrays
let color=['red','blure'];
color[2]=1;
console.log(color.length);

//functions 
function greet(kame){//parameter
    console.log('hello'+ kame);


}

greet('John');//multiple argument


function square(number){
    return number*number;
}
console.log(square(2));