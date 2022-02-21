function calculo(){
    let dividendo = Number (document.getElementById("dividendo").value)
    let divisor = Number (document.getElementById("divisor").value)

    if (divisor == 0) {
        alert("O divisor não pode ser igual a 0")
      } else {
        let quociente = (dividendo / divisor)

        document.getElementById("quociente").innerHTML = "Quociente: " + quociente

        /*Não utilizei --toFixed(2)-- pois na divisão os demais números são importantes */
    }
    

}