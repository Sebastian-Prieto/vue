// Arrow functions
const sumar = (numero1, numero2) => {
    console.log(numero1 + numero2);
}

const tecnologias = ['VueJS', 'JavaScript', 'NodeJS', 'HTML', 'CSS'];

tecnologias.forEach(tecnologia => { console.log(tecnologia);})

const arrayMap = tecnologias.map(tecnologia => tecnologia);
console.log(arrayMap);

const tecnologias2 = tecnologias.filter(tech => tech != 'HTML')
console.log(tecnologias2);