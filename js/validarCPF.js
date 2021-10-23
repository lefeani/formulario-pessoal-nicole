function validaCPF(cpf) { // A função chamada ValidaCPF (cpf) == parâmetro dentro (cpf)
    if (cpf.length != 11) {
        return false; 
    } else {
        return true;
    }
}

function validacaoDados() { // A função chamada validacaoDados
    var cpf = document.getElementById('DigitarCPF').value; // criei uma variável chamada cpf
    var resultadoValidacao = validaCPF(cpf); // outra variável resultadoValidacao

    if (resultadoValidacao) { // se condição for verdadeiro
        document.getElementById("sucesso").style.display = 'block'; // mostra o sucesso após digitar o número correto.
    } else { // se condição for falso
        document.getElementById("erro").style.display = 'block'; // mostra o erro após digitar o número errado.
    }
}