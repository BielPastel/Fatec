function calculo(){
    let comodo1 = Number (document.getElementById("comodo1").value)
    let comodo2 = Number (document.getElementById("comodo2").value)

    let area =  comodo1 * comodo2

    let potencia = area * 18

    document.getElementById("area").innerHTML = "Área: " + area + "m²"
    document.getElementById("potencia").innerHTML = "Potência necessária:  " + potencia + "W"
}