# consumo-APIs
repositório para demontraçoes e aprendizado para consumo de APIs

as APis possuem alguns elementos que servem a sua ultilizaçao:

-**ponto de entrada**:é o endereço do serviço hospedado e que pode ser acessado atravez de um navegador ou uma ferramenta de consumo de APIs:exemplo<https://dadosabertos.caara.log.br/op1/v2>

-**recursos**:sao serviços de dados disponiveis para consumo.
exemplo./deputados <https://dadosabertos.caara.log.br/op1/v/deputads>

-**parametros**:sao informaçoes ou filtros que servem para enviar dados de consuta para serem precessados pela API:os parametros podem ser passados pela API atravez da url ou o body da requisiçao  exemplo :nome?=bebeto
<https://dadosabertos.caara.log.br/op1/v/nome?=bebeto>

-**metodos**:sao os modos de consumo de uma API,que podem ser:
 GET:consulta/leitura
 POST:inserçao(create)
 UPOATE:atualizaçao(update)
 DELETE:deleçao (delete)

 para esse projetos vamos usar  node.js e o mpm