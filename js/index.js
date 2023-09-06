document.addEventListener(`DOMContentLoaded`,function(){
    document.querySelector(`body`).onscroll = hnav;
});
function hnav() {
    document.querySelector(`#a`).style.color =`blue`
    document.querySelector(`#b`).style.color =`blue`
    document.querySelector(`#c`).style.color =`blue`
    document.querySelector(`#d`).style.color =`blue`
    document.querySelector(`#e`).style.color =`blue`
    document.querySelector(`#f`).style.color =`blue`
    document.querySelector(`#header`).style.backgroundColor =`white`
    document.querySelector(`#header`).style.width =`100%`
    document.querySelector(`#header`).style.left =`0`
    document.querySelector(`#header`).style.paddingLeft =`10%`
    document.querySelector(`#header`).style.paddingRight =`10%`
    document.querySelector(`#header`).style.paddingTop =`1rem`
    document.querySelector(`#header`).style.paddingButtom =`1rem`
    document.querySelector(`#header`).style.top =`0`
}
const mainMenu = document.querySelector(`.mainMenu`);
const closeMenu = document.querySelector(`.closeMenu`);
const burger = document.querySelector(`.burger`);


burger.addEventListener(`click`,show);
closeMenu.addEventListener(`click`,close);

function show() {
    mainMenu.style.display = `flex`;
    mainMenu.style.top = `0`;
}
function close() {
    mainMenu.style.top = `-100%`
}