let container = document.querySelector('.container')
for (let i = 0; i < 900; i++) {
    let dot = document.createElement('div');
    dot.classList.add('element');
    container.appendChild(dot);

}
let grid = [30, 30];
let dotAll = document.querySelectorAll('.element');
let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop: true,
});

animation.add({
    rotate: function() { return anime.random(-360, 360) },
    translateY: function() { return anime.random(-150, 150) },
    translatex: function() { return anime.random(-150, 150) },
    delay:anime.stagger(100,{grid:grid,from:'center'}), //from:""
    keyframes:[
        {
            background:'#f00'
        },
        {
            background:'#0f0'
        },
        {
            background:'#f0f'
        },
        {
            background:'#ff0'
        },
        {
            background:'#0ff'
        },
        {
            background:'#333'
        },
    ]
})