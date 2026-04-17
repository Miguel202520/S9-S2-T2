function agregarTarea() {
    let input = document.getElementById("tarea");
    let texto = input.value;

    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    let lista = document.getElementById("lista");
    let li = document.createElement("li");

    // Crear el contenido de la tarea
    li.innerHTML = `
        <span>${texto}</span>
        <button class="btn-eliminar" onclick="eliminarTarea(this)">Eliminar</button>
    `;

    lista.appendChild(li);
    input.value = ""; // Limpiar el input
}

function eliminarTarea(elemento) {
    // El elemento es el botón, el parentElement es el <li>
    elemento.parentElement.remove();
}