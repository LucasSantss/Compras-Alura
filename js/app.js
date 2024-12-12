let totalGeral = 0;
limpar();
img.style.background = "white url('') no-repeat bottom left";

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value; 
    let lista = document.getElementById('lista-produtos');
    let img = document.querySelector('.conteudo-principal');

    let preco = quantidade * valorUnitario;

    if(nomeProduto ===  'Fone '){
        img.style.background = "white url('./assets/fone.jpg')no-repeat bottom left" ;
    }

    if(nomeProduto == 'Celular '){
        img.style.background = "white url('./assets/celular.jpg')no-repeat bottom left";
    }

    if(nomeProduto == 'Oculus VR '){
        img.style.background = "white url('./assets/oculos.jpg') no-repeat bottom left";
    }
    
    lista.innerHTML = lista.innerHTML + 
    `<section class="carrinho__produtos__produto">
      <span class="texto-azul"> ${quantidade}x ${nomeProduto} </span class="texto-azul">R$${valorUnitario}</span>
    </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '';
}
