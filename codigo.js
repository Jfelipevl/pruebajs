
//Re ajuste salarial//
var getData = function(){
var Salario = document.getElementById("salario").value;
var dias_trabajados = document.getElementById("dias").value;
const numero_2 = 29260
var resultado = (numero_2 * dias_trabajados) - (Salario /= 30) * (dias_trabajados)

if (resultado < 0) {
    resultado = "0";
}

document.getElementById('lbResultado').innerHTML = "Reajuste salarial = " + resultado.toFixed();



}

