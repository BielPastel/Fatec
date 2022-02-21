function calculo(){
    let lado = Number (document.getElementById("lado").value)

    let diagonal = lado * ( lado - 3 ) / 2

    document.getElementById("diagonais").innerHTML = "Número de diagonais: " + diagonal + "."
}