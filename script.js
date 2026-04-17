function agregarTarea() {
    let inputTarea = document.getElementById("tarea");
    let inputCurso = document.getElementById("curso");
    let inputFecha = document.getElementById("fecha");

    // Validar que al menos la tarea y el curso tengan contenido
    if (inputTarea.value === "" || inputCurso.value === "") {
        alert("Por favor, completa la tarea y el curso.");
        return;
    }

    let lista = document.getElementById("lista");
    let li = document.createElement("li");

    // Estructura con los nuevos datos
    li.innerHTML = `
        <div class="info-contenedor">
            <span class="titulo-tarea">${inputTarea.value}</span>
            <div class="detalles">
                <small>📚 ${inputCurso.value}</small>
                <small>📅 ${inputFecha.value || 'Sin fecha'}</small>
            </div>
        </div>
        <button class="btn-eliminar" onclick="eliminarTarea(this)">Eliminar</button>
    `;

    lista.appendChild(li);

    // Limpiar todos los campos
    inputTarea.value = "";
    inputCurso.value = "";
    inputFecha.value = "";
}

function eliminarTarea(elemento) {
    elemento.parentElement.remove();
}