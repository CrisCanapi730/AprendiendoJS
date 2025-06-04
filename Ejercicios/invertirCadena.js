
let cadena = prompt("Ingresa una palabra para invertirla");
alert(`Vamos a invertir ${cadena}`);

let tam = cadena.length;
let aux = undefined;
let array = cadena.split("");
console.log(array);
console.log(`Tamaño de la cadena: ${tam}`);
console.log(`Tamaño del array: ${array.length}`);


for(let i=0 ; i<(tam/2); i++){
    aux = array[i];
    array[i] = array[tam-1-i];
    array[tam-1-i] = aux;
}
let arrayString = array.join("");

alert(`La cadena invertida es: ${arrayString}`);