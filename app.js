const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

function handelScroll(){
    if(rootElement.scrollTop > 200){
        scrollToTopBtn.classList.add('show');
    }
    else{
        scrollToTopBtn.classList.remove('show');
    }
}
function scrollToTop() {
    scrollToTopBtn.style.animation = 'rocketLaunch 2s forwards';
    const fire = document.createElement('div');
    fire.classList.add('fire');
    scrollToTopBtn.appendChild(fire);

    setTimeout(() => {
        rootElement.scrollTo({
            top : 0 ,
            behavior : 'smooth'
        });
    }, 100);
    setTimeout(() => {
        scrollToTopBtn.removeChild(fire);
        scrollToTopBtn.style.animation='';
    }, 900);
}

scrollToTopBtn.addEventListener('animationend',()=>{
    scrollToTopBtn.style.display='block';
});
scrollToTopBtn.addEventListener('click',scrollToTop);
document.addEventListener('scroll',handelScroll);