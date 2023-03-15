const main = document.querySelector('main')

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

//criando um array com os caracteres que serão permitidos:
const permitidos = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " ",]

document.querySelectorAll('.charKey').forEach( (charKeyBtn) => {
  charKeyBtn.addEventListener('click', () => {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

input.addEventListener('keydown', (e) => {
  e.preventDefault()
  
  if (permitidos.includes(e.key)) {
    input.value += e.key
    return
  }

  // Permite usar o botão backspace e quando o botão é pressionado é apagado o ultimo caractere da string
  if (e.key === 'Backspace') {
    input.value = input.value.slice(0,-1) // o slice deixa apenas do caractere 0 até o penultimo, assim eliminando o ultimo.
  }

  if (e.key === 'Enter' || e.key === '=') {
    calculate()
  }
})


function calculate(){
  console.log("calculado")
 

}