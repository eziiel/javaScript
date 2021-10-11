const carro = 'audi'
const moto = new String ('bmw')
const casa = 'uma casa muito grande'

console.log(carro)
console.log(moto)
console.log(carro[1])
console.log(carro[carro.length-1])

//charAt

console.log(carro.charAt(1))
console.log(casa.charAt(casa.length-1))

// ---- juntar strings
// da para fazer somando e com o método doido
const cor = 'azul';
const corCasa = casa + ' é ' + cor;
console.log(corCasa)
console.log(`${casa} é ${cor}`)

//includes
//é um meio de busca de string dentro de outras strings
const letra = 'a'
const vogais ='a, e, i, o, u'
console.log(vogais.includes(letra))
console.log(letra.includes(vogais))

//str.endswith(busca) ou str.startwith(busca)
//termina com ou comeca com
carro.endsWith('a') //false
carro.startsWith('a') //true


// ----str.slice(start, end) corta a string de acordo com o selecionado
const estatus = 'processando'
const estatus2 = 'processamento concluído'
const estatus3 = 'confirmado'

console.log(estatus.slice(0,3))
console.log(estatus2.slice(0,3))
console.log(estatus3.slice(0,3))
//se omitir o start ele eclui apartir do numero
console.log(estatus.slice(2)) // excluiu as duas primeiras letras
//se colocar negativo sem o start começa do final
console.log(estatus.slice(-3))
//se colocar negativo com o start corta do final
console.log(estatus.slice(1, -5))

//subString funciona como slice - so que o negativo nao muito
//com negativo igual linha46 retorna toda string
console.log(estatus.substring(0,4))

// ----str.padStart(n, str) =n o numero que aumenta e str o que colocar, comecar no final str.padEnd(n,str)
const load = estatus.slice(0,-3) //processa
const loadRes = load.padEnd(13, 'mento') // processamento

// ----str.repeat(n) repete a string nx
const arma = 'ta'
arma.repeat(4)

// ----str.replace(troca, trocado) - faz uma troca no primeiro valor encontrado pelo trocado
//pode usar uma regular expression = um valor que puxa todos iguais
// str.replace(/[ ]+/g)
//ou str.replaceAll()

let vestimentos = 'camisa calça tenis boné'
vestimentos.replace(' ', ', ')

//str.split(padrao), divide a string de acordo com o padrao passado e retorna uma array
vestimentos= vestimentos.split(', ')
  //retorna como array cada item sem a vírgula e espaços

  // manuseando com o DOM

const div1 = '<div>o melhor item</div>'
const div2 = div1.replace('div', 'section')
const section = div1.split('div')
section.join('section')
