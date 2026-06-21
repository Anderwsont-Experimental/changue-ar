const contenedor =
    document.getElementById(
        "contenedor-servicios"
    );

fetch("data/publicaciones.csv")
.then(response => response.text())
.then(texto => {

    const filas =
        texto.trim().split("\n");

    filas.shift();

    filas.forEach(fila => {

        const datos =
            fila.split(";");

        const tarjeta =
            document.createElement("div");

        tarjeta.className =
            "tarjeta";

        tarjeta.innerHTML = `

            <h3>${datos[2]}</h3>

            <p>
                ${datos[3]}
            </p>

            <p>
                Zona:
                ${datos[5]}
            </p>

            <p class="precio">
                USD ${datos[4]}
            </p>

        `;

        contenedor.appendChild(
            tarjeta
        );

    });

});