function adicionar(){
    let produto = document.getElementById('produto');
    let quantidade = document.getElementById('quantidade').value;
    let lista = document.getElementById('lista-produtos');
    let textoTotal = document.querySelector(".carrinho__total");
    let total;
    let img = document.querySelector('.conteudo-principal');

    let fone = 100;
    let celular = 1400;
    let oculos = 5000;

    if(produto.value == 'Fone'){
        total = fone * quantidade;
        produto = 100;
        img.style.background = "white url('./assets/fone.jpg')no-repeat bottom left" ;
    }

    if(produto.value == 'Celular'){
        total = celular * quantidade;
        produto = 1400;
        img.style.background = "white url('./assets/celular.jpg')no-repeat bottom left";
    }

    if(produto.value == 'Oculus'){
        total = oculos * quantidade;
        produto = 5000;
        img.style.background = "white url('./assets/oculos.jpg') no-repeat bottom left";
    }
    
    lista.innerHTML = 
    `<section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> Celular <span class="texto-azul">R$${produto}</span>
    </section>`;
    textoTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$ ${total}</span>`;

}

function limpar(){
    let lista = document.getElementById('lista-produtos');
    let textoTotal = document.querySelector(".carrinho__total");
    let botaoLimpar = document.querySelector(".botao-limpar");
    botaoLimpar.addEventListener("click", () => {
    produto.value ='';
    quantidade.value = '';
    lista.innerHTML = 
        `<section class="carrinho__produtos__produto">
          <span class="texto-azul">0x</span> Celular <span class="texto-azul">R$0</span>
        </section>`;
    textoTotal.innerHTML = `Total: <span class="texto-azul" id=valor-total">Selecione um Produto</span>`;
    total.value = '';
    });
    
}
