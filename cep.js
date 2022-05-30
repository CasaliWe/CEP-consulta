
function consultarDados(){
    const cep = document.getElementById('cep').value
    fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        respostaDados(data)
    })
    .catch(Error => {
        respostaErro()
    })
    
    }
    

function respostaErro(){
    document.getElementById('rua').textContent = 'ERRO! Digite seu CEP corretamente.'
    document.getElementById('rua').style.cssText = `display: block;`
    document.getElementById('nova-pesquisa').style.cssText = `display: block;`
}


function respostaDados(endereco){

    setTimeout(() => {
   document.getElementById('rua').textContent = `Rua: ${endereco.logradouro};`
   document.getElementById('rua').style.cssText = `display: block;`

    }, 600);

    setTimeout(() => {
        document.getElementById('bairro').textContent = `Bairro: ${endereco.bairro};`
        document.getElementById('bairro').style.cssText = `display: block;`
     
    }, 1200);

    setTimeout(() => {
        document.getElementById('cidade').textContent = `Cidade: ${endereco.localidade};`
        document.getElementById('cidade').style.cssText = `display: block;`

    }, 1800);

    setTimeout(() => {
        document.getElementById('estado').textContent = `Estado: ${endereco.uf};`
        document.getElementById('estado').style.cssText = `display: block;`
    }, 2400);

    setTimeout(() => {
        document.getElementById('nova-pesquisa').style.cssText = `display: block;`
    }, 3000);
   
   
}

function reiniciar(){
      window.location.href = "index.html"
}

var main = document.querySelector('main')

function fadee(){
    setTimeout(() => {
        main.className = "fadeout"
    }, 1300);
}

main.addEventListener('load', fadee());

