let box = document.querySelector('.box');
function changeColor(color) {
    box.style.background = color;
    document.querySelectorAll('span').forEach((item) => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
}