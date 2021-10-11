let li = document.querySelectorAll('.header li')
console.log(li)
//array from
li = Array.from(li)

const carros = {
  0:'fiat',
  1:'gol',
  2:'mercedez',
  3:'cetroen',
  length:4,
}
const carroNovo = Array.from(carros)
console.log(carroNovo)
let num = new Array(1,2,3)
let numeros = [1,2,3,4,5,]
console.log(li.concat(...carroNovo))

// somando cada item com 1
// numeros.forEach((v,i,a) => {
//   console.log(a[i] = v + 1)
// })
// agora muda seu valor intrinseco 

// const li = document.querySelectorAll(li)

li.forEach((item) => {
  item.classList.add('ativo')
})

  numeros.find((item) => item >= 3) //3
  numeros.findIndex((item) => item >= 3) //2
  
  
//
const compra = [
{
  item: 'agua',
  valor: 3
},
{
  item: 'arroz',
  valor: 18.9
}
]
let total = 0;

compra.map((item,i) => {
  total+=item.valor
})
///

let totalN = numeros.reduce((x,y) => x += y, 0)
let maiorValor = numeros.reduce((x,y) => x>y?x:y)

//exercicios 2

