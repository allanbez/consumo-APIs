const produto ={
    "id":document.querySelector('#idproduto').value,
    "descricao":document.querySelector('#descricao').value,
    "preco":document.querySelector
}

const requisicao = new Request('http://localhost:3000/produtos',{
    "metohod":"POST",
    "headers":{
        "content-type": "application/json"
    },
    "body":JSON.stringify(produto)
})

fetch(requisicao)