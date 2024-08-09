const onediv = document.getElementById('one');
const twodiv = document.getElementById('two');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');

startbtn.addEventListener('click',()=>{
    document.addEventListener("keydown",handledown); //these written after keydown are functions as eventlistner needs a instruction and function.
    document.addEventListener("keyup",handleup);//we will define this functions down , here we have just declared them
    startbtn.disabled = true;
    stopbtn.disabled =false;
})

stopbtn.addEventListener('click',()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    onediv.textContent= " ";
    twodiv.textContent= " ";
    startbtn.disabled = false;
    stopbtn.disabled = true;


})

function handledown(e){
    onediv.textContent = `Key ${e.key} was pressed down`;
    twodiv.textContent = `key is down`;
}

function handleup(i){
    onediv.textContent = `Key ${i.key} was pressed up`;
    twodiv.textContent = `key is up`;
}
