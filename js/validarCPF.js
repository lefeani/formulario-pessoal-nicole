console.log("iniciando...");
function validaCPF(cpf) { // A função chamada ValidaCPF (cpf) == parâmetro dentro (cpf)
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false; 
    } else {
        var numeros = cpf.substring(0,9);   
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) { // i = indice
            soma += numeros.charAt(10 - i) * i; // soma += == soma = soma + numeros
        }
        console.log(soma);
        return true;
    }
   
}



function validacaoDados() { // A função chamada validacaoDados
    var cpf = document.getElementById('DigitarCPF').value; // criei uma variável chamada cpf
    var resultadoValidacao = validaCPF(cpf); // outra variável resultadoValidacao

    if (resultadoValidacao) { // se condição for verdadeiro
        document.getElementById("sucesso").style.display = 'block';
    } else { // se condição for falso
        document.getElementById("erro").style.display = 'block';
    }

}
