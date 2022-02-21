function calculo(){
    let celsius = Number (document.getElementById("celsius").value)

    let fahrenheit = (celsius * 1.8) + 32

    document.getElementById("fahrenheit").innerHTML = fahrenheit + " °F"
}