let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let sound = document.querySelector('#audio');
btn.onclick = () => {
    body.classList.toggle('on');
    sound.play();
}