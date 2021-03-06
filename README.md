<h1 align="center">
Desafio de forumário - Nicole
</h1>

## Autor

- **Nicole Ferreira Silva**
- **Idade:** 22 
- **Tipo de deficiência:** Auditiva
- [Linkedin](https://www.linkedin.com/in/nicole-ferreira-8438a4139/)

### Tecnologias
- [x] HTML
- [x] CSS
- [x] JavaScript
- [x] Visual Studio Code

### Objetivo
O formulário de cadastro foi criado em HTML, CSS e uso de JavaScript para validar o CPF e os dados como `alert`.

### Descrição do site:

## HTML
Uso <tag> `form` para criar o formulário e agrupar os elementos usados HTML entre:
- `div`
- `span`
- `input`
- `select`
- `option`

```html
<form accept="#">
<span class="...">...</span>
<input id="..." type="text" name="..." placeholder="..." required
<select name="...">
<option>...</option>
```

## CSS
As classes de alguns elementos são customizados entre:
 ```css
.formulario-usuario {...}
.titulo {...}
.sub-titulo {...}
.campo {...}
.controle {...}
.botao {...}
.sucesso {...}
.erro {...}
```

## JavaScript
Duas funções criadas entre **validaCPF** para validar o especificamente o CPF e **validacaoDados** para verificar os dados de inputs.

- Dentro dessa função **validacaoDados** tem duas variáveis entre **valcpf** para pegar o `input` CPF e **resultadoValidacao** mostra o resultado após digitiar o número de CPF.

```js
var valcpf = document.getElementById("DigitarCPF").value;
var resultadoValidacao = validaCPF(valcpf);
```

- Essa função valida o CPF seja especifico, caso o usuário digita o número incorreto e retorna a mensagem diz "não é válido", e se for verdadeiro retorna "é válido".

```js
 function validaCPF(valcpf) {
  if (valcpf.length != 11) {
    return false;
  } else {
    return true;
  }
}
```
 
- Variáveis criadas que tem os dados como nome e outros, são usados pelo `id` em HTML e estão no `if` caso não tiver o valor e informa a mensagem "não é informado". E tem o `alert` que informa "O cadastro enviado".

```js
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
```

## Referência:

- [Formulário HTML e CSS](https://www.youtube.com/watch?v=okbByPWS1Xc&t=662s)
- [Validador de CPF](https://xpcorp.gama.academy/aluno/playlist/243/1312)
- [Validação de dados em JS](https://medium.com/@jezmael/como-validar-os-dados-de-um-formul%C3%A1rio-com-javascript-abdc5a5fba67)
