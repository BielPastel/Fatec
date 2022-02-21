function calculo(){
    let reais = Number (document.getElementById("reais").value)
    
    let dolar = reais / 1.8
    let marcoAlemao = reais / 2
    let libraEsterlina = reais / 3.57

    document.getElementById("dolar").innerHTML = "Dolar: $" + dolar.toFixed(2)
    document.getElementById("marcoAlemao").innerHTML = "marcoAlemao: $" + marcoAlemao.toFixed(2)
    document.getElementById("libraEsterlina").innerHTML = "libraEsterlina: $" + libraEsterlina.toFixed(2)
}