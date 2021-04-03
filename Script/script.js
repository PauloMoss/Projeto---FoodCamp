let checkPrato;
let tipoPrato;
let preçoPrato;

let checkBebida;
let tipoBebida;
let preçoBebida;

let checkSobremesa;
let tipoSobremesa;
let preçoSobremesa;

let valor;
let nome;
let endereço;

function selecionar_pratoPrincipal(prato, tipo) {

    const selecionado = document.querySelector(".Prato_Principal .selecionado");
    const icone = document.querySelector(".Prato_Principal .selecionado ion-icon");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        icone.classList.add("oculto");
    }
    checkPrato = document.querySelector(prato);
    checkPrato.classList.add("selecionado");
    const iconeCheck = document.querySelector(prato + " ion-icon");
    iconeCheck.classList.remove("oculto");

    const Prato = document.querySelector(tipo);
    tipoPrato = Prato.innerHTML
    const Preço = document.querySelector(prato + ' .preço');
    preçoPrato = Preço.innerHTML
    conclusao_Pedido()
}

function selecionar_Bebida(bebida, tipo) {
   
    const selecionado = document.querySelector(".Bebidas .selecionado");
    const icone = document.querySelector(".Bebidas .selecionado ion-icon");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        icone.classList.add("oculto");
    }
    checkBebida = document.querySelector(bebida);
    checkBebida.classList.add("selecionado");
    const iconeCheck = document.querySelector(bebida + " ion-icon");
    iconeCheck.classList.remove("oculto");

    const Bebida = document.querySelector(tipo);
    tipoBebida = Bebida.innerHTML
    const Preço = document.querySelector(bebida +' .preço');
    preçoBebida = Preço.innerHTML
    conclusao_Pedido()
}

function selecionar_Sobremesa(sobremesa, tipo) {
   
    const selecionado = document.querySelector(".Sobremesas .selecionado");
    const icone = document.querySelector(".Sobremesas .selecionado ion-icon");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
        icone.classList.add("oculto");
    }
    checkSobremesa = document.querySelector(sobremesa);
    checkSobremesa.classList.add("selecionado");
    const iconeCheck = document.querySelector(sobremesa + " ion-icon");
    iconeCheck.classList.remove("oculto");

    const Sobremesa = document.querySelector(tipo);
    tipoSobremesa = Sobremesa.innerHTML
    const Preço = document.querySelector(sobremesa +' .preço');
    preçoSobremesa = Preço.innerHTML
    conclusao_Pedido()
}

function conclusao_Pedido() {

    const cardapio_prato = checkPrato.classList.contains("selecionado");
    const cardapio_bebida = checkBebida.classList.contains("selecionado");
    const cardapio_sobremesa = checkSobremesa.classList.contains("selecionado");

    if ( cardapio_sobremesa === true &&  cardapio_bebida === true && cardapio_prato === true) {
        const aberto = document.querySelector(".conclusao_pedido button");
        aberto.classList.remove("pedido_aberto");

        const fechado = document.querySelector(".conclusao_pedido button");
        fechado.classList.add("pedido_fechado");
        fechado.innerHTML = "Fechar Pedido";
    }
}

function confirmação_de_Pedido() {
    const fechado = document.querySelector(".conclusao_pedido button")

    if (fechado.classList.contains("pedido_fechado") === true) {
        nome = prompt("Por favor, informe o seu nome :");
        endereço = prompt("Para finalizar, nos informe o seu endereço :")
        const confirmaçao = document.querySelector(".confirme_pedido");
        confirmaçao.classList.remove("oculto");
        const embassado = document.querySelector('.fundoEmbacado');
        embassado.classList.remove("oculto");
        const estatico = document.querySelector('body');
        estatico.classList.add("estatico");
        
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
        valor = Number(preçoPrato) + Number(preçoBebida) + Number(preçoSobremesa);
        preçoTotal.innerHTML = 'R$ ' + valor.toFixed(2);
    }
} 

function cancelar_Pedido() {
    const confirmaçao = document.querySelector(".confirme_pedido");
    confirmaçao.classList.add("oculto");
    const embassado = document.querySelector('.fundoEmbacado');
    embassado.classList.add("oculto");
    const estatico = document.querySelector('body');
    estatico.classList.remove("estatico");
}

function convera_Wpp() {
    const Wpp_ola = "Olá, gostaria de fazer o pedido:\n"
    const Wpp_pedido = " - Prato: " + tipoPrato + "\n - Bebida: " + tipoBebida + "\n - Sobremesa: " + tipoSobremesa;
    const valor_total = "\nTotal: R$ " + valor.toFixed(2);
    const dados_cliente = "\n \nNome: " + nome + "\nEndereço: " + endereço;
    const msg = encodeURIComponent(Wpp_ola + Wpp_pedido + valor_total + dados_cliente);

    const MudarLink = document.querySelector(".confirme_pedido a");
    MudarLink.href = MudarLink.href.replace('https://wa.me/?text=',"https://wa.me/5521993778424?text=" +  msg);
}