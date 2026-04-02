let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion para cambiar idioma
function setLanguage(lang) {
    if (lang === 'es') {
        window.location.href = "index-es.html";
    } else if (lang === 'en') {
        window.location.href = "index.html";
    }
}



//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//validar formulario contacto

const idioma = document.documentElement.lang;

const mensajes = {
    es: {
        nombre: 'El nombre es obligatorio.',
        telefono: 'El teléfono debe tener 10 dígitos.',
        email: 'El email no es válido.',
        mensaje: 'El mensaje es obligatorio.',
        enviado: 'Datos enviados:'
    },
    en: {
        nombre: 'The name is required.',
        telefono: 'The phone must have 10 digits.',
        email: 'The email is not valid.',
        mensaje: 'The message is required.',
        enviado: 'Submitted data:'
    }
};

function enviarMensaje() {

    const idioma = document.documentElement.lang;
    const msg = mensajes[idioma] || mensajes['es']; // fallback español

    document.getElementById('nombreError').textContent = '';
    document.getElementById('telefonoError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('mensajeError').textContent = '';

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    let hayErrores = false;

    if (!nombre) {
        document.getElementById('nombreError').textContent = msg.nombre;
        hayErrores = true;
    }

    if (telefono.length !== 10) {
        document.getElementById('telefonoError').textContent = msg.telefono;
        hayErrores = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = msg.email;
        hayErrores = true;
    }

    if (!mensaje) {
        document.getElementById('mensajeError').textContent = msg.mensaje;
        hayErrores = true;
    }

    if (!hayErrores) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <h3>${msg.enviado}</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
        `;

        document.getElementById('nombre').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    }
}


// function enviarMensaje() {
//     // Resetear los mensajes de error
//     document.getElementById('nombreError').textContent = '';
//     document.getElementById('telefonoError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('mensajeError').textContent = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const telefono = document.getElementById('telefono').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     let hayErrores = false;

//     // Validar campo obligatorio: Nombre
//     if (!nombre) {
//         document.getElementById('nombreError').textContent = 'The name is required.';
//         hayErrores = true;
//     }

//     // Validar longitud máxima: Teléfono (10 dígitos)
//     if (telefono.length !== 10) {
//         document.getElementById('telefonoError').textContent = 'The phone must have 10 digits.';
//         hayErrores = true;
//     }

//     // Validar expresión regular: Email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         document.getElementById('emailError').textContent = 'The email is not valid.';
//         hayErrores = true;
//     }

//     // Validar campo obligatorio: Mensaje
//     if (!mensaje) {
//         document.getElementById('mensajeError').textContent = 'The message is required.';
//         hayErrores = true;
//     }

//     // Si no hay errores, mostrar los datos enviados
//     if (!hayErrores) {
//         const resultadoDiv = document.getElementById('resultado');
//         resultadoDiv.innerHTML = `
//             <h3>Datos enviados:</h3>
//             <p><strong>Nombre:</strong> ${nombre}</p>
//             <p><strong>Teléfono:</strong> ${telefono}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Mensaje:</strong> ${mensaje}</p>
//         `;

//         // Limpiar los campos del formulario
//         document.getElementById('nombre').value = '';
//         document.getElementById('telefono').value = '';
//         document.getElementById('email').value = '';
//         document.getElementById('mensaje').value = '';
        
     
//     }
// }