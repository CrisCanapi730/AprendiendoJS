function contarNumerosArray(numeros){
    let resultado = 0;
    for(let i = 0; i<numeros.length; i++){
        resultado += numeros[i];
    }
    return resultado;
}


console.log('El resultado es: ', contarNumerosArray([1,2,3,4]));
console.log('El resultado es: ', contarNumerosArray([8,7,9]));
console.log('El resultado es: ', contarNumerosArray([1,2,3,4,5,6,7,8,9,10]));