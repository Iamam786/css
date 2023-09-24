let hours = document.getElementById('hour');
let minute = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sc = document.getElementById('sc');
setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';

    //convet 24hrs clock to 12Hrs clock
    if (h > 12) {
        h = h - 12;
    }
    //add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    hours.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    hr.style.transform = `rotateZ(${h * 30}deg)`;
    min.style.transform = `rotateZ(${m * 30}deg)`;
    sc.style.transform = `rotateZ(${s * 30}deg)`;
});