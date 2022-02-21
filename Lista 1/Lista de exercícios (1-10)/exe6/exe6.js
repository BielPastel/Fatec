function calcular(){
    
    //obter dados
    let salario = Number(document.getElementById("salario").value)
    let vendas = Number(document.getElementById("vendas").value)
    let porcentagem = Number(document.getElementById("porcentagem").value)

    //calcular comissao e total
    let comissao = vendas * porcentagem / 100
    let total = salario + comissao

    //saída dos dados
    document.getElementById("total").innerHTML = "O valor da comissão é R$" + comissao + " e o valor total é R$" + total

}