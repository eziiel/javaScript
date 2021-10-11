//1
//remova o primeiro valor e coloque em uma variavl
//remova o ultimo valor e coloque em uma variavl
//add um novo item no final
//add dois items no inicio
const comidas = ['arroz', 'feijao', 'carne','pizza']
const comidas2 = comidas.slice()

const comida = comidas2.slice(0,1)
comidas2.splice(0,1)
//
const comida1 = comidas2.slice(-1)
comidas2.splice(-1)
//
comidas2.push('arroz')
comidas2.unshift('macarrao', 'legumes')
//2
const alunos = ['marcio','felipe','cassio','beatriz','luiza','fabiola']
//arrume os estudates em ordem alfabetica
//inverta as ordemns dos estudantes
//verifique se tem joana
//verifique se tem luiza
const alunos2 = alunos.slice()
//
alunos2.sort()
console.log(alunos2)
//
alunos2.reverse()
//
console.log(alunos2.includes('joana'))
console.log(alunos2.includes('luiza'))
//3
let html = `<section>
              <div>sobre<div>
              <div>menu<div>
              <div>contato</div>
            </section>`
//substituir section por ul e div por li
let html1 = html.slice()
let html3 = html1.split('section')
let html4 = html3.join('ul')
let html5 = html4.split('div')
let html6 = html5.join('li')
// um jeito mais simples
html1 = html1.split('section')
html1 = html1.join('ul')
html1 = html1.split('div')
html1 = html1.join('li')
// ou
let html0 = html.slice().split('section').join('ul').split('div').join('li')
//
//for each
const li = document.querySelectorAll(li)

li.forEach((item) => {
  item.classList.add('ativo')
})