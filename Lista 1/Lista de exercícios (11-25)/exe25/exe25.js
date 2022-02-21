function calculo(){
    let horas = Number (document.getElementById("horas").value)
    let minutos = Number (document.getElementById("minutos").value)

    let horasMinutos = horas * 60
    let totalMinutos = horasMinutos + minutos
    let segundos = totalMinutos * 60

    document.getElementById("horasMinutos").innerHTML = "Horas em minutos: " + horasMinutos
    document.getElementById("totalMinutos").innerHTML = "Total de minutos: " + totalMinutos
    document.getElementById("segundos").innerHTML = "Total de minutos em segundos: " + segundos

}