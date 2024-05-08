// function digamMYnombre(nombre){
// console.log(nombre)
// }
// digamMYnombre("Jordao")


// function somar(numero1,numero2){
//         TudoQuePasso=numero1+numero2


//         //RETURN POR ULTIMO


//         return TudoQuePasso
// }

//     const somaTudo = somar(10,50)

// console.log( somaTudo     + '    Resultado')



// const carrinhoCompres=[10,244,99,2,20,33,250]
// let valor = 0
// let valorSemDesconto = 0;
// let semDesconto=0
// carrinhoCompres.forEach(item => {
    
//     if(item > 30){
    
//         let desconto =  item *0.1;
//         let precoComDesconto = item -desconto
//         valor  += precoComDesconto
//         // return console.log( `Parabes você acaba de receber um desconto de 10% .O valor de sua compra eh de  ${precoComDesconto} `)
//     }else
//         semDesconto  += item

  
    
// })
// console.log(`´voce nao tem desconto oh bondoso namecusei jim. O valor de sua compra eh ${valor+semDesconto}`)

// function caixa(valor){
//     let item = valor

//     if(item > 30){
//         let desconto =  item *0.1;
//         let precoComDesconto = item -desconto
//         return console.log( `Parabes você acaba de receber um desconto de 10% .O valor de sua compra eh de  ${precoComDesconto} `)
//     }
//     let semDesconto = valor
//     console.log(`´voce nao tem desconto oh bondoso namecusei jim. O valor de sua compra eh ${valor}`)

//594,40
    
// }

// caixa(100)

// caixa(10)


const cart = [10,244,99,2,20,33,250]

let finalValue=0;

function calculateDiscont(price,discount){
    const result =(price * discount)/100
    return result;
}

cart.forEach(value =>{
    if(value >30){
    const desconto = calculateDiscont(value,10)

    finalValue += +(value - desconto)
    }
    else{
        finalValue += value
    }
})
 console.log(finalValue)