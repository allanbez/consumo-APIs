const btadd = document.createElement('button');
btadd.type='button';
btadd.id='btadd'
btadd.innerHTML='adicionar'

const inputs =[
    {"type": "text","id":"preco","label":"preco"},
    {"type": "text","id":"descricao","label":"descricao"},
    {"type": "text","id":"idproduto","label":"ID"},
]
  const divInput=inputs.forEach(produto => {


    const div = document.createElement('div');
    div.classList.add("controle-form")
    


    const i = document.createElement('input');
    i.type=produto.type;
    i.id=produto.id;

    const l =document.createElement('label');
    l.htmlFor =produto.id;
    l.innerHTML =produto.label

div.append(1,1);

});

const inputpreco = document.createElement('input');
inputpreco.type='text';
inputpreco.id='preço';

const labelpreco = document.createElement('label');
labelpreco.for='preço';
labelpreco.innerHTML='preço'