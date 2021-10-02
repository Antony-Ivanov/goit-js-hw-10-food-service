import data from './menu.json';
import template from './template/template.hbs';
import theme from './js/switch-theme.js';

// console.log(data);
// console.log(template);

let result = data.map(item => template(item)).join('');
console.log(result);

document.querySelector('.js-menu').innerHTML = result;
