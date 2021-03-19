

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'enilio',
        id
    }

    setTimeout(() => {

        callback(usuario);
    }, 1500);
}

getUsuarioById(10, (usuario) => {

    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());

});