import { esPrimo } from "./Ejercicios/esPrimo.js";

const btn = document.getElementById("verificar");
const resultado = document.getElementById('resultado');
const numero = document.getElementById('numero');

btn.addEventListener('click', ()=>{
    const num = parseInt(numero.value);
    resultado.textContent = esPrimo(num);
});