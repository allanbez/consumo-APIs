const requisicao = new Request('http://localhost:3000/produtos', {
    "method": "GET",
    "headers": {
        "Content-type": "application/json"
    }
});

fetch(requisicao)
    .then(resposta => resposta.json())
    .then(resposta => {

        const div = document.createElement('div');

        resposta.forEach(produto => {
            
            const pDescricao = document.createElement('li');
            liDescricao.innerHTML = produto.descricao;

            const pId = document.createElement('li');
            liId.innerHTML = produto.id;

            const pPreco = document.createElement('li');
            liPreco.innerHTML = produto.preco;

            div.append(pId, pDescricao, pPreco);
        });

        document.body.appendChild(div);
        
    });