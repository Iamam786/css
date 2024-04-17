let passwordInput = document.getElementById('password');

let passwordStengths = document.querySelectorAll('.password-strength');

let text = document.getElementById('text');

passwordInput.addEventListener('input', (event) => {
    let password = event.target.value;
    let strength = Math.min(password.length, 12);
    let degree = strength * 30  //Calculate degree value based on password strength
    let gradientColor = strength <= 4 ? '#ff2c1c' : (strength <= 8 ? '#ff9800' : '#12ff12');

    let strengthText = strength <=4 ? 'Weak' : (strength <=8 ? 'Medium' : 'Strong');

    passwordStengths.forEach(passwordStength => {
        passwordStength.style.background = `conic-gradient(${gradientColor} ${degree}deg,#1115 ${degree}deg)`
    })

    text.textContent = strengthText;
    text.style.color = gradientColor;
})