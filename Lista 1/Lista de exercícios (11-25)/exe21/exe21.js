function calculo(){
    let salarioMinimo = Number (document.getElementById("salarioMinimo").value)
    let horasTrabalhadas = Number (document.getElementById("horasTrabalhadas").value)
    let horasExtras = Number (document.getElementById("horasExtras").value)

    let trabalhada = 1/8 * salarioMinimo
    let extra = 1/4 * salarioMinimo

    let bruto = horasTrabalhadas * trabalhada
    let extraValor = horasExtras * extra

    let salario = bruto + extraValor 

    document.getElementById("salario").innerHTML = "Seu salário é R$" + salario + "."
}