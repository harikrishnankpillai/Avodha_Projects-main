const scrollbehaviour = document.querySelector('.carousel');
const right = document.querySelector('.rightarrow');
const left = document.querySelector('.leftaerow');
scrollbehaviour.addEventListener('wheel',(e)=>{
    e.preventDefault();
    console.log('working');
    scrollbehaviour.scrollLeft += e.deltaY;
})
right.addEventListener('click',()=>{
    scrollbehaviour.scrollLeft += 900;
})
left.addEventListener('click',()=>{
    scrollbehaviour.scrollLeft -= 900;
})

