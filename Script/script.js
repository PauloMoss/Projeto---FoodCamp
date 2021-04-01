let checkPrato;
let checkBebida;
let checkSobremesa;

function selecionar_pratoPrincipal(prato) {
   
    const selecionado = document.querySelector(".Prato_Principal .selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    const itemSelecionado = document.querySelector(prato);
    itemSelecionado.classList.add("selecionado");

}

function selecionar_Bebida(bebida) {
   
    const selecionado = document.querySelector(".Bebidas .selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    const itemSelecionado = document.querySelector(bebida);
    itemSelecionado.classList.add("selecionado");
}


function selecionar_Sobremesa(sobremesa) {
   
    const selecionado = document.querySelector(".Sobremesas .selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    const itemSelecionado = document.querySelector(sobremesa);
    itemSelecionado.classList.add("selecionado");
    
}

function conclusao_Pedido() {
    if (checkSobremesa == 1) {
        
    const aberto = document.querySelector(".conclusao_pedido button");
    aberto.classList.remove("pedido_aberto");

    const fechado = document.querySelector(".conclusao_pedido button");
    fechado.classList.add("pedido_fechado");
    }
}