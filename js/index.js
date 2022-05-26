function enviarFormularioRegistro(e){
    e.preventDefault();
    let inputNombre = document.querySelector("#nombre");
    let inputEmail = document.querySelector("#email");
    let inputContrasenia = document.querySelector("#password");
    let alertFormContacto = document.querySelector("#contacto-form-alert");
    alertFormContacto.classList.remove('show');
    alertFormContacto.classList.add('hide');
    if(inputNombre.value =='' || inputEmail.value == '' || inputContrasenia.value == ''){
        alertFormContacto.innerHTML = 'Por favor complete todos los campos.';
        alertFormContacto.classList.remove('hide');
        alertFormContacto.classList.add('show');
        return false;
    }
}


function enviarFormularioContacto(e){
    e.preventDefault();
    let inputNombre = document.querySelector("#nombre");
    let inputEmail = document.querySelector("#email");
    let inputMensaje = document.querySelector("#mensaje");
    let alertFormContacto = document.querySelector("#contacto-form-alert");
    alertFormContacto.classList.remove('show');
    alertFormContacto.classList.add('hide');
    let mensajeAlert = '';
    let validacion = true;
    if(inputNombre.value =='' || inputEmail.value == '' || inputMensaje.value == ''){
        mensajeAlert += 'Por favor complete todos los campos.<br>';
        validacion = false;
    }

    if(inputNombre.value.length>20){
        mensajeAlert += 'El campo nombre no puede tener más de 20 caracteres.<br>';
        validacion = false;
    }
    if(inputMensaje.value.length>200){
        mensajeAlert += 'El mensaje no puede tener más de 200 caracteres.<br>';
        validacion = false;
    }
    if(!validacion){
        alertFormContacto.innerHTML = mensajeAlert;
        alertFormContacto.classList.remove('hide');
        alertFormContacto.classList.add('show');
    }
}