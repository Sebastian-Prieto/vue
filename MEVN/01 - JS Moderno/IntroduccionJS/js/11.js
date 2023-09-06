// Destructuring de Arrays
const tecnologias = ['VueJS', 'JavaScript', 'NodeJS', 'HTML', 'CSS'];
// const vuejs = tecnologias[0];
// const [ vuejs, js, nodejs ] = tecnologias;
const [,,, html ,] = tecnologias;
console.log(html);