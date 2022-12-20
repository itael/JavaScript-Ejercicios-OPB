let factorial = 1
let numFAc = 5

if(numFAc>1){
    while (numFAc >= 1) {
        factorial *= numFAc
        numFAc--
    }
    console.log(factorial)
}else{
    console.log("No es un número válido")
}
