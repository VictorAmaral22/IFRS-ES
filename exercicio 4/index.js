/*4(2,5pt)- Dado o código de um estoque do arquivo estoque.html disponibilizado na aula 3, faça as seguintes alterações.
a - Altere o HTML, acrescente CSS e bootstrap para melhorar o visual da página. 
b - Crie um segundo objeto chamado carro que irá armazenar os produtos que serão comprados. Para cada produto ele irá armazenar o nome e o respectivo preço.
c- Abaixo da seção de estoque coloque uma seção “Carrinho de compra”. Esta seção será montada na função mostra(). Ou seja, cada vez que a função mostra () for chamada ela irá mostrar os atuais produtos no objeto estoque e os atuais produtos no objeto carro. 
d-  Atualmente o botão excluir da cada item do estoque apenas exclui um item do estoque. Neste trabalho ele deve excluir um item do objeto estoque e depois coloca-lo no objeto carro. O nome mais apropriado do botão seria “Adicionar ao carrinho de compras”.
e – O carrinho de compras será uma seção semelhante ao estoque. O botão que fica  ao lado de cadaproduto do carrinho deve se chamar “Retirar do carrinho”. Este botão tira o produto do objeto carro e o coloca no objeto estoque.*/

class produto{
   constructor(nome, preco){
    this.nome_produto=nome;
    this.preco=preco;
   }
}

class estoque {
   constructor(nome, data){
        this.nome=nome;
        this.data=data;
        this.produtos= [
          new produto('Jogo Ghost of Tsushima PS4', 'R$ 250,00'), 
          new produto('Jogo Red Dead Redemption 2 Xbox Series X', 'R$ 270,00'),
          new produto('Console Play Station 5', 'R$ 100000000000,00'),
        ];
   }
   mostra(){
      let valor = "";
      valor+= "<li class='list-group-item'>Nome Loja: "+ this.nome+"</li><li class='list-group-item'>Data: "+ this.data+"</li>";
      document.querySelector("#lista").innerHTML=valor;
      let estoque = '';
      for (let i = 0;i<this.produtos.length; i++) {
         estoque += "<ul class='list-group list-group-horizontal'>";
         estoque += "<li id='prodNome"+i+"' class='list-group-item'>Produto: "+ this.produtos[i].nome_produto+"</li>";
         estoque += "<li id='prodPreco"+i+"' class='list-group-item'>Preco: "+this.produtos[i].preco+"</li>";
         estoque += "<li class='list-group-item'><div onclick = 'carrinho1.insere("+i+"); estoque1.excluir("+i+")'><img class='icons' src='src/cart.png' alt='' srcset=''></div>";
         estoque += "</ul>";
      }
      document.querySelector("#estoque").innerHTML = estoque;
   }
   altera(){
      this.nome=document.querySelector("#nome").value;
      this.data=document.querySelector("#data").value;
      this.mostra();
   }
   insere(){
      let produto1= new produto(document.querySelector("#nome_produto").value,document.querySelector("#preco").value)
      this.produtos.push(produto1); 
      this.mostra();
   }
   excluir(num){
      this.produtos.splice(num,1);
      this.mostra();
   }
}
class carrinho{
    constructor(estoque){
        this.estoque = estoque;
        this.compras= [

        ];
    }
    mostra(){
        let carrinho = '';
        for (let i = 0;i<this.compras.length; i++) {
            carrinho += "<ul class='list-group list-group-horizontal'>";
            carrinho += "<li class='list-group-item'>Produto: "+ this.compras[i].nome_produto+"</li>";
            carrinho += "<li class='list-group-item'>Preco: "+this.compras[i].preco+"</li>";
            carrinho += "<li class='list-group-item'><div onclick='carrinho1.excluir("+i+")'><img class='icons' src='src/close.png' alt='' srcset=''></div>";
            carrinho += "</ul>";
        }
        document.querySelector("#carrinho").innerHTML = carrinho;
    }
    insere(prod){
        var nome = document.querySelector("#prodNome"+prod).innerHTML;
        nome = nome.split("Produto: ");
        var preco = document.querySelector("#prodPreco"+prod).innerHTML;
        preco = preco.split("Preco: ");
        this.compras.push(new produto(nome[1], preco[1])); 
        this.mostra();
    }
    excluir(num){
      var produto = this.compras.splice(num,1);
      this.estoque.produtos.push(produto[0]);
      this.mostra();
      this.estoque.mostra();
    }
}

var estoque1 = new estoque("Lojas Americanas",(new Date()+''));
estoque1.mostra();
var carrinho1 = new carrinho(estoque1);
carrinho1.mostra();

function hideAccordion(num){
   var display = (num == 1) ? document.getElementById('collapseOne').style.display : document.getElementById('collapseTwo').style.display;
   console.log(display);
   if(display == ""){
       if(num == 1){
           document.getElementById('collapseOne').style.display = "none";
        } else {
           document.getElementById('collapseTwo').style.display = "none";
       }
   } else {
        if(num == 1){
           document.getElementById('collapseOne').style.display = "";
        } else {
           document.getElementById('collapseTwo').style.display = "";
        }
   }
}