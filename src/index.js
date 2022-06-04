import './style.css'
import pizza from './pizza.jpeg'

const content = document.querySelector('#content')
console.dir(content)

const pizzaPic = document.createElement('img');
pizzaPic.src = pizza;

content.appendChild(pizzaPic)
