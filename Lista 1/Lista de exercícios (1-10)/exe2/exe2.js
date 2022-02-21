function calculo(){
    let fatorUm = Number (document.getElementById("fatorUm").value)
    let fatorDois = Number (document.getElementById("fatorDois").value)
    let fatorTres = Number (document.getElementById("fatorTres").value)

    let produto = (fatorUm * fatorDois * fatorTres)

    document.getElementById("produto").innerHTML = "Produto: " + produto

}