let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
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
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
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
window.onscroll = function () {
    efectoHabilidades();
}

//validar formulario contacto

// const idioma = document.documentElement.lang;

// const mensajes = {
//     es: {
//         nombre: 'El nombre es obligatorio.',
//         telefono: 'El teléfono debe tener 10 dígitos.',
//         email: 'El email no es válido.',
//         mensaje: 'El mensaje es obligatorio.',
//         enviado: 'Mensaje enviado correctamente ✅',
//         error: 'Error al enviar ❌'
//     },
//     en: {
//         nombre: 'The name is required.',
//         telefono: 'The phone must have 10 digits.',
//         email: 'The email is not valid.',
//         mensaje: 'The message is required.',
//         enviado: 'Message sent successfully ✅',
//         error: 'Error sending message ❌'
//     }
// };

// function enviarMensaje() {

//     const idioma = document.documentElement.lang;
//     const msg = mensajes[idioma] || mensajes['es'];

//     document.getElementById('nombreError').textContent = '';
//     document.getElementById('telefonoError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     document.getElementById('mensajeError').textContent = '';

//     const nombre = document.getElementById('nombre').value.trim();
//     const telefono = document.getElementById('telefono').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     let hayErrores = false;

//     if (!nombre) {
//         document.getElementById('nombreError').textContent = msg.nombre;
//         hayErrores = true;
//     }

//     if (telefono.length !== 10) {
//         document.getElementById('telefonoError').textContent = msg.telefono;
//         hayErrores = true;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         document.getElementById('emailError').textContent = msg.email;
//         hayErrores = true;
//     }

//     if (!mensaje) {
//         document.getElementById('mensajeError').textContent = msg.mensaje;
//         hayErrores = true;
//     }

//     if (!hayErrores) {

//         const btn = document.getElementById("enviarBtn");
//         btn.disabled = true;
//         btn.innerText = idioma === "en" ? "Sending..." : "Enviando...";

//         const templateParams = {
//             name: nombre,
//             phone: telefono,
//             email: email,
//             message: mensaje
//         };

//         emailjs.send("service_f1yu2k9", "template_zr0g188", templateParams)
//             .then(function () {

//                 const resultadoDiv = document.getElementById('resultado');

//                 resultadoDiv.innerHTML = `<h3>${msg.enviado}</h3>`;

//                 setTimeout(() => {
//                     resultadoDiv.classList.add("fade-out");
//                 }, 2500);

//                 setTimeout(() => {
//                     resultadoDiv.innerHTML = "";
//                     resultadoDiv.classList.remove("fade-out");
//                 }, 3000);

//                 document.getElementById('nombre').value = '';
//                 document.getElementById('telefono').value = '';
//                 document.getElementById('email').value = '';
//                 document.getElementById('mensaje').value = '';

//                 setTimeout(() => {
//                     resultadoDiv.innerHTML = "";

//                     btn.disabled = false;
//                     btn.innerText = idioma === "en" ? "SEND MESSAGE" : "ENVIAR MENSAJE";

//                 }, 3000);

//             }, function (error) {
//                 console.log(error);

//                 btn.disabled = false;
//                 btn.innerText = "SEND MESSAGE";

//                 alert("❌ Error al enviar");
//             });
//     }
// }



const mensajes = {
    es: {
        nombre: 'El nombre es obligatorio.',
        telefono: 'El teléfono debe tener 10 dígitos.',
        email: 'El email no es válido.',
        mensaje: 'El mensaje es obligatorio.',
        enviado: 'Mensaje enviado correctamente ✅',
        error: 'Error al enviar ❌',
        enviando: 'Enviando...',
        boton: 'ENVIAR MENSAJE'
    },
    en: {
        nombre: 'The name is required.',
        telefono: 'The phone must have 10 digits.',
        email: 'The email is not valid.',
        mensaje: 'The message is required.',
        enviado: 'Message sent successfully ✅',
        error: 'Error sending message ❌',
        enviando: 'Sending...',
        boton: 'SEND MESSAGE'
    }
};

function enviarMensaje() {

    const idioma = document.documentElement.lang;
    const msg = mensajes[idioma] || mensajes['es'];

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
        const nombreError = document.getElementById('nombreError');
        nombreError.textContent = msg.nombre;
        nombreError.classList.add("shake");

        setTimeout(() => {
            nombreError.classList.remove("shake");
        }, 300);
        hayErrores = true;
    }

    if (telefono.length !== 10) {
        const telefonoError = document.getElementById('telefonoError');
        telefonoError.textContent = msg.telefono;
        telefonoError.classList.add("shake");

        setTimeout(() => {
            telefonoError.classList.remove("shake");
        }, 300);
        hayErrores = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const emailError = document.getElementById('emailError');
        emailError.textContent = msg.email;
        emailError.classList.add("shake");

        setTimeout(() => {
            emailError.classList.remove("shake");
        }, 300);
        hayErrores = true;
    }

    if (!mensaje) {
        const mensajeError = document.getElementById('mensajeError');
        mensajeError.textContent = msg.mensaje;
        mensajeError.classList.add("shake");

        setTimeout(() => {
            mensajeError.classList.remove("shake");
        }, 300);
        hayErrores = true;
    }

    if (!hayErrores) {

        const btn = document.getElementById("enviarBtn");

        // Estado enviando
        btn.disabled = true;
        btn.innerHTML = `${msg.enviando} <i class="fa-solid fa-spinner fa-spin"></i>`;

        const templateParams = {
            name: nombre,
            phone: telefono,
            email: email,
            message: mensaje
        };

        emailjs.send("service_f1yu2k9", "template_zr0g188", templateParams)
            .then(function () {

                const resultadoDiv = document.getElementById('resultado');

                // Mostrar mensaje
                resultadoDiv.innerHTML = `<h3>${msg.enviado}</h3>`;

                // 🔥 Restaurar botón INMEDIATAMENTE
                btn.disabled = false;
                btn.innerHTML = `${msg.boton}<i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>`;

                // Reset formulario
                document.getElementById('nombre').value = '';
                document.getElementById('telefono').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mensaje').value = '';

                // Fade out
                setTimeout(() => {
                    resultadoDiv.classList.add("fade-out");
                }, 2500);

                setTimeout(() => {
                    resultadoDiv.innerHTML = "";
                    resultadoDiv.classList.remove("fade-out");
                }, 3000);

            }, function (error) {
                console.log(error);

                const resultadoDiv = document.getElementById('resultado');
                resultadoDiv.innerHTML = `<h3>${msg.error}</h3>`;

                btn.disabled = false;
                btn.innerHTML = `${msg.boton}<i class="fa-solid fa-paper-plane"></i><span class="overlay"></span>`;
            });
    }
}

