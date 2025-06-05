function esPrimo(numero){
    let contador = 0;
    for(let i = 1; i<=num; i++){
        if(num%i===0) contador ++;
    }
    return contador <=2 ? "Es primo" : "No es primo";
}