// let validar = false

// if(validar) {
//     console.log("Variable verdadera")
// }

// let fruta = "pera"
// let mes = "mayo"

// if(fruta == "mandarina") {
//     console.log("Esta es una fruta del otoño")
// } else if (fruta == "frutilla") {
//     console.log("Esta es una fruta de la primavera")
// } else {
//     console.log("Banana o manzana son frutas de todo el año")
// }

// OR ||

// if(fruta == "mandarina" || mes == "abril") {
//     console.log("Puede ser que sea otoño")
// }

// AND &&
// if(fruta == "mandarina" && mes == "abril") {
//     console.log("Puede ser que sea otoño")
// }

// if(fruta == "mandarina" && (mes == "marzo" || mes == "abril" || mes == "mayo" || mes == "junio")) {
//     console.log("Puede ser que sea otoño")
// }


// let edad = 18

// if(edad >= 18) {
//     console.log("Podes comprar en la vinoteca")
// } else {
//     console.log("No tenes autorizacion")
// }


// FOR

// for("desde"; "hasta"; "actualizacion") {
//     // bloque de codigo a ejecutar
// }

// for (let i=1; i<=10; i++) {
//     console.log(i)
// }

// let numero = parseInt(prompt("Ingrese la tabla de multiplicar que desea"))
// console.log("Tabla de multiplicar del " + numero)
// for(let i=1; i<=15; i++) {
//     let resultado = numero*i
//     console.log(numero + "x" + i + ": " + resultado)
// }


// WHILE

// let continuar = true
// while(continuar) {
//     let numero = parseInt(prompt("Ingrese la tabla de multiplicar que desea"))
//     console.log("Tabla de multiplicar del " + numero)
//     for(let i=1; i<=5; i++) {
//         let resultado = numero*i
//         console.log(numero + "x" + i + ": " + resultado)
//     }

    // let confirmacion = prompt("Desea hacer otra operacion? (si/no)").toLowerCase()
    // if(confirmacion == "no") {
    //     continuar = false
    //     console.log("gracias!!")
    // }
// }


// SWITCH-CASE

let continuar = true 
while(continuar) {
    let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, 2 para extraccion, 3 para deposito"))

    switch(menu) {
        case 1:
            alert("Total de la cuenta: $750.000")
            break
        case 2:
            alert("Limite de extraccion: $70.000")
            break
        case 3:
            alert("Limite de deposito: $50.000")
            break
        default:
            alert("Opcion incorrecta")
    }

    let confirmacion = prompt("Desea hacer otra operacion? (si/no)").toLowerCase()
    if(confirmacion == "no") {
        continuar = false
        alert("Retire su tarjeta")
    }
}

