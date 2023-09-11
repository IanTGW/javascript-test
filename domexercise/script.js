const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redtext = document.createElement('p');
redtext.classList.add('content');
redtext.textContent = 'Hey I\'m red!'
redtext.style.color = 'red';

const bluetext = document.createElement('h3');
bluetext.classList.add('content');
bluetext.textContent = 'I\'m a blue h3!'
bluetext.style.color = 'blue';

const containerTwo = document.createElement('div');
containerTwo.style.borderColor = 'black';
containerTwo.style.borderStyle = 'Solid';
containerTwo.style.backgroundColor = 'pink';
containerTwo.classList.add('containertwo');

const heading = document.createElement('h1');
heading.textContent = 'I\'m in a div'

const para = document.createElement('p');
para.textContent = 'ME TOO!';



container.appendChild(content);
container.appendChild(redtext);
container.appendChild(bluetext);
container.appendChild(containerTwo);
containerTwo.appendChild(heading);
containerTwo.appendChild(para);