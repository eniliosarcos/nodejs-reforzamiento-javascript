let nombre = 'deadpool';
let real = 'wade winston';

// console.log(nombre + ' ' + real);
// console.log(`${nombre} ${real}`);

// let nombrecompleto = nombre + ' ' + real;
// let nombretemplate = `${nombre} ${real}`;

// console.log(nombrecompleto === nombretemplate);

function getNombre(params) {
    return `${nombre} ${real}`;
}

console.log(`el nombre de: ${getNombre()}`);