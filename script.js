/* =====================================================
   PYCODE ACADEMY
   JAVASCRIPT PRINCIPAL
   ACTIVIDAD COLABORATIVA #3
   ===================================================== */

console.log("JavaScript conectado correctamente");


/* =====================================================
   FORMULARIO DE CONTACTO
   ===================================================== */

const contactForm = document.getElementById("contactForm");


/*
   Comprobamos si existe el formulario.

   En index.html y cursos.html no existe,
   por eso JavaScript simplemente continúa.

   En contacto.html sí existe y se ejecuta
   la funcionalidad.
*/

if (contactForm) {

    console.log("Formulario de contacto detectado");


    /* =================================================
       EVENTO SUBMIT
       ================================================= */

    contactForm.addEventListener("submit", function (event) {

        /*
           Evitamos que el formulario recargue
           automáticamente la página.
        */

        event.preventDefault();


        /* =================================================
           OBTENER DATOS
           ================================================= */

        const nombre =
            document.getElementById("nombre").value.trim();

        const correo =
            document.getElementById("correo").value.trim();

        const curso =
            document.getElementById("curso").value;

        const mensaje =
            document.getElementById("mensaje").value.trim();


        /* =================================================
           MENSAJES DE ERROR
           ================================================= */

        const nombreError =
            document.getElementById("nombreError");

        const correoError =
            document.getElementById("correoError");

        const cursoError =
            document.getElementById("cursoError");

        const mensajeError =
            document.getElementById("mensajeError");

        const successMessage =
            document.getElementById("successMessage");


        /* =================================================
           LIMPIAR MENSAJES
           ================================================= */

        nombreError.textContent = "";

        correoError.textContent = "";

        cursoError.textContent = "";

        mensajeError.textContent = "";

        successMessage.textContent = "";

        successMessage.classList.remove("show");


        /* =================================================
           VARIABLE DE VALIDACIÓN
           ================================================= */

        let formularioValido = true;


        /* =================================================
           VALIDAR NOMBRE
           ================================================= */

        if (nombre === "") {

            nombreError.textContent =
                "Por favor, escribe tu nombre.";

            formularioValido = false;

        } else if (nombre.length < 3) {

            nombreError.textContent =
                "El nombre debe tener al menos 3 caracteres.";

            formularioValido = false;

        }


        /* =================================================
           VALIDAR CORREO
           ================================================= */

        const correoValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (correo === "") {

            correoError.textContent =
                "Por favor, escribe tu correo.";

            formularioValido = false;

        } else if (!correoValido.test(correo)) {

            correoError.textContent =
                "Ingresa un correo electrónico válido.";

            formularioValido = false;

        }


        /* =================================================
           VALIDAR CURSO
           ================================================= */

        if (curso === "") {

            cursoError.textContent =
                "Selecciona un curso.";

            formularioValido = false;

        }


        /* =================================================
           VALIDAR MENSAJE
           ================================================= */

        if (mensaje === "") {

            mensajeError.textContent =
                "Escribe un mensaje.";

            formularioValido = false;

        } else if (mensaje.length < 10) {

            mensajeError.textContent =
                "El mensaje debe tener al menos 10 caracteres.";

            formularioValido = false;

        }


        /* =================================================
           RESULTADO
           ================================================= */

        if (formularioValido) {

            successMessage.textContent =
                `¡Gracias, ${nombre}! Tu mensaje fue validado correctamente. Pronto nos pondremos en contacto contigo.`;

            successMessage.classList.add("show");

            contactForm.reset();

            console.log("Formulario validado correctamente");

        }

    });

}