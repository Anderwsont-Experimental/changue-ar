# 🚀 Changue.AR

**Marketplace de changas y servicios cotidianos**

Proyecto desarrollado para la **Actividad Formativa N.º 2** de la materia **Algoritmos y Estructuras de Datos** (2026).

**Autor:** Guido Burgos

---

## 📖 Descripción

**Changue.AR** (del verbo *changuear*) es un e-commerce orientado a la oferta y búsqueda de servicios no regulados, multipropósito y no necesariamente profesionalizados.

Su objetivo es conectar personas con experiencia o idoneidad para realizar tareas diversas, dispuestas a ofrecerlas a cambio de una remuneración, con otras personas que tienen dichas necesidades pero carecen del tiempo, interés o conocimientos para realizarlas por sí mismas.

Entre los servicios posibles se incluyen tareas cotidianas como:

- Limpieza de patios y terrenos
- Paseo y cuidado de mascotas
- Lavado de vehículos
- Armado de muebles
- Mudanzas y traslado de objetos
- Acompañamiento para trámites
- Mantenimiento general del hogar

---

## 🌐 Aplicación publicada

🔗 https://anderwsont-experimental.github.io/changue-ar/

---

## 🗃️ Modelo de datos

La aplicación utiliza archivos secuenciales basados en registros para almacenar y relacionar la información.

### Registros utilizados

- Changueadores
- Tareas
- Asignaciones

### Claves primarias

| Registro | Clave |
|-----------|-----------|
| Changueadores | `idChangueador` |
| Tareas | `idTarea` |
| Asignaciones | `idAsignacion` |

### Relaciones

- `asignaciones.idChangueador` → `changueadores.idChangueador`
- `asignaciones.idTarea` → `tareas.idTarea`

A partir de estas relaciones la aplicación genera dinámicamente las publicaciones activas mostradas al usuario.

---

## 🤖 Uso de Inteligencia Artificial

Durante todo el desarrollo se utilizó exclusivamente **ChatGPT** como herramienta de asistencia para:

- Diseño inicial de la solución.
- Revisión y refinamiento del modelo de datos.
- Generación de prototipos HTML/CSS/JavaScript.
- Discusión de alternativas de implementación.
- Documentación del proyecto.

### Conversación completa utilizada durante el desarrollo

🔗 https://chatgpt.com/share/6a37a7c6-96e8-83e9-a6a2-72af8923df08

---

## 🎥 Video demostrativo

🔗 https://youtu.be/IylvSOfOkaU

---

## 📚 Contexto académico

Este proyecto fue desarrollado con fines educativos para aplicar los conceptos de:

- Registros
- Claves primarias
- Archivos secuenciales
- Relación entre estructuras de datos
- Procesos de actualización de información

correspondientes a la Unidad 2 de la materia **Algoritmos y Estructuras de Datos** | **Facultad Regional Resistencia** | **Universidad Tecnológica Nacional**
