// Obtém a referência do elemento select
var select = document.getElementById("ano");

// Obtém o ano atual
var anoAtual = new Date().getFullYear();

// Loop para gerar as opções de 1950 a 2023
for (var ano = 1950; ano <= anoAtual; ano++) {
    var option = document.createElement("option"); // Cria um elemento option
    option.value = ano; // Define o valor do option como o ano
    option.text = ano; // Define o texto do option como o ano
    select.add(option); // Adiciona o option ao select
}


// Obtém a referência do elemento select
var select = document.getElementById("mes");

// Array com os nomes dos meses
var meses = ["Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// Loop para gerar as opções com os meses
for (var i = 0; i < meses.length; i++) {
    var option = document.createElement("option"); // Cria um elemento option
    option.value = i + 1; // Define o valor do option como o índice do mês + 1
    option.text = meses[i]; // Define o texto do option como o nome do mês
    select.add(option); // Adiciona o option ao select
}

// Obtém a referência do elemento select
var dia = document.getElementById("dia");

// Loop para adicionar as opções de números de 1 a 31
for (var numero = 1; numero <= 31; numero++) {
    var option = document.createElement("option"); // Cria um elemento option
    option.value = numero; // Define o valor do option como o número
    option.text = numero; // Define o texto do option como o número
    dia.add(option); // Adiciona o option ao select de números
}

let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

cep.value = '';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
})

function popularForm(resposta) {
    
    if("erro" in resposta) {
        alert('CEP não encontrado')
        return;
    }
    
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}