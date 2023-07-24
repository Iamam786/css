let toggle = document.getElementById('toggle');
// toggle.innerHTML = `<i class="bi bi-eye"></i>`;
// toggle.style.background = toggle.innerHTML;

let password = document.getElementById('password');
toggle.addEventListener('click',showHide);
function showHide() {
    if (password.type ==='password') {
        password.setAttribute('type','text');
        toggle.classList.add('hide');

    }
    else{
        password.setAttribute('type','password')
        toggle.classList.remove('hide');
    }
};
