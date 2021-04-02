let checkPrato;
let tipoPrato;
let preçoPrato;

let checkBebida;
let tipoBebida;
let preçoBebida;

let checkSobremesa;
let tipoSobremesa;
let preçoSobremesa;

function selecionar_pratoPrincipal(prato, tipo) {
   
    const selecionado = document.querySelector(".Prato_Principal .selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    checkPrato = document.querySelector(prato);
    checkPrato.classList.add("selecionado");

    const Prato = document.querySelector(tipo);
    tipoPrato = Prato.innerHTML

    const Preço = document.querySelector(prato + ' .preço');
    preçoPrato = Preço.innerHTML
    conclusao_Pedido()
}

function selecionar_Bebida(bebida, tipo) {
   
    const selecionado = document.querySelector(".Bebidas .selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    checkBebida = document.querySelector(bebida);
    checkBebida.classList.add("selecionado");

    const Bebida = document.querySelector(tipo);
    tipoBebida = Bebida.innerHTML

    const Preço = document.querySelector(bebida +' .preço');
    preçoBebida = Preço.innerHTML
    conclusao_Pedido()
}


function selecionar_Sobremesa(sobremesa, tipo) {
   
    const selecionado = document.querySelector(".Sobremesas .selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    checkSobremesa = document.querySelector(sobremesa);
    checkSobremesa.classList.add("selecionado");

    const Sobremesa = document.querySelector(tipo);
    tipoSobremesa = Sobremesa.innerHTML

    const Preço = document.querySelector(sobremesa +' .preço');
    preçoSobremesa = Preço.innerHTML
    conclusao_Pedido()
}

function conclusao_Pedido() {

    const lista1 = checkPrato.classList.contains("selecionado");
    const lista2 = checkBebida.classList.contains("selecionado");
    const lista3 = checkSobremesa.classList.contains("selecionado");

    if ( lista3 === true && lista2 === true && lista1 === true) {
        const aberto = document.querySelector(".conclusao_pedido button");
        aberto.classList.remove("pedido_aberto");

        const fechado = document.querySelector(".conclusao_pedido button");
        fechado.classList.add("pedido_fechado");
        fechado.innerHTML = "Fechar Pedido";
    }

}

function confirmação_de_Pedido() {
    const fechado = document.querySelector(".conclusao_pedido button")
    
    if (fechado.classList.contains("pedido_fechado")=== true) {
       
        const confirmaçao = document.querySelector(".confirme_pedido");
        confirmaçao.classList.remove("oculto");
        
        const Pedido1 = document.querySelector('.pedido1 span');
        Pedido1.innerHTML = tipoPrato;
        const preçoPedido1 = document.querySelector('.pedido1 span:nth-of-type(2)');
        preçoPedido1.innerHTML = 'R$ ' + preçoPrato;

        const Pedido2 = document.querySelector('.pedido2 span');
        Pedido2.innerHTML = tipoBebida;
        const preçoPedido2 = document.querySelector('.pedido2 span:nth-of-type(2)');
        preçoPedido2.innerHTML = 'R$ ' + preçoBebida;

        const Pedido3 = document.querySelector('.pedido3 span');
        Pedido3.innerHTML = tipoSobremesa;
        const preçoPedido3 = document.querySelector('.pedido3 span:nth-of-type(2)');
        preçoPedido3.innerHTML = 'R$ ' + preçoSobremesa;

        const preçoTotal = document.querySelector('.total span:nth-of-type(2)');
        const valor = Number(preçoPrato) + Number(preçoBebida) + Number(preçoSobremesa);
        preçoTotal.innerHTML = 'R$ ' + valor.toFixed(2);
    }

}   

function cancelar_Pedido() {
   
        const confirmaçao = document.querySelector(".confirme_pedido");
        confirmaçao.classList.add("oculto");
}
