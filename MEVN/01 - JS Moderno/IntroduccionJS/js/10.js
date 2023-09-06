const tecnologias = ['VueJS', 'JavaScript', 'NodeJS', 'HTML', 'CSS'];
// Add
// tecnologias.push('Git')
// tecnologias.unshift('Django')
// console.table(tecnologias);

// const nuevoArreglo = [...tecnologias]
const tecnologias2 = tecnologias.filter( function(tech) {
    return tech != 'HTML'
})

console.log(tecnologias);
console.log(tecnologias2);