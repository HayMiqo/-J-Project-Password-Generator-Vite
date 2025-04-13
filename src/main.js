import './style.scss'

const passwordField = document.querySelector('.password__field')
const generateBtn = document.querySelector('.password__button')

passwordField.addEventListener('click', async () =>{
    try{
        await navigator.clipboard.writeText(passwordField.value)
        alert('Текст скопирован!')
    } catch (err){
        console.error('Ошибка копирования', err)
    }
});

function passwordGeneration() {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+{}[]'

    const allChars = lowercase + uppercase + numbers + symbols
    const passwordLength = 12
    let password = ''

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length)
        password += allChars[randomIndex]
    };

    return password
};

generateBtn.addEventListener('click', () => {
    const password = passwordGeneration()
    passwordField.value = password
})