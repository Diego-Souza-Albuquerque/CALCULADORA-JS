
const main = document.querySelector('main')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

input.focus()

//criando um array com os caracteres que serão permitidos:
const permitidos = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " ",]

//funcionalidade de clicar nos botões:
document.querySelectorAll('.charKey').forEach( (charKeyBtn) => {
  charKeyBtn.addEventListener('click', () => {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', () => {
  input.value = ''
  resultInput.value = ''
  input.focus()
})

document.getElementById('equal').addEventListener('click', calculate)


input.addEventListener('keydown', (e) => {
  e.preventDefault()
  
  if (permitidos.includes(e.key)) {
    input.value += e.key
    return
  }

  if (e.key === 'Backspace') {
    input.value = input.value.slice(0,-1) // o slice deixa apenas do caractere 0 até o penultimo, assim eliminando o ultimo.
  }

  if (e.key === 'Escape') {
    input.value = ''
    resultInput.value = ''
    return
  }

  if (e.key === 'Enter' || e.key === '=') {
    calculate()
  }
})


function calculate(){
  const result = eval(input.value)
  resultInput.value = result
  console.log(result)
}