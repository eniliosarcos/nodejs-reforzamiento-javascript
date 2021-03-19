const empleados = [
    {
        id: 1,
        nombre: 'fernando'
    }, 
    {
        id: 2,
        nombre: 'enilio'
    } , 
    {
        id: 3,
        nombre: 'juan'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    }, 
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = (id) => {

    const promesa = new Promise( (resolve, reject) => {
        
        const empleadoDB = empleados.find(empleado => empleado.id === id)?.nombre;
        
        if(empleadoDB){

            resolve(empleadoDB);
        }
        else{
            
            reject(`no existe empleado con id: ${id}`)
        }        
    });

    return promesa;
}

const getSalario = (id) => {

    const promesa = new Promise( (resolve, reject) => {
        
        const salarioDB = salarios.find(salario => salario.id === id)?.salario;
        
        if(salarioDB){

            resolve(salarioDB);
        }
        else{
            
            reject(`no existe salario con id: ${id}`)
        }        
    });

    return promesa;
}

const id = 1;
let nombre;

getEmpleado(id)
    .then(empleado =>  {

        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
    .catch( err => console.log(err));

//OPCION 1 ---------------------

// getEmpleado(id)
//     .then( empleado => console.log(empleado))
//     .catch( err => console.log(err));

// getSalario(id)
//     .then( salario => console.log(salario))
//     .catch( err => console.log(err));

// OPCION 2 ---------------------

// getEmpleado(id)
//     .then( empleado => {

//         getSalario(id)
//             .then( salario => {
//                 console.log('El empleado:',empleado, 'tiene un salario de: ', salario)
//         })
//         .catch( err => console.log(err));
//     })
//     .catch( err => console.log(err));