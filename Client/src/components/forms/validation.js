const validation=(data)=>{
    let error={}

    if(!data.email.includes("@") || !data.email.includes(".")){
        error.email="Ingresa un email valido"
    }
    if(!data.email){
        error.email="Debes ingresar un email"
    }
    if(data.email.length > 35){
        error.email="El email debe ser menor o igual a 35 caracteres"
    }
    if(!/\d/.test(data.password)){
        error.pass="El password debe contener al menos un numero"
    }
    if(data.password.length < 6 || data.password.length > 10){
        error.pass="El password debe contener entre 6 y 10 caracteres"
    }
    return error;
}

export default validation;