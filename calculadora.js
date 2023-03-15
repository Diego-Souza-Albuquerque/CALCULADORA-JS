
const main = document.querySelector('main')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const root = document.querySelector(":root")

input.focus()

//funcionalidade para os botões:
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

function calculate(){
  resultInput.value = 'ERRO - Revise o cálculo'
  resultInput.classList.add('error')
  input.focus()
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}

// Alterando os temas:
document.getElementById('themeSwitcher').addEventListener('click', () => {
  console.log("ativou")
  if (main.dataset.theme === 'dark'){
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})

//criando um array com os caracteres que serão permitidos:
const permitidos = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " ",]

// funcionalidade de usar o teclado para realizar os calculos com as teclas permitidas:
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

//habilitando o botão de copiar o resultado:
document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})