const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

adcElementoLista("Primeiro");
adcElementoLista("Segundo");
adcElementoLista("Terceiro");

function adcElementoLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
