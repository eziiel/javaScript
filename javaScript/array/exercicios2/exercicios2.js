// selecione cada curso e retorne numa array
//com objetos contendo titulos e descricao
//aulas e horas de cada curso
const ListaCurso = document.querySelectorAll('.curso')
const lista = Array.from(ListaCurso)

const listobj = lista.map((item,ind)=> {
    const h1 = item.querySelector('h1').innerText 
    const p = item.querySelector('p').innerText
    const horas = item.querySelector('.horas').innerText
    const aulas = item.querySelector('.aulas').innerText
  return {
    h1, p, horas, aulas,
  }
})
console.log(listobj)

//retorne uma lista com numeros maiores que 100
const numeros = [1,12,333,45,101,859,65,8,9]
const numeroMaior100 = numeros.filter((item) => {
  return item >= 100
})

//verifique se na lista tem um 'baixo' e retorne o booleano da verificacao
const instrumentos = ['violao','piano','guitarra','saxofone','bateria','baixo']
const temInstrumento = instrumentos.some((item) =>{
  return item =='baixo'
})

// retorne o valor total da compra
const compra = [
  {
    item: 'agua',
    valor: 'R$ 3'
  },
  {
    item: 'arroz',
    valor: 'R$ 18.9'
  },
  {
    item: 'banana',
    valor: 'R$ 4.22'
  },
  {
    item: 'leite',
    valor: 'R$ 5.23'
  }
]

const total = compra.reduce((total, item) => {
  const valor = +item.valor.replace('R$ ','')
  console.log(valor)
  return total + valor
},0)
