// show / hide aditional info

const toggleButton = document.getElementById("toggleButton");
const additionalInfo = document.getElementById("additionalInfo");

toggleButton.addEventListener("click", function () {
    additionalInfo.hidden = !additionalInfo.hidden;

    if (additionalInfo.hidden) {
        toggleButton.textContent = "Mostrar información adicional";
    } else {
        toggleButton.textContent = "Ocultar información adicional";
    }
});

// form validation

const nierForm = document.getElementById("nierForm");

nierForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const juego = document.getElementById("juego").value;
    const personaje = document.getElementById("personaje").value;
    const opinion = document.getElementById("opinion").value.trim();

    const conocia = document.querySelector(
        'input[name="conocia"]:checked'
    );

    // Error elements
    const nombreError = document.getElementById("nombreError");
    const correoError = document.getElementById("correoError");
    const juegoError = document.getElementById("juegoError");
    const personajeError = document.getElementById("personajeError");
    const opinionError = document.getElementById("opinionError");
    const conociaError = document.getElementById("conociaError");

    const formSuccess = document.getElementById("formSuccess");

    // Clear previous messages
    nombreError.textContent = "";
    correoError.textContent = "";
    juegoError.textContent = "";
    personajeError.textContent = "";
    opinionError.textContent = "";
    conociaError.textContent = "";
    formSuccess.textContent = "";

    let valid = true;


    // Validate name
    if (nombre === "") {

        nombreError.textContent =
            "Por favor, introduce tu nombre.";

        valid = false;
    }


    // Validate knowledge of the game
    if (!conocia) {

        conociaError.textContent =
            "Selecciona una opción.";

        valid = false;
    }


    // Validate game selection
    if (juego === "") {

        juegoError.textContent =
            "Selecciona una opción.";

        valid = false;
    }


    // Validate favorite character
    if (personaje === "") {

        personajeError.textContent =
            "Selecciona un personaje.";

        valid = false;
    }


    // Validate email
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {

        correoError.textContent =
            "Por favor, introduce tu correo.";

        valid = false;

    } else if (!emailPattern.test(correo)) {

        correoError.textContent =
            "Introduce un correo electrónico válido.";

        valid = false;
    }


    // Validate opinion
    if (opinion === "") {

        opinionError.textContent =
            "Por favor, escribe tu opinión.";

        valid = false;

    } else if (opinion.length < 10) {

        opinionError.textContent =
            "La opinión debe tener al menos 10 caracteres.";

        valid = false;
    }


    // Successful submission
    if (valid) {

        formSuccess.textContent =
            "¡Gracias por compartir tu opinión sobre NieR:Automata!";

        nierForm.reset();
    }

});

// dark mode

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});