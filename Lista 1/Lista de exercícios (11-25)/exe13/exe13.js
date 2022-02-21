function tabuada(){
  let valor = Number (document.getElementById("valor").value) //value é para pegar apenas o valor recebido pelo input (number é para transformar o texto recebido em numero)
  let resultado = document.getElementById("resultado") //utilizando "let" a variavel só vai estar associada a function tabuada() / ao usar "var" a variavel sera "global"
  let tabuada = ''       //'' é o mesmo que vazio

  for(let count=0; count<=10 ; count++){
    tabuada +=  valor + " x " + count + " = " + valor * count +"<br/>"
  }
  resultado.innerHTML = tabuada //innerHTML joga o conteudo dentro do elemento (para quebrar linha utilizar "<br/>" )
  //"tabuada += ..."   é o mesmo que   "tabuada = tabuada + ...""
}