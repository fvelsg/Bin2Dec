let binary = "100101111110011001"
let invertido = inverterArray(binary)
let resultado = binToDec(invertido)

binary = binary.split("")

function inverterArray(arr){
    let tamanhoArray = arr.length -1
    let arrayInvertido = []
    for(tamanhoArray;tamanhoArray>=0;tamanhoArray--){
        arrayInvertido.push(arr[tamanhoArray])
    }
    return arrayInvertido
}

function binToDec(arr){
    let result = 0
    let tamanhoArr = arr.length
    for(let i=0; i<tamanhoArr;i++){
        if(arr[i]==1){
            result += 2**i
        }
    }
    return result
}

console.log(resultado)

