function calculo(){
    let minimo = Number (document.getElementById("minimo").value)
    let salario = Number (document.getElementById("salario").value)

    let resultado = (salario / minimo)
    let resto = (salario % minimo)


    document.getElementById("resultado").innerHTML = "O funcionário recebe " + resultado.toFixed(1) + " salário(s) mínimo(s)"
    document.getElementById("resto").innerHTML = resultado.toFixed(0) + " salário(s) mínimo(s) + R$" + resto
}