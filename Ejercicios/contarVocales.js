let cadena = prompt("Ingresa una palabra para contar las vocales que tiene");
alert(`Vamos a contar las vocales de ${cadena}`);

let array = cadena.split("");
let contador = 0;

array.forEach(function(letra){
    // if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u')
    // {
    //     contador++;
    // }
    if('aeiou'.includes(letra.toLowerCase())) contador++;
})

alert(`El numero de vocales que tiene la cadena es: ${contador}`);