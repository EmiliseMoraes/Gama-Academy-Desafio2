const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
e.preventDefault(); 

let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let cpf = document.getElementById('cpf').value;
let rua = document.getElementById('rua').value;
let cep = document.getElementById('cep').value;
let numero = document.getElementById('numeroCasa').value;


let dados = {
    nome,
    email,
    cpf,
    rua,
    cep,
    numero,
}

let convertDados = JSON.stringify(dados);
localStorage.setItem('lead', convertDados);
})


 function addItem1() {

   let nomeProduto = document.getElementById('nomeProduto').innerHTML;
   let preco = document.getElementById('precoProduto').innerHTML;
   let descricao = document.getElementById('descricaoProduto').innerHTML;

    
     let coletarDados = {
       nomeProduto,descricao,preco
      
     }
     let convertDadosBtn = JSON.stringify(coletarDados);
     localStorage.setItem('lead', convertDadosBtn);
 }
 function addItem2() {
       
    let nomeProduto1 = document.getElementById('nomeProduto1').innerHTML;
    let preco1 = document.getElementById('precoProduto1').innerHTML;
    let descricao1 = document.getElementById('descricaoProduto1').innerHTML;

    let coletarDados = {
        nomeProduto1,descricao1,preco1
       
      }
      let convertDadosBtn = JSON.stringify(coletarDados);
      localStorage.setItem('lead', convertDadosBtn);
  }
  function addItem3() {
       
    let nomeProduto2 = document.getElementById('nomeProduto2').innerHTML;
    let preco2 = document.getElementById('precoProduto2').innerHTML;
    let descricao2 = document.getElementById('descricaoProduto2').innerHTML;

    let coletarDados = {
        nomeProduto2,descricao2,preco2
       
      }
      let convertDadosBtn = JSON.stringify(coletarDados);
      localStorage.setItem('lead', convertDadosBtn);
  }
 
