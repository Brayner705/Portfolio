const inicio = document.getElementById('start');
const aboutMe = document.getElementById('aboutMe');
const proyectos = document.getElementById('projects');
const contacto = document.getElementById('contact');

window.addEventListener('scroll',function(){
    let section = window.scrollY;
    if(section < 500){
        inicio.classList.add('active');
        aboutMe.classList.remove('active');
        proyectos.classList.remove('active');
        contacto.classList.remove('active');
    }else if(section < 1400){
        aboutMe.classList.add('active');
        inicio.classList.remove('active');
        proyectos.classList.remove('active');
        contacto.classList.remove('active');
    }else if(section < 2100){
        proyectos.classList.add('active');
        inicio.classList.remove('active');
        aboutMe.classList.remove('active');
        contacto.classList.remove('active');
    }else{
        contacto.classList.add('active');
        inicio.classList.remove('active');
        aboutMe.classList.remove('active');
        proyectos.classList.remove('active');
    }
});

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const card = document.querySelectorAll('.card');
const carrusel = document.querySelector('.carrusel');

let currentIndex = 0;

left.addEventListener('click', ()=>{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = card.length - 1;
    }
    moverCarrusel()
})
right.addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex >= card.length){
        currentIndex = 0;
    }
    moverCarrusel();
})

const moverCarrusel = ()=>{
    carrusel.style.transform = `translateX(-${currentIndex*100}%)`;
}