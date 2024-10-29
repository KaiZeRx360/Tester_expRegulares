const expresionInput = document.getElementById("expresion");
const cadenaPruebaInput = document.getElementById("cadenaPrueba");
const resultado = document.getElementById("resultado");

const validarExpresion = () => {
    const expresion = expresionInput.value;
    const cadenaPrueba = cadenaPruebaInput.value.trim();

    
    if (!cadenaPrueba) {
        resultado.innerHTML = "";
        return;
    }

    try {
        const regex = new RegExp(expresion);
        const esCoincidente = regex.test(cadenaPrueba);

        resultado.className = esCoincidente ? "match" : "no-match"; 
        resultado.innerHTML = esCoincidente
            ? `Coincide con la expresión: ${cadenaPrueba.replace(regex, match => `<span class="highlight">${match}</span>`)}`
            : "No coincide con la expresión.";
    } catch {
        resultado.className = "no-match";
        resultado.innerHTML = "Expresión inválida.";
    }
};


expresionInput.addEventListener("input", validarExpresion);
cadenaPruebaInput.addEventListener("input", validarExpresion);
