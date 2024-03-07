const form = document.getElementById('myForm');
const alert_error = document.getElementById('msj-alert-mail-password')
let submit_button = document.getElementById("submit_button")


let users = [
    {
        email: 'admin@gmail.com',
        password: '12345'
    },
    {
        email: 'user@gmail.com',
        password: 'wasd'
    }
]

let validarCamposLlenos = () => email.value.trim() !== '' && password.value.trim() !== ''

let actualizarBoton = () => {
    submit_button.disabled = !validarCamposLlenos()

    if (submit_button.disabled == true) {
        submit_button.style.backgroundColor = 'rgba(97, 12, 159,.50)'
        submit_button.style.transition = 'none'
        submit_button.style.boxShadow = 'none'
        submit_button.style.scale = 'none'
    } else {
        submit_button.style.backgroundColor = ''
        submit_button.style.transition = ''
        submit_button.style.boxShadow = ''
        submit_button.style.scale = ''
    }
}

email.addEventListener('input', actualizarBoton)
password.addEventListener('input', actualizarBoton)


actualizarBoton()

form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(form)

    // Validando si la funcion 'validarCampos' devuelve algun error
    if (validarCampos(formData) == 1) {
        throw console.error('Debe ajustar los valores requeridos en el formulario');
    } else {
        // envio del formulario
        form.submit()
    }


});

// Funcion para validar los campos del formulario
let validarCampos = formData => {

    const error = 'Email o constraseña incorrecta, intente nuevamente'

    let arrayData = [...formData.entries()]
    let headers = arrayData.map(headers => headers[0])
    let values = arrayData.map(values => values[1])

    console.log('aqui estoy');
    console.log(values[0]);
    console.log(values[1]);
    console.log(findUser(findUser(values[0], values[1])));


    // validacion de los campos
    if (findUser(values[0], values[1]) != true) {
        alert_error.style.display = 'flex'
        alert_error.innerHTML = error
        console.log('ERROR MAIL/CONTRASEÑA');
        return 1
    }
    



}

let findUser = (mail, psd) => {
    let res = users.find(u => u.email == mail && u.password == psd)
    if (res) {
        return true
    } else return false
}