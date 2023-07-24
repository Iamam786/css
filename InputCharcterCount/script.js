let textBx = document.querySelector('.textBx');
let counter = document.querySelector('.counter');

let maxlength = textBx.getAttribute("maxlength");
textBx.onkeyup = ()=>{
    counter.innerText = maxlength - textBx.value.length;

}