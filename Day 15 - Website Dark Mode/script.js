let toggle = document.getElementById('toggle');
let dark = false;

function darkMode() {
    let body = document.getElementById('body');
    if (dark == false) {        
        body.style.backgroundColor = 'black';
        toggle.src = 'img/sun.png';
        dark = true;
    } else {
        body.style.backgroundColor = 'white';
        toggle.src = 'img/moon.png';
        dark = false;
    }
}
