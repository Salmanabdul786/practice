console.log("project2");

let openBtn=document.getElementById('open-btn');
let modalContain =document.getElementById('modal-container');
let closeBtn=document.getElementById('close-btn');


openBtn.addEventListener('click',function(){
    modalContain.style.display='block';
});

closeBtn.addEventListener('click',function(){
    modalContain.style.display='none';
})

window.addEventListener('click',function(e){
    if(e.target===modalContain){
        modalContain.style.display='none';
    }
})