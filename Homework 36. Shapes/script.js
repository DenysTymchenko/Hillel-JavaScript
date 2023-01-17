const figure = document.querySelector('.figure');
const colorInput = document.getElementById('color');
const shapeSelector = document.getElementById('shapes')

figure.style.backgroundColor = colorInput.value;

colorInput.addEventListener('input', () => {
    figure.style.backgroundColor = colorInput.value;
});

shapeSelector.addEventListener('change', () => {
    changeShape[shapeSelector.value](figure);
});

const changeShape = {
    'square': element => {
        element.style.rotate = null;
        element.style.borderRadius = null;
    },
    'circle': element => {
        element.style.borderRadius = '100%'
        element.style.rotate = null;
    },
    'diamond': element => {
        element.style.rotate = '45deg'
        element.style.borderRadius = null;
    },
}