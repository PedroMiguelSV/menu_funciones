let salida = "rangoResultado";

function suma() {
    let numero1 = parseInt(prompt("Ingrese numero 1"));
    let numero2 = parseInt(prompt("Ingrese numero 2"));
    let resultado;
    if (!isNaN(numero1) && !isNaN(numero2)) {
        resultado = numero1 + numero2;
        mostrarResultado(resultado);
    } else {
        alert("Ingrese numeros validos");
    }
}

function resta() {
    let numero1 = parseInt(prompt("Ingrese numero 1"));
    let numero2 = parseInt(prompt("Ingrese numero 2"));
    let resultado;
    if (!isNaN(numero1) && !isNaN(numero2)) {
        resultado = numero1 - numero2;
        mostrarResultado(resultado);
    } else {
        alert("Ingrese numeros validos");
    }
}

function multiplicacion() {
    let numero1 = parseInt(prompt("Ingrese numero 1"));
    let numero2 = parseInt(prompt("Ingrese numero 2"));
    let resultado;
    if (!isNaN(numero1) && !isNaN(numero2)) {
        resultado = numero1 * numero2;
        mostrarResultado(resultado);
    } else {
        alert("Ingrese numeros validos");
    }
}

function division() {
    let numero1 = parseInt(prompt("Ingrese numero 1"));
    let numero2 = parseInt(prompt("Ingrese numero 2"));
    let resultado;
    if (!isNaN(numero1) && !isNaN(numero2) && numero2 !== 0) {
        resultado = numero1 / numero2;
        mostrarResultado(resultado);
    } else {
        alert("Ingrese numeros validos y con divisor distinto de cero");
    }
}

function rangoDeNumeros() {
    let numero1 = parseInt(prompt("Ingrese numero 1"));
    let numero2 = parseInt(prompt("Ingrese numero 2"));
    let resultado = "";
    if (!isNaN(numero1) && !isNaN(numero2)) {
        for (let i = numero1; i <= numero2; i++) {
            resultado += i + ",";
        }
        mostrarResultado(resultado);
    } else {
        alert("Ingrese numeros validos");
    }
}

function mostrarResultado(resultado) {
    let elementoSalida = document.getElementById(salida);
    if (elementoSalida) {
        elementoSalida.innerText = "El resultado de la operacion es: " + resultado;
    } else {
        console.error("No se encontró el elemento");
    }
}
