const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
});


// toggle.addEventListener('click', function  () {
// let toggle = document.getElementById('menuToggle');
//     let navigation = document.querySelector('.navigation')
//     let li = document.querySelectorAll('li');
//     toggle.classList.toggle('active');
//     navigation.classList.toggle('active');
//     // li.classList.toggle('active');
//     // console.log(li.classList.toggle('active'));
// })

function menuToggle() {
    let toggle = document.getElementById('menuToggle');
    let navigation = document.querySelector('.navigation')
    let li = document.querySelectorAll('li');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}