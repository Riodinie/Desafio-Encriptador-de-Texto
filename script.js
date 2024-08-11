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

const uploadDocument = document.querySelector("#upload-document"),
  uploadTitle = document.querySelector("#upload-title");

uploadDocument.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (
        file.type === "application/pdf" ||
        file.type === "text/plain" ||
        file.type === "application/msword" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
        uploadTitle.innerHTML = file.name;

        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async (e) => {
            try {
                const content = e.target.result;
                const encryptedContent = encryptText(content);
                outputText.innerHTML = encryptedContent;
                btnCopy.style.visibility = "inherit";
            } catch (error) {
                console.error("Error al procesar el archivo:", error);
            }
        };
    } else {
        alert("Por favor, sube un archivo válido.");
    }
});

const downloadBtn = document.querySelector("#download-btn");

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const outputText = outputTextElem.value; 
    const currentDate = new Date().toISOString().slice(0,10); 
    const filename = `Archivo-${currentDate}.txt`; 
    
    if (outputText) {
      const blob = new Blob([outputText], { type: "text/plain" }); 
      const url = URL.createObjectURL(blob); 
      
      const a = document.createElement("a"); 
      a.download = filename; 
      a.href = url; 
      document.body.appendChild(a); 
      a.click();
      document.body.removeChild(a); 
    }
  });


