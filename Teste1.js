let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  } else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }
  //Importante o operador === não compara apenas os valores contidos nas variáveis, mas também o tipo lógico( borleano, string, number etc.)
  if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  } else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  }
  if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }