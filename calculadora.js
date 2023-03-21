import { buttons, clear, copy, keyboard } from "./keyAndButtons.js"
import { switchTheme } from "./themeSwitcher.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')
input.focus()

//funcionalidade para os botões:
document.querySelectorAll('.charKey').forEach( function (charKeyBtn) {
  charKeyBtn.addEventListener('click', buttons)
})

//habilitando o botão de limpar e recomeçar o calculo:
document.getElementById('clear').addEventListener('click', clear)

//habilitando o botão de copiar o resultado:
document.getElementById('copyToClipboard').addEventListener('click', copy)

// funcionalidade de usar o teclado para realizar os calculos com as teclas permitidas:
input.addEventListener('keydown', keyboard)

// Funcionalidade de alterar os temas:
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)

//função de calcular o resultado:
document.getElementById('equal').addEventListener('click', calculate)
export function calculate(){
  resultInput.value = 'ERRO - Revise o cálculo'
  resultInput.classList.add('error')
  input.focus()
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}





