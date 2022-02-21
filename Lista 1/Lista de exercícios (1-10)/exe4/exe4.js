function calculo(){
    let nota1 = Number (document.getElementById("nota1").value)
    let nota2 = Number (document.getElementById("nota2").value)

    let mediaPonderada = ((nota1 * 2) + (nota2 * 3)) / (2+3)

    document.getElementById("mediaPonderada").innerHTML = "Média Ponderada: " + mediaPonderada
}