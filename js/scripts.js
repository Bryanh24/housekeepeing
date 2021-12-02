const banner = document.querySelector('.banner');
const nav = document.querySelector('.navigation');
const menuBtn = document.querySelector('#menuBtn');
const menu = document.querySelector('.menu');
let visible = true;

//listeners
window.addEventListener('scroll', () => {
    let bannerWidth = banner.clientWidth;
    let sreenWidth = screen.width > bannerWidth;
    let windowPosition = window.scrollY > 0;

    nav.classList.toggle('fixed', windowPosition && sreenWidth);
});

function menuVisible(){
    let pcWidth = 768
    if (screen.width < pcWidth ){
        menuBtn.style.visibility = 'visible'

    }else{
        menuBtn.style.visibility = 'hidden'
    }
}
function setMenuFixed(){
    let pcWidth = 768;
    if(screen.width < pcWidth){
        nav.style.position = 'fixed'
    }
}
function setMenuVisible(){
    if (visible){
        menu.style.visibility = 'visible'
        menu.style.height = '20rem'
        visible = false
    }else{
        menu.style.visibility = 'hidden'
        menu.style.height = '0'
        visible = true
    }
}
setMenuFixed();
menuVisible();

//listeners
window.addEventListener('clic', () => {
    let bannerWidth = banner.clientWidth;
    let sreenWidth = screen.width > bannerWidth;
    let windowPosition = window.scrollY > 0;

    nav.classList.toggle('fixed', windowPosition && sreenWidth);
});

menuBtn.addEventListener('click',setMenuVisible);