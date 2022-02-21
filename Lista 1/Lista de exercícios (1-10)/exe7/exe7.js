function calculo(){
    let peso = Number (document.getElementById("peso").value)

    let peso1 = (peso * (15/100))
    let maisPesado = peso1 + peso

    let peso2 = (peso * (20/100))
    let maisLeve = peso - peso2
    
    document.getElementById("engordar").innerHTML = "Caso engorde, seu novo peso será: " + maisPesado.toFixed(2) + "Kg."
    document.getElementById("emagrecer").innerHTML =  "Caso emagreça, seu novo peso será: " + maisLeve.toFixed(2) + "Kg."
}