function calculo(){
    let minuendo = Number(document.getElementById("minuendo").value)
    let subtraendo = Number(document.getElementById("subtraendo").value)

    let resto = (minuendo - subtraendo)
    
    document.getElementById("resto").innerHTML = "Resto: " + resto
}   