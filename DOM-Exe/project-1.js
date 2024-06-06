let btn =document.querySelector('#new-quote');
let quote=document.querySelector('.qoute');
let person=document.querySelector('.person');

const qoutes = [{
    quote:'"sdfhakfhashhfks"',
    person:'fjasfjaqfh'
},
{
    quote:`"rtartatraqt"`,
    person:`Abdul`
},];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random() * qoutes.length);
    //string format
    quote.innerHTML=qoutes[random].quote;
    person.innerHTML=qoutes[random].person;
    
})
console.log("hiiii");