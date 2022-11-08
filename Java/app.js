let valorAire
let total= 0

let carrito = [];

const productos = [
    { titulo: "harina", precio: 150 },

    { titulo: "galletitas", precio: 120 },

    { titulo: "cerveza", precio: 200 },

    { titulo: "cocacola", precio: 350 },

    { titulo: "azucar", precio: 170 },

    { titulo: "yerba", precio: 500 }

];


function totalApagar() {
    console.log("Total a pagar:" + " " + "$" + total)
    
}

function algoMas() {
    let op = prompt("Desea seguir comprando? si/no")
    switch (op) {

        case "si":
            agregarAlgoMas()
            break

        case "no":
        console.log("TU CARRITO")
        console.log(carrito.join("-"))    
        totalApagar()
            break
        default:
            alert("OPCION NO VALIDA")
            algoMas()
    }

}


function agregarHarina() {
    carrito.push("Harina")
    valorAire=150
    total= total+valorAire
    valorAire=0
    algoMas()
}

function agregarGalletitas() {
    carrito.push("galletitas");
    valorAire=120
    total= total+valorAire
    valorAire=0
    algoMas()
}

function agregarCerveza() {
    carrito.push("cerveza") ;
    valorAire=200
    total= total+valorAire
    valorAire=0
    algoMas()
}

function agregarCocacola() {
    carrito.push("cocacola");
    valorAire=350
    total= total+valorAire
    valorAire=0
    algoMas()
}

function agregarAzucar() {
    carrito.push("azucar");
    valorAire=170
    total= total+valorAire
    valorAire=0
    algoMas()
}

function agregarYerba() {
    carrito.push("yerba");
    valorAire=500
    total= total+valorAire
    valorAire=0
    algoMas()
}


function agregarAlgoMas() {

    let cod = prompt("Ingrese el codigo del producto deseado")

    switch (cod) {
        case "0":
            agregarHarina()

            break

        case "1":
            agregarGalletitas()

            break

        case "2":
            agregarCerveza()

            break

        case "3":
            agregarCocacola()

            break

        case "4":
            agregarAzucar()

            break

        case "5":
            agregarYerba()

            break

        case "pagar":

            totalApagar()

            break

        default:
            console.log("Codigo inexistente")

    }

}




function agregarAlCarrito() {
    alert("NUESTRA LISTA DE PRECIOS EN CONSOLA")

    for (let i = 0; i < 6; i += 1) {
       
        console.log("codigo" + " " + i + " " + productos[i].titulo + " " + "$" + productos[i].precio)
    }
    console.log("///////////////////////////////////////")
    let cod = prompt("Ingrese el codigo del producto deseado")

    switch (cod) {
        case "0":
            agregarHarina()

            break

        case "1":
            agregarGalletitas()

            break

        case "2":
            agregarCerveza()

            break

        case "3":
            agregarCocacola()

            break

        case "4":
            agregarAzucar()

            break

        case "5":
            agregarYerba()

            break

        case "pagar":

            totalApagar()

            break

        default:
            console.log("Codigo inexistente")

    }

}



function deseaEntrar(quiere) {
    if (quiere === "si") {
        agregarAlCarrito()
    } else if (quiere === "no") {
        alert("Hasta luego!")
    } else {
        alert("Esa opcion no es valida")
        entrarTienda()
    }
}


function entrarTienda() {
    let quiere = prompt("Desea comprar algo de nuestra tienda?")
    deseaEntrar(quiere)
}


entrarTienda()