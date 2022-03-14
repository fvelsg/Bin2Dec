let valor = 11000110011 //1587
let operacao = 1 // define qual operação vai fazer, se será de binário para decimal ou o contrário

function binToDec(num){
  num = num.toString()
 num = num.split("")
 num = num.reverse()
 let res=0
 for(let i=0; i<num.length;i++){
  if (num[i]==1){
   res += 2**i
   }else if(num[i]>1){
    return ("ERRO NÚMERO NÃO BINÁRIO")
   }
 }
 return res
}

function decToBin(num){
 let result=[]
 let numR= 0

 while (num>0){
   numR = num % 2
   num = Math.floor(num / 2)
   result.unshift(numR)
 }
 return arrayToString(result)
}
 
function arrayToString (arr){
 let strg=""
 for(let i=0;i<arr.length;i++){
  strg+=arr[i]
 }
 return strg
}

function definirOperacao(opr, num){
 if (opr === 1){
  return binToDec(num)
 } else if (opr === 2){
  return decToBin(num)
 }
 return "ERRO OPERAÇÃO INVÁLIDA"
}

console.log(definirOperacao(operacao,valor))





/*let binary = "100101111110011001"
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

console.log(resultado)*/
