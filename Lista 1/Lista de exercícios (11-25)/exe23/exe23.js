function calculo(){
    let angulo1 = Number (document.getElementById("angulo1").value)
    let angulo2 = Number (document.getElementById("angulo2").value)
    
    if (angulo1 + angulo2 >= 180){
        alert("ERROR: isso não é um triângulo.")
    }else{
        if (angulo1 <= 0 ){
                alert ("O valor de ➤Ângulo1 não pode ser menor ou igual a 0 (ZERO) ou exceder o limite de 178°")
        }else{
            if (angulo2 <= 0 ){
                    alert ("O valor de ➤Ângulo2 não pode ser menor ou igual a 0 (ZERO) ou exceder o limite de 178°")
            }else{
                let angulo3 = 180 - (angulo1 + angulo2)
                document.getElementById("angulo3").innerHTML = "➤ Ângulo 3: " + angulo3 + "°"
            }
        }
    }
}