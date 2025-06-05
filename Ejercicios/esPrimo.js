let num = prompt("Ingresa un numero para saber si es primo");
alert(`Vamos determinar si es primo el numero ${num}`);

let contador = 0;
for(let i = 1; i<=num; i++){
    if(num%i===0) contador ++;
}

alert(contador <=2 ? "Es primo" : "No es primo");