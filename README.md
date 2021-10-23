<h1 align="center">
Desafio de forumário - Nicole
</h1>

## Autor

- **Nicole Ferreira Silva**
- **Idade:** 22 
- **Tipo de deficiência:** Auditiva

### Tecnologias
- [x] HTML
- [x] CSS
- [x] JavaScript
- [x] Visual Studio Code

### Objetivo
O formulário de cadastro foi criado em HTML, CSS e uso de JavaScript para validar o CPF e os dados como alert.

### Descrição do site:

## HTML
Uso <tag> `form` para criar o formulário e agrupar os elementos usados HTML entre:
- `div`
- `span`
- `input`
- `select`
- `option`

```html
<form accept="#" id="form" method="POST" name="formulario">
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
Duas funções criados entre validaCPF para validar o especificamente o CPF e validacaoDados para verificar os dados de inputs.

- Dentro de função validacaoDados tem duas variáveis entre valcpf para pegar o input pelo CPF e resultadoValidacao mostra o resultado após digitiar o núemro de CPF.
```js
var valcpf = document.getElementById("DigitarCPF").value;
var resultadoValidacao = validaCPF(valcpf);
```

- Essa função que valida o CPF seja especifico o CPF caso digitar o número incorreto e retorna a mensagem diz "não é válido", se for verdadeiro retorna "é válido".
```js
 function validaCPF(valcpf) {
  if (valcpf.length != 11) {
    return false;
  } else {
    return true;
  }
}
```

