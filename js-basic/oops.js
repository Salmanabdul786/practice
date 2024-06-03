//encapsulation Abstraction Inheritance Polymorphism
//object literals

const circle={
    radius:1,
    loction:{
        x:1,y:1
    },
    draw:function(){
        console.log('draw');
    }
};
circle.draw();

//Factory function
function createCir(radi){
    return{
    radi,
dra:function(){
    console.log('draw');
}
};
}
const cir=createCir(1);
cir.dra();

//constructor
function Circl(radius){
    this.radius=radius;
    this.dra=function(){
        console.log('draw');
    }
}
const another=new Circl(1);
another.dra();
another.loction={x:1};
another['location']={x:1};
delete another['location'];
//constructor property
//function are object
//let x=10;
//let y=x;
//x=20;// x=20 y=10

//let x={value:10};
//let y=x;
//x.value=20;//x=20 y=20  reference memory
// primitives number, string , bool etc are copied by value
//objects are  function , arrays copied by reference



//enum
for(let key in circle){//in property enum all objects use for in
    console.log(key);
}
const keys=Object.keys(another); // get all the keys object
console.log(keys);

if('radius'in another)// check for exist property or method
    console.log('circle has radius');


//Abstraction
//private methods and properties
//getter and setter