const swapBtn = document.querySelector(".swap-position");
const inputTextElem = document.querySelector("#input-text");
const outputTextElem = document.querySelector("#output-text");
const btnEncrypt = document.querySelector("#Enc");
const txtEncrypt = document.querySelector("#input-text");
const alertMessage = document.querySelector("#input-alert");
const outputText = document.querySelector("#output-text");
const btnDecrypt = document.querySelector("#Des");
const btnCopy = document.querySelector(".btn-copy");


swapBtn.addEventListener("click", (e) => {
    const tempInputText = inputTextElem.value;
    inputTextElem.value = outputTextElem.value;
});

function encryptText(text) {
    let normalizedText = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (text === "") {
        return "El campo de texto no debe estar vacío.";
    } else if (text !== normalizedText) {
        return "El texto no debe contener acentos ni caracteres especiales.";
    } else if (text !== text.toLowerCase()) {
        return "El texto debe estar en minúsculas.";
    } else {
        let encryptedText = text.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
        return encryptedText;
    }
}

btnEncrypt.addEventListener("click", (e) => {
    e.preventDefault();
    const text = txtEncrypt.value;
    const result = encryptText(text);
    
    if (result.includes("El")) {
        alertMessage.textContent = result;
    } else {
        outputText.innerHTML = result;
        btnCopy.style.visibility = "inherit";
        ;
    }
});

function decryptText(text) {
    let normalizedText = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (text === "") {
        return "El campo de texto no debe estar vacío.";
    } else if (text !== normalizedText) {
        return "El texto no debe contener acentos ni caracteres especiales.";
    } else if (text !== text.toLowerCase()) {
        return "El texto debe estar en minúsculas.";
    } else {
        let decryptedText = text.replace(/enter/gm, "e")
                                .replace(/imes/gm, "i")
                                .replace(/ai/gm, "a")
                                .replace(/ober/gm, "o")
                                .replace(/ufat/gm, "u");
        return decryptedText;
    }
}

btnDecrypt.addEventListener("click", (e) => {
    e.preventDefault();
    const text = txtEncrypt.value;
    const result = decryptText(text);

    if (result.includes("El")) {
        alertMessage.textContent = result;
    } else {
        outputText.innerHTML = result;
        btnCopy.style.visibility = "inherit";
        
    }
});


btnCopy.addEventListener("click", (e) => {
    e.preventDefault();
    const textToCopy = outputText.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Texto copiado al portapapeles.") ;
    }).catch(err => {
        alert ("Error al copiar el texto.");
    });
});


