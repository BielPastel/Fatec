function calculo(){
    let cateto1 = Number (document.getElementById("cateto1").value)
    let cateto2 = Number (document.getElementById("cateto2").value)

    let hipotenusa = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2)) 

    document.getElementById("hipotenusa").innerHTML = "Hipotenusa = " + hipotenusa
}