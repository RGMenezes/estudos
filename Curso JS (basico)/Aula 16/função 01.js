function parimp (n) {

    if (n % 2==0){
        return 'par!'
    } else {
        return 'ímpar!'
    }

}
//console.log(parimp(11))
let num = 1286 
let res = parimp (num)
console.log(`O número ${num} é ${res}`)