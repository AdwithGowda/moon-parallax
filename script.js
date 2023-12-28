text="text/javascript">
let = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road= document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll',function(){
    console.log('Scroll event detected');
    var value = window.scrollY;
    bg.style.top = value * 0.5 +'px';
    moon.style.left = -value * 0.5 +'px';
    mountain.style.top = -value * 0.15 +'px';

})
