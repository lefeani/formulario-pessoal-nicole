function validaCPF(valcpf) {
  // A função chamada ValidaCPF (cpf) == parâmetro dentro (cpf)
  if (valcpf.length != 11) {
    return false;
  } else {
    return true;
  }
}

function validacaoDados() {
  // A função chamada validacaoDados
  var valcpf = document.getElementById("DigitarCPF").value; // criei uma variável chamada cpf
  var resultadoValidacao = validaCPF(valcpf); // outra variável resultadoValidacao

  if (resultadoValidacao) {
    // se condição for verdadeiro
    document.getElementById("sucesso").style.display = "block"; // mostra o sucesso após digitar o número correto.
  } else {
    // se condição for falso
    document.getElementById("erro").style.display = "block"; // mostra o erro após digitar o número errado.
  }

  const nome = document.getElementById("nome");
  const endereco = document.getElementById("endereco");
  const numero = document.getElementById("numero");
  const celular = document.getElementById("celular");

  if (nome.value == "") {
    alert("Nome não é informado");
    nome.focus;
    return;
  }
  if (DigitarCPF.value == "") {
    alert("CPF não é informado");
    DigitarCPF.focus;
    return;
  }
  if (endereco.value == "") {
    alert("Endereço não é informado");
    endereco.focus;
    return;
  }
  if (numero.value == "") {
    alert("Número não é informado");
    numero.focus;
    return;
  }
  if (celular.value == "") {
    alert("Celular não é informado");
    celular.focus;
    return;
  }
  alert("O cadastro enviado!");
}
