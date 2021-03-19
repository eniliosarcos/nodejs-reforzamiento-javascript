let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneracion',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;

    }
};
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

// let { nombre: primerNombre, apellido, poder, edad = 0 } = deadpool;

// console.log(primerNombre, apellido, poder, edad);

function imprimeHeroe({nombre, apellido, poder, edad = 0 }){

    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

const heroes = ['deadpool', 'superman', 'batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ , , h3] = heroes;

console.log(h3)