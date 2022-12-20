let factorial = 1
let numFAc = 10

if(numFAc >= 1){
    while (true) {
        factorial *= numFAc
        numFAc--
        if (numFAc === 1) 
            break
    }
    console.log(factorial)
}else{
    console.log("Ingrese un número válido")
}