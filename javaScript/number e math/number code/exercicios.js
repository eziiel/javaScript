//retornar um aleatorio entre 1050 e 2000
console.log(Math.round(Math.random() * (2000 - 1050 + 1) + 1050))
//retornar o maior numero da lista abaixo
const numeros = '15, 13, 15, 19, 22, 24, 34, 11.12'
const numeros2 = numeros.split(', ')

const numeroMax = Math.max(...numeros2)
console.log(numeroMax)

// crie uma funcao para limpar os precos 
// e retornar os numeros com centavos arredondados
// depois retorne a soma total

const listaPreco = [
  'R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$ 200', '12,09'
]

let total = 0;
listaPreco.forEach((item)=> {
  let valor = +item.toUpperCase().trim().replaceAll('R$','').replaceAll(',', '.')
      total += +valor
    })
console.log(total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}))

