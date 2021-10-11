//ulitizando o for each para somar os valores de taxa e recebimento
const transacoes = [
  {
    descricao: 'taxa pão',
    valor: 'r$ 3',
  },
  {
    descricao: 'taxa arroz',
    valor: 'r$ 20',
  },
  {
    descricao: 'recebimento média',
    valor: 'r$ 15',
  },
  {
    descricao: 'taxa ovo',
    valor: 'r$ 12.5',
  },
  {
    descricao: 'recebimento grande',
    valor: 'r$ 17',
  },
]
var totalDeTaxa = 0;
var totalDeRecebimento = 0;

transacoes.forEach((item) => {
  if(item.descricao[0] == 't') {
    totalDeTaxa += (+item.valor.slice(2))
  } else {
    totalDeRecebimento += (+item.valor.slice(2))
  }
})
console.log(totalDeTaxa)
console.log(totalDeRecebimento)

// var totalGeral = totalDeRecebimento + totalDeTaxa
// console.log(totalGeral + ' reais')
//////obs: linha 29 e 31, dois modos de transformar string em numero 



////ex2 : retornar uma array com a lista abaixo
const transportes = 'carro;aviao;moto;barco;bicicleta;ônibus'
const transportesArray = transportes.split(';')
console.log(transportesArray)

///ex3: substitua todos os span por a(replace mais rápido) 
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`

const htmlLink = html.replaceAll('span','a')
console.log(htmlLink)
//outro modo de fazer, menos pratico
const caminhoHtml = html.split('span')
const htmlLink2 = caminhoHtml.join('a')
console.log(htmlLink2)

//ex4: retorne o ultimo caractere da frase 
const frase = 'Melhor do ano!'
console.log(frase.slice(-1))
//outro modo de frazer: console.log(frase[frase.length-1])


///ex5:retorne o total de taxas 

const transacoes2 = ['Taxa do banco', ' taxa da Corretora', 'Pagamento cartão', 'PAGAMENTO Impostos', 'TAXA CORREIOS', '   pagamento Aluguel' , 'TaXa De MeZaNiNo']

let totalTaxa = 0
let totalRecebimento = 0
transacoes2.forEach((item) => {
  const res = item.toUpperCase().trim()
  if(res[0].startsWith('T')) {
    totalTaxa++
  } else if(res[0].startsWith('P')) {
    totalRecebimento++
  } 
})
console.log(totalTaxa)
console.log(totalRecebimento)
