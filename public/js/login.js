const form = document.getElementById('myForm');

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');
    const msj_campoVacio = document.getElementById('msj-campo-vacio');
    

    if(!email || !password){

        msj_campoVacio.style.display = 'flex'
        msj_campoVacio.innerHTML = 'Por favor, complete todos los campos.'
        return;
    }

    form.submit();
})
