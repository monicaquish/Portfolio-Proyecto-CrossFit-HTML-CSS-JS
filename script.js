
const form = document.getElementById("formReserva");

if (form) {
    const lista = document.getElementById("listaReservas");
    const fechaInput = document.getElementById("fecha");

    const hoy = new Date().toISOString().split("T")[0];
    fechaInput.min = hoy;

    let reservas = [];

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const clase = document.getElementById("clase").value;
        const fecha = fechaInput.value;

        if (!nombre || !fecha) {
            alert("Completa todos los campos");
            return;
        }

        reservas.push({ nombre, clase, fecha });

        lista.innerHTML = reservas
            .map((r, i) => `${i + 1}. ${r.nombre} - ${r.clase} - ${r.fecha}`)
            .join("<br>");

        form.reset();
    });
}

// PANEL RESERVA
const btnReserva = document.getElementById("btnReserva");
const panelReserva = document.getElementById("panelReserva");

if (btnReserva && panelReserva) {
    btnReserva.addEventListener("click", () => {
        panelReserva.classList.toggle("active");
    });
}

// Mostrar alerta o acción cuando el usuario haga click en el ícono de ubicación
const iconoUbicacion = document.getElementById('iconoUbicacion');

if (iconoUbicacion) {
    iconoUbicacion.addEventListener('click', () => {
        // Dirección que quieres mostrar en Google Maps
        const direccion = 'Francisco Javier Mina 6-C, San Miguel Ajusco, Tlalpan, 14710 San Miguel Ajusco, CDMX';
        const url = `https://www.google.com/maps/place/Cross+F+T+Ajusco/@19.220851,-99.203058,16z/data=!4m6!3m5!1s0x85cdfdeda7d625df:0x31edb69ea05af702!8m2!3d19.2208508!4d-99.2030581!16s%2Fg%2F11g6qpbkfp?hl=es-419&entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D${encodeURIComponent(direccion)}`;

        // Abre Google Maps en una nueva pestaña
        window.open(url, '_blank');
    });
}


