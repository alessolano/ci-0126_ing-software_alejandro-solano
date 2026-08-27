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