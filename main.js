import { adicionaNaLista, getLista, limpaLista } from "./lista.js";

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

attListaOrdenada();

btnAdicionar.addEventListener('click', adicionaItemDaEntrada);

btnLimpar.addEventListener('click', limparListaOrdenada);

function limparListaOrdenada(){
    limpaLista();
    attListaOrdenada();
}

function adicionaItemDaEntrada(){
    const valor = pEntrada.textContent;
    adicionaNaLista(valor);
    pEntrada.textContent = "";
    attListaOrdenada();
}

function attListaOrdenada(){
    const lista = getLista();
    olItens.innerHTML = "";
    for(let i = 0; i < lista.length; i++){
        adcElementoLista(lista[i]);
    }
}

function adcElementoLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
