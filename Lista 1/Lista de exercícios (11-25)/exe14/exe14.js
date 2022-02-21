function calculo(){
    
    let diaN = Number(document.getElementById("diaN").value);
    let mesN = Number(document.getElementById("mesN").value);
    let anoN = Number(document.getElementById("anoN").value);
    let dia = Number(document.getElementById("dia").value);
    let mes = Number(document.getElementById("mes").value);
    let ano = Number(document.getElementById("ano").value);

    let diasN = ((mesN * 30.4166667) + diaN)
    
    let dias = ((mes * 30.4166667) + (((ano - anoN) * 12) * 30.4166667) + dia)

    let totalDia = dias - diasN
    let totalMes = totalDia / 30.4166667
    let totalAno = totalMes / 12
    let totalSemanas = totalDia / 7

    document.getElementById("idadeAnos").innerHTML = "Idade em anos: " + totalAno.toFixed(0) + " anos."
    document.getElementById("idadeMeses").innerHTML = "Idade em meses: " + totalMes.toFixed(0) + " meses."
    document.getElementById("idadeDias").innerHTML = "Idade em dias: " + totalDia.toFixed(0) + " dias."
    document.getElementById("idadeSemanas").innerHTML = "Idade em Semanas: " + totalSemanas.toFixed(0) + " semanas."

}