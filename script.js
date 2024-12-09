// Variables globales
let totalIngreso = 0;
let totalGasto = 0;

// Actualiza los totales y el balance
function actualizarTotales() {
    const balance = totalIngreso - totalGasto;

    document.getElementById("total-ingreso").textContent = totalIngreso.toFixed(2);
    document.getElementById("total-gasto").textContent = totalGasto.toFixed(2);
    document.getElementById("balance").textContent = balance.toFixed(2);
}

// Agregar un nuevo ingreso
document.getElementById("form-ingreso").addEventListener("submit", function (event) {
    event.preventDefault();

    const descripcion = document.getElementById("descripcion-ingreso").value.trim();
    const monto = parseFloat(document.getElementById("monto-ingreso").value);
    const fecha = document.getElementById("fecha-ingreso").value;

    if (descripcion && monto > 0 && fecha) {
        totalIngreso += monto;

        // Agregar a la tabla
        const tablaIngresos = document.querySelector("#tabla-ingresos tbody");
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${descripcion}</td>
            <td>$${monto.toFixed(2)}</td>
            <td>${fecha}</td>
            <td><button class="eliminar" onclick="eliminarIngreso(this, ${monto})">Eliminar</button></td>
        `;
        tablaIngresos.appendChild(fila);

        // Actualizar totales
        actualizarTotales();

        // Limpiar formulario
        document.getElementById("form-ingreso").reset();
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
});

// Eliminar un ingreso
function eliminarIngreso(boton, monto) {
    const fila = boton.parentNode.parentNode;
    fila.remove();

    totalIngreso -= monto;
    actualizarTotales();
}

// Agregar un nuevo gasto
document.getElementById("form-gasto").addEventListener("submit", function (event) {
    event.preventDefault();

    const descripcion = document.getElementById("descripcion-gasto").value.trim();
    const monto = parseFloat(document.getElementById("monto-gasto").value);
    const fecha = document.getElementById("fecha-gasto").value;

    if (descripcion && monto > 0 && fecha) {
        totalGasto += monto;

        // Agregar a la tabla
        const tablaGastos = document.querySelector("#tabla-gastos tbody");
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${descripcion}</td>
            <td>$${monto.toFixed(2)}</td>
            <td>${fecha}</td>
            <td><button class="eliminar" onclick="eliminarGasto(this, ${monto})">Eliminar</button></td>
        `;
        tablaGastos.appendChild(fila);

        // Actualizar totales
        actualizarTotales();

        // Limpiar formulario
        document.getElementById("form-gasto").reset();
    } else {
        alert("Por favor, complete todos los campos correctamente.");
    }
});

// Eliminar un gasto
function eliminarGasto(boton, monto) {
    const fila = boton.parentNode.parentNode;
    fila.remove();

    totalGasto -= monto;
    actualizarTotales();
}
