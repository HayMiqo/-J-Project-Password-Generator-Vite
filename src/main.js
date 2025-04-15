import './style.scss'

const passwordField = document.querySelector('.password__field')
const generateBtn = document.querySelector('.password__button')
const passwordCounter = document.querySelector('.password__count')

const MIN_PASSWORD_LENGTH = 6
const MAX_PASSWORD_LENGTH = 32
// const currentLenght = 12

passwordCounter.addEventListener('input', () => {
    let length = +passwordCounter.value

    if (length > MAX_PASSWORD_LENGTH) {
        passwordCounter.value = MAX_PASSWORD_LENGTH
    } 
    // else if (length < MIN_PASSWORD_LENGTH) {
    //     passwordCounter.value = MIN_PASSWORD_LENGTH
    // };
});

function passwordGeneration(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+{}[]'

    const allChars = lowercase + uppercase + numbers + symbols
    // const  = 12
    let password = ''

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length)
        password += allChars[randomIndex]
    }

    return password
};

generateBtn.addEventListener('click', () => {
    const length = parseInt(passwordCounter.value) || MIN_PASSWORD_LENGTH;
    const password = passwordGeneration(length)
    passwordField.value = password
})

passwordField.addEventListener('click', async () => {
    try {
        if (passwordField.value != '') {
            await navigator.clipboard.writeText(passwordField.value)
            alert('Текст скопирован!')
        } else {
            alert('Поле пустое!')
        }
    } catch (err) {
        console.error('Ошибка копирования', err)
    }
});