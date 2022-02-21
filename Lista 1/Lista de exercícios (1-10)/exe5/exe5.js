function calculo(){
    let valor = Number (document.getElementById("produto").value)

    let desconto = (valor * (10/100))
    let valorFinal = (valor - desconto)

    document.getElementById("descontoFinal").innerHTML = "O valor do desconto é de R$" + desconto.toFixed(2) + "."
    document.getElementById("valorFinal").innerHTML =  "Preço final R$" + valorFinal.toFixed(2) + "."
}