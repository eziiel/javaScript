// seletores
function Seletor (seletor) {
  this.element = function() {
    return document.querySelector(seletor)
}}
  const ul = new Seletor('ul')
  const li = new Seletor('li')



//fim seletores

function AddClass (selecionar) {
  this.elemento = function () {
    return document.querySelector(selecionar)
  }
  this.classe = function () {
    this.elemento().classList.add('ativo')
  }
}
const p = new AddClass ('p')
// ex call
function mercado (nome) {
  return `o preço do ${this.item} é ${this.preco} reais ${nome}`
}
mercado.call({item:'maça', preco:2}, 'carlos')
const numeros = [2, 45, 12, 87, 36, 99]
// ex call 2
  const cores = {//criando um objeto normal
    primeira : 'azul',
    segunda : 'vermelha',
    terceira : 'preto'
  }

function coresSelecionadas () {
  console.log(this.primeira, this.segunda, this.terceira )
}


console.log(Math.max.apply(null, numeros))