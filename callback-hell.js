let empleados = [
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

let salarios = [
    {
        id: 1,
        salario: 1000
    }, 
    {
        id: 2,
        salario: 2000
    }
];


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)?.nombre;

    if (empleadoDB)
        callback(null, empleadoDB);
    else
        callback(`no existe un empleado con el id ${id}`);
}

let getSalario = (id, callback) => {

    let salarioDB = salarios.find(salario => salario.id === id)?.salario;

    if (salarioDB){

        callback(null, salarioDB);
    }
    else
        callback(`no existe un salario para el id ${id}`)

}

const id = 3;

getEmpleado(id, (err, empleado) => {

    if (err)
        return console.log(err);

    getSalario(id, (err, salario) => {
        
        if (err)
            return console.log(err);

        console.log('el empleado:', empleado, ' tiene un salario de: ', salario);
    });
});