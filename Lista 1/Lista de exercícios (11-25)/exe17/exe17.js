function calculo(){
    let raio = Number (document.getElementById("raio").value)

    let comprimento = 2 * 3.14159265 * raio
    let area = 3.14159265 * (raio * raio)
    let volume = 4/3 * (3.14159265 * (raio * raio * raio))

    document.getElementById("comprimento").innerHTML = "Comprimento da circunferência: " + comprimento.toFixed(2) + "cm"
    document.getElementById("area").innerHTML = "Área da circunferência: " + area.toFixed(2) + "cm²"
    document.getElementById("volume").innerHTML = "Volume da circunferência: " + volume.toFixed(2) + "cm³"

}