let getUsuarioById = (id, callbackExitoso, callbackError) => {

    let usuario = {
        nombre: 'Fernando',
        id
    }
    if (id === 20) {
        callbackError(`El usuario con id ${ id }, no existe en la BD`);
    } else {
        callbackExitoso(usuario);
    }
}

getUsuarioById(20,
    usuario => {
        console.log('Usuario de base de datos', usuario);
    },
    error => {
        console.log(`errorsito pequeñillo: ${error}`);
    }
);