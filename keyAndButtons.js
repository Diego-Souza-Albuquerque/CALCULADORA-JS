import { calculate } from "./calculadora.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

//funcionalidade para os botões:
export function buttons(ev) {
  const value = ev.currentTarget.dataset.value
  input.value += value
}

export function clear() {  
  input.value = ''
  resultInput.value = ''
  input.focus()
}

export function copy() {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}

//criando um array com os caracteres do teclado que serão permitidos:
const permitidos = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " ",]

// funcionalidade de usar o teclado para realizar os calculos com as teclas permitidas:
export function keyboard (e){
  e.preventDefault()
  
  if (permitidos.includes(e.key)) {
    input.value += e.key
    return
  }

  if (e.key === 'Backspace') {
    input.value = input.value.slice(0,-1) // o slice seleciona apenas do caractere 0 até o penultimo, assim eliminando o ultimo.
  }

  if (e.key === 'Escape') {
    input.value = ''
    resultInput.value = ''
    return
  }

  if (e.key === 'Enter' || e.key === '=') {
    console.log("calculando")
    calculate()
  }
}