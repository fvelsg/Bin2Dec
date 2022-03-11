let binary = "100101111110011001"
let resultado = binToDec(binary)

function inverterArray(arr){   
    arr.split("")
    let tamanhoArray = arr.length -1
    let arrayInvertido = []
    for(tamanhoArray;tamanhoArray>=0;tamanhoArray--){
        arrayInvertido.push(arr[tamanhoArray])
    }
    return arrayInvertido}
function binToDec(arr){
    arr = inverterArray(arr) //aqui a funçao de inverter o numero binário
    let result = 0
    let tamanhoArr = arr.length
    for(let i=0; i<tamanhoArr;i++){
        if(arr[i]==1){
            result += 2**i
        }
    }
    return result}

console.log(resultado)
