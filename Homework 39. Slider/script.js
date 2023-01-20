const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
];

const img = document.querySelector('img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let position = 0;
img.src = images[position];

prevBtn.addEventListener('click', () =>{
    position--;

    if(position === 0){
        prevBtn.setAttribute('disabled', '');
    }else{
        nextBtn.removeAttribute('disabled');
    }

    img.src = images[position];
});

nextBtn.addEventListener('click', () =>{
    position++

    if(position === images.length - 1){
        nextBtn.setAttribute('disabled', '');
    }else{
        prevBtn.removeAttribute('disabled');
    }

    img.src = images[position];
 });