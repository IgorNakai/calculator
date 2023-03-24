const allButtons = document.querySelectorAll('[data-button="button"]')
const currentOperand = document.querySelector('[data-current="current"]')
const prevOperand = document.querySelector('[data-prev="prev"]')
const deleteButtun = document.querySelector('[data-button="delete"]')
const clearButton = document.querySelector('[data-button="clear"]')
const operationButton = document.querySelectorAll('[data-button="operation"]')
const root = document.querySelector('[data-js="root"]')
const themeSwitch = document.querySelector('[data-js="themeButton"]')
const iconTheme = document.querySelector('[data-js="iconTheme"]')

function deleteCurrentOperand(current){

    current.innerHTML = current.innerHTML.slice(0, -1)
    if(current.innerHTML === ''){
        return current.innerHTML = '0'
    }
}
function addPrevOperandoDisplay(prev, current , operation){
        
    if(prev.innerHTML === '' && current.innerHTML === '0'){
        return current.innerHTML
    }else{
        prev.innerHTML += current.innerHTML
        prev.innerHTML += operation
    }
    cleanDisplays('', current)
}
function cleanDisplays(prev = null, current = null){
    prev.innerHTML = ''
    current.innerHTML = '0'
}
allButtons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonValue = button.value
        
        if(currentOperand.innerHTML === '0'){
            currentOperand.innerHTML = buttonValue
        }else{
            currentOperand.innerHTML += buttonValue
        }
    })
})
deleteButtun.addEventListener('click', () => {
    deleteCurrentOperand(currentOperand)
})
clearButton.addEventListener('click', () => {
    cleanDisplays(prevOperand, currentOperand)
})
operationButton.forEach(operations => {
    operations.addEventListener('click', () => {
        let operator = operations.value

        if(operator != '='){
            addPrevOperandoDisplay(prevOperand, currentOperand, operator)
        }else if(operator === '='){
            let getPrevAndCurrent = `${prevOperand.innerHTML} ${currentOperand.innerHTML}`
            let result = eval(getPrevAndCurrent)
            
            currentOperand.innerHTML = result.toLocaleString('pt-BR')
            cleanDisplays(prevOperand, '')
        }
    })
})
//LigthMode
themeSwitch.addEventListener('click', () => {
    root.classList.toggle('ligth')
    iconTheme.classList.toggle('fa-moon')
})

