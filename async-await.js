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


const getInfoUsuario = async(id) => {
    
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        
        return `El salario del empleado: ${empleado} es de ${salario}`;
        
    } catch (error) {

        throw error;
    }
}

const id=3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
