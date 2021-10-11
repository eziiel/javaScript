// retornar a soma total dos caracteres de cada p
// utilizando reduce
function Seletor (select) {
  this.element = function () {
    return document.querySelectorAll(select)
  }
}
const p = new Seletor('p')
const paragrafos = Array.from(p.element())

const totalLetrasParagrafos = paragrafos.reduce((a,item, index) => {
  return a += +item.innerText.length
},0)
//primeiro criei uma constructor function para caso seja necessário de mais elementos dom, depois apliquei uma novo objeto nela com seletor de 'p', para manusea-lo, com isso obtive uma Arrai.like, apos isso transformei numa Array normal com from para poder aplicar o reduce.
// o reduce tem um retorno e assim criei uma constante para receber o valor, com o reduce precisa de um acumulador, nesse caso dei o valor de 'a' e apliquei o inicio de '0' no final, logo em seguida o item para para percorrer. apliquei o retorno do 'a' que será somado com o innerText.length(texto interno.tamanho) de cada item. resultando em 446 nesse caso
// obs: coloque um mais antes para tornar em numero.

//exercicio = 2
// crie uma funcao que retorne novos elementos de uma html, com os seguintes paramentos tag, classe e conteudo

function criarElementos (tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  elemento ? elemento.classList.add(classe) : null;
  elemento ? elemento.innerHTML = conteudo : null
  return elemento
}
// não consegui fazer, não pensei na opção de criar um elemento por tag
//criado um funcao que recebe tres paramentros, dentro dessa funcao foi criado um elemento com document.createElement() aplicado a uma constante, em seguida uma condicao ternaria para a classe pois pode ser que não seja preenchido, assim casso true cria uma classe com classList.add que recebe o parametro de invocação da funcao, o mesmo ternario para o conteudo, sendo o innerHTML = '' do parametro da funcao, e com isso tendo o retorno da constante elemento

// ex 3
//criar uma funcao igual a anterior, essa funcao sempre devera criar uma h1 com a classe 'titulo' porem o parametro 'conteudo' devera ser sempre dinamico

function conteudoDinamico (conteudo) {
  const elemento = document.createElement('H1');
  elemento.classList.add('titulo')
  conteudo? elemento.innerHTML = conteudo : null;
  return elemento
}
//fiz desse jeito, criei uma funcao igal já aplicando direto o H1 com a classe, digiei mais, mais trabalho

const mudarConteudo = criarElementos.bind(null, 'h1', 'titulo')
// esse jeito eu reaproveitei a funcao já criada com o bind, criado uma constante para receber o valo de bind, pegou a funcao para aplicar, argumento do bind como null pois não murara na funcao, depois aplicado a tag'h1' e classe'titulo', que quando chamada a const mudarConteudo aplicara sempre esse valor, e assim o conteudo pode ser qualquer um quando chamada a constante de function bind, 