function calculo(){
    let salario = Number (document.getElementById("salario").value)
    let boleto1 = Number (document.getElementById("boleto1").value)
    let boleto2 = Number (document.getElementById("boleto2").value)

    let juros1 = (boleto1 * 2/100)
    let juros2 = (boleto2 * 2/100)
    let jurosTotal = juros1 + juros2
    let debito = jurosTotal + boleto1 + boleto2 
    boleto1 = boleto1 + (boleto1 * 2/100)
    boleto2 = boleto2 + (boleto1 * 2/100)

    let salarioFinal = salario - (boleto1 + boleto2)

    document.getElementById("juros1").innerHTML = "Juros boleto 1: R$" + juros1.toFixed(2)
    document.getElementById("juros2").innerHTML = "Juros boleto 2: R$" + juros2.toFixed(2)
    document.getElementById("jurosTotal").innerHTML = "Juros Total: R$" + jurosTotal.toFixed(2)
    document.getElementById("debito").innerHTML = "Valor à pagar: R$" + debito.toFixed(2)


    document.getElementById("resultado").innerHTML = "Restam R$" + salarioFinal.toFixed(2) + " de seu salário."
}