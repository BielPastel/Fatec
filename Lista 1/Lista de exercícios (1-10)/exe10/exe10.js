function calculo(){
    
    let lado = Number (document.getElementById("lado").value)

    let area = lado * lado

    document.getElementById("area").innerHTML = "Área: " + area + "cm²"
}