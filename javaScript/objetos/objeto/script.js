//Object.creat()
const carro = {
  // marca:'marca',
  ano: 'ano',
marca(valor){
  this.marca = valor;
  return this
},
  iniciar() {
    return  this.marca + ' ' + this.velocidade
  }
}

const mansoryAudi = Object.create(carro).marca('AUDI - mansory')
const ferrari = Object.create(carro).marca('FERRARI')
///exemplo  2
const cores = {
    seletor(a,b,c) {
      this.a = a;
      this.b = b;
      this.c = c;
      return a +' ' + b + ' ' + c
    }
  }
const coresQuentes = Object.create(cores).seletor('vermelha','laranja', 'amarela')
// esse tambem já aplica um valor geral para o novo objetecom com seu prototipo

////////assign
const carro1 = {
  acelerar() {
    return 'acelerou';
  },
  frear () {
    return 'freiou'
  }
}

Object.assign(mansoryAudi, carro1)
Object.assign(ferrari, carro1)

////// define.properties

const agua = {

}
Object.defineProperties(agua, {
  cor: {
    value: 'incolor',
    configurable: true, 
    //permite ecluir propiedade
  },
  olfato: {
    value: 'inodoro',
    writable: true // permite ser reescrito
  },
  sabor: {
    value: 'insípido',
    enumerable: true // permite colocar numeros
  }
})

// get ou set (){}

const moto = {}

Object.defineProperties (moto, {
  rodas : {
    get() {
    return this._rodas;
    },
    set (valor) {
    this._rodas = valor
    }
  }
})
//exp 2
const datas = {
  segunda: 'matematica',
  terca: 'física',
  quarta: 'história',
  quinta:'revisao',
}
const fds = {
  sexta: 'simulado',
  sabado : 'correicao',
  domingo : 'ingles',
}
Object.defineProperties(datas, {
  sexta: {
    value: 'simulado',
    writable : true
  }
})
Object.defineProperties(datas, {
  sabado: {
    value: 'correição', 
    writable: true,
  }
})