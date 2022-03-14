let valor = 101011111011

function binToDec(num){
    let result = 0, i=0, resto=0
    while(num>=1){
        resto = num%10
        if(resto!= 0 && resto != 1){
            return "ERRO NUMERO NÃO BINÁRIO"
        }
        if(resto == 1){
            result += 2**i
        }
        num= Math.floor(num/10)
        i++
    }
    return result}

console.log(binToDec(valor))
