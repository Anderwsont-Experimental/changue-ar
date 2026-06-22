const FECHA_INFINITA = "01/01/3000";

let changueadores = [];
let tareas = [];
let asignaciones = [];

function parseCSV(texto) {

    const lineas = texto.trim().split("\n");

    const encabezado = lineas.shift().split(";");

    return lineas.map(linea => {

        const valores = linea.split(";");

        let objeto = {};

        encabezado.forEach((campo, i) => {

            objeto[campo.trim()] = valores[i]?.trim();

        });

        return objeto;

    });

}

async function cargarDatos() {

    const datosChangueadores =
        await fetch("data/changueadores.csv")
            .then(r => r.text());

    const datosTareas =
        await fetch("data/tareas.csv")
            .then(r => r.text());

    const datosAsignaciones =
        await fetch("data/asignaciones.csv")
            .then(r => r.text());

    changueadores =
        parseCSV(datosChangueadores);

    tareas =
        parseCSV(datosTareas);

    asignaciones =
        parseCSV(datosAsignaciones);

}

function generarPublicaciones() {

    const contenedor =
        document.getElementById(
            "contenedor-servicios"
        );

    contenedor.innerHTML = "";

    const publicaciones = [];

    asignaciones.forEach(asignacion => {

        if (
            asignacion.fechaFin !== FECHA_INFINITA
        ) {
            return;
        }

        const changueador =
            changueadores.find(c =>
                c.idChangueador ===
                asignacion.idChangueador
            );

        if (!changueador) {
            return;
        }

        if (
            changueador.fechaBaja !==
            FECHA_INFINITA
        ) {
            return;
        }

        const tarea =
            tareas.find(t =>
                t.idTarea ===
                asignacion.idTarea
            );

        if (!tarea) {
            return;
        }

        publicaciones.push({

            prestador:
                `${changueador.nombre} ${changueador.apellido}`,

            servicio:
                tarea.nombre,

            descripcion:
                tarea.descripcion,

            zona:
                changueador.zona,

            precio:
                asignacion.precioUSD

        });

    });

    publicaciones.forEach(pub => {

        const tarjeta =
            document.createElement("div");

        tarjeta.className =
            "tarjeta";

        tarjeta.innerHTML = `

            <h3>${pub.servicio}</h3>

            <p>
                ${pub.descripcion}
            </p>

            <p>
                Prestador:
                ${pub.prestador}
            </p>

            <p>
                Zona:
                ${pub.zona}
            </p>

            <p class="precio">
                USD ${pub.precio}
            </p>

        `;

        contenedor.appendChild(
            tarjeta
        );

    });

    document.getElementById(
        "cantChangueadores"
    ).textContent =
        changueadores.length;

    document.getElementById(
        "cantTareas"
    ).textContent =
        tareas.length;

    document.getElementById(
        "cantAsignaciones"
    ).textContent =
        asignaciones.length;

    document.getElementById(
        "cantPublicaciones"
    ).textContent =
        publicaciones.length;

}

async function iniciar() {

    await cargarDatos();

    generarPublicaciones();

}

iniciar();