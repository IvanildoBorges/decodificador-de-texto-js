const textArea = document.getElementById('input-text');
const message = document.querySelector('.main-container-message p');
const containerMessage = document.querySelector('.main-container-message');
const imageMessage = document.querySelector('.main-container-message img');
const titleMessage = document.querySelector('.main-container-message h2');
const copyButton = document.getElementById('copy');
let textareaValue = '';
let messageCryptographed = '';

function setTextAreaValue(text) {
    textareaValue = text;
}

function getValueTextArea() {
    const value = textArea.value.toLowerCase();

    // O regex é para remover espaços em branco do começo e final de um texto
    if (value != '' && value.replace(/^\s+|\s+$/g,"")) {
        setTextAreaValue(value)
    } else {
        setTextAreaValue('')
        showTextInScreen('Digite um texto que você deseja criptografar ou descriptografar.');
    }
}

textArea.addEventListener('change', getValueTextArea);

function showTextInScreen(text, size = 1, sizeLine = 1.5,  align = 'center', displayValueCSS = 'block') {
    // estilo do container da mensagem
    containerMessage.style.justifyContent = align;
    containerMessage.style.textAlign = align;
    
    // estilo da mensagem
    message.style.fontSize = `${size}rem`;
    message.style.lineHeight = `${sizeLine}rem`;
    message.innerHTML = text;
    
    // estilo do botão de copiar
    copyButton.style.display = displayValueCSS === 'none' ? 'block' : 'none';
    
    // estilo da imagem e titulo da mensagem
    titleMessage.style.display = displayValueCSS;
    imageMessage.style.display = displayValueCSS;

    window.scroll({
        top: 600,
        behavior: 'smooth'
    })
}

function cryptoText() {
    const letrasCriptografadas = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat",
    };

    if (textareaValue != '') {
        messageCryptographed = textareaValue.split('').map(letra => {
            return letrasCriptografadas[letra] || letra;
        }).join("");
        showTextInScreen(messageCryptographed, 1.5, 2.25, 'left', 'none');
    } else {
        alert("Por favor digite um texto para criptografar!")
    }
}

function desCryptoText() {
    const letrasCriptografadas = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u",
    };
    
    if (textareaValue != '') {
        messageCryptographed = textareaValue.split('').map(letra => {
            return letrasCriptografadas[letra] || letra;
        }).join("");
        showTextInScreen(messageCryptographed, 1.5, 2.25, 'left', 'none');
    } else {
        alert("Por favor digite um texto para descriptografar!")
    }
}

async function copyText() {
    try {
        await navigator.clipboard.writeText(message.innerHTML)
    } catch (error) {
        console.error(err.name, err.message);
    }
}