const body = document.querySelector('body');
const h1 = document.createElement('h1');
const textArea = document.createElement('textarea');
const div = document.createElement('div');

h1.innerHTML = "I made it that big, so you don't miss";
textArea.innerHTML = 'Yeah, click here';
div.innerHTML += 'You focused!'

body.append(h1, textArea, div);