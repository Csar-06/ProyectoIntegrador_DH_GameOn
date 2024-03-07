const form = document.getElementById('myForm');
const alert_city = document.getElementById('msj-alert-ciudad')
const alert_fullName = document.getElementById('msj-alert-nombre-apellido')
const alert_email = document.getElementById('msj-alert-email')
const alert_password = document.getElementById('msj-alert-password')
let submit_button = document.getElementById("submit_button")




 let validarCamposLlenos = () => ciudad.value.trim() !== '' && nombre.value.trim() !== '' && apellido.value.trim() !== '' && email.value.trim() !== '' && password.value.trim() !== '' && aceptoTerminos.checked == true

let actualizarBoton = () => {
    submit_button.disabled = !validarCamposLlenos()

    if (submit_button.disabled == true) {
        submit_button.style.backgroundColor = 'rgba(97, 12, 159,.50)'
        submit_button.style.transition = 'none'
        submit_button.style.boxShadow = 'none'
        submit_button.style.scale = 'none'
    }else  {
        submit_button.style.backgroundColor = ''
        submit_button.style.transition = ''
        submit_button.style.boxShadow = ''
        submit_button.style.scale = ''
    }
}

ciudad.addEventListener('input', actualizarBoton)
nombre.addEventListener('input', actualizarBoton)
apellido.addEventListener('input', actualizarBoton)
email.addEventListener('input', actualizarBoton)
password.addEventListener('input', actualizarBoton)
aceptoTerminos.addEventListener('input', actualizarBoton)

actualizarBoton()

// submit_button.disabled


form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(form)

    // Validando si la funcion 'validarCampos' devuelve algun error
    if(validarCampos(formData) == 1){
        throw console.error('Debe ajustar los valores requeridos en el formulario');
    }else{
    // envio del formulario

        form.submit()
    }

    
});

// Funcion para validar los campos del formulario
let validarCampos = formData => {

    const errors = {
        city_error: 'Ingrese un valor de minimo 6 caracteres',
        name_error: 'Ingrese valores que sean mayor a 3 caraceres y menor que 10 caracteres',
        email_error: 'Dirección de correo invalida, Debe colocar un valor de tipo "ejemplo@email.com"',
        password_error: 'La contraseña debe tener minimo 5 caracteres (Procure alternar entre mayusculas, minusculas y caracteres especiales)'
    }

    let arrayData = [...formData.entries()]
    let headers = arrayData.map(headers => headers[0])
    let values = arrayData.map(values => values[1])

    // console.log(headers);
    // console.log(values[0]);
    // console.log(arrayData[0][1]);
    for (let header of headers) {
        console.log('aqui estoy');
        // validacion del campo 'pais'
        if (header === 'ciudad' && values[0].length < 6) {
            alert_city.style.display = 'flex'
            alert_city.innerHTML = errors.city_error
            return 1
        }
        // validacion de los campos nombre y apellido
        if ((header === 'nombre' || header === 'apellido') && ((values[1].length < 3 || values[1].length > 15) || (values[2].length < 3 || values[2].length > 15))) {
            alert_fullName.style.display = 'flex'
            alert_fullName.innerHTML = errors.name_error
            return 1
        }
        // validacion del campo email o correo
        if (header === 'email' && validarEmail(values[3]) !== true ) {
            alert_email.style.display = 'flex'
            alert_email.innerHTML = errors.email_error
            return 1
        }
        // validacion del campo contraseña
        if (header === 'password' && values[4].length < 5) {
            console.log('aqui estoy, Lanza el error');
            alert_password.style.display = 'flex'
            alert_password.innerHTML = errors.password_error
            return 1
        }
    }

}

// funcion para validar el email
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
//   const email = "csarjbm@gmail.com";
//   console.log(validarEmail(email));
  
//   if (validarEmail(email)) {
//     console.log("El email es válido");
//   } else {
//     console.log("El email no es válido");
//   }
  


// form.addEventListener('submit', event => {

// event.preventDefault();
// const formData = new FormData(form);
// const ciudad = formData.get('ciudad');
// const nombre = formData.get('nombre');
// const apellido = formData.get('apellido');
// const email = formData.get('email');
// const password = formData.get('password');
// const aceptoTerminos = document.getElementById('aceptoTerminos');
// const mjs_campoVacio = document.getElementById('msj-campo-vacio')
// const error = 'Por favor, complete todos los campos y acepte los términos y condiciones.'
// // let submit_button = document.getElementById("submit_button")


// if (!ciudad || !nombre || !apellido || !email || !password || !aceptoTerminos.checked) {
//     mjs_campoVacio.style.display = 'flex'
//     mjs_campoVacio.innerHTML = error
//     // alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
//     return;
// }

// // form.submit();
// })