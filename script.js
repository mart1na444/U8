let edad = Number(prompt("¿Cuántos años tenés?"));
let genero = prompt("¿Sos mujer u hombre?");

if ((genero === "mujer" && edad >= 60) || (genero === "hombre" && edad >= 65)) {
    alert("Ya estás en edad de jubilarte.");
} else {
    alert("Todavía no estás en edad de jubilarte.");
}

