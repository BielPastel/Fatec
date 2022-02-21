function calculo(){
    
    let maior = Number (document.getElementById("maior").value)
    let menor = Number (document.getElementById("menor").value)

    if (menor > maior){

        alert("ERRO: a 'diagonal menor' excede o valor da 'diagonal maior'.")

    }else{

        let area = ((maior * menor) / 2)

        document.getElementById("area").innerHTML = "Área: " + area + "cm²"
    }
}