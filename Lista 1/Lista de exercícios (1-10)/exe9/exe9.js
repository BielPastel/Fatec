function calcular(){
    let baseMaior = Number(document.getElementById("baseMaior").value)
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let altura = Number(document.getElementById("altura").value)

    let area = ((baseMaior + baseMenor) * altura)/2

    document.getElementById("area").innerHTML = "A área do trapésio é: " + area + "cm²"

}