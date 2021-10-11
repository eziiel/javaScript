const nome = document.querySelectorAll('.nomes') 
console.log(nome)
const altura = document.querySelectorAll('#altura')
console.log(altura)
var res = document.querySelector('.res')
console.log(res)
const btn = document.querySelector('.btn')
console.log(btn)

// function verificar () {
//   const num = []
//   const alt0 = altura[0].value
//   const alt1 =altura[1].value
//   const alt2 =altura[2].value
//   num.push(alt0, alt1, alt2)
//   const max = Math.max(...num)
//     res.innerHTML = max
// }

function verificar (index) {
  console.log(`${nome[index].value} tem ${altura[index].value}`)
}

btn.addEventListener('click', function (event) {
  altura.forEach((item,index) => {
    verificar(index)
  })
})