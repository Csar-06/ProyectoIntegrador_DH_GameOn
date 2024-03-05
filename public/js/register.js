const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const formData = new FormData(form);

    const ciudad = formData.get('ciudad');
    const nombre = formData.get('nombre');
    const apellido = formData.get('apellido');
    const email = formData.get('email');
    const password = formData.get('password');
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const mjs_campoVacio = document.getElementById('msj-campo-vacio')
    let submit_button = document.getElementById("submit_button")


    if (!ciudad || !nombre || !apellido || !email || !password || !aceptoTerminos.checked) {
        mjs_campoVacio.style.display = 'flex'
        mjs_campoVacio.innerHTML = 'Por favor, complete todos los campos y acepte los términos y condiciones.'
        // alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
        return;
    }

    form.submit();
});

//  let validarCamposLlenos = () => ciudad.value.trim() !== '' && nombre.value.trim() !== '' && apellido.value.trim() !== '' && email.value.trim() !== '' && password.value.trim() !== '' && aceptoTerminos.checked == true

// let actualizarBoton = () => submit_button.disabled = !validarCamposLlenos()

// ciudad.addEventListener('input', actualizarBoton)
// nombre.addEventListener('input', actualizarBoton)
// apellido.addEventListener('input', actualizarBoton)
// email.addEventListener('input', actualizarBoton)
// password.addEventListener('input', actualizarBoton)
// aceptoTerminos.addEventListener('input', actualizarBoton)

// actualizarBoton()