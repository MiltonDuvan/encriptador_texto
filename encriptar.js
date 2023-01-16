
var buttonEncriptar = document.querySelector(".btnEncriptar");
var buttonDesencriptar = document.querySelector(".btnDesencriptar");
var buttonCopiarTexto = document.querySelector(".btnCopiar");
//ocultar 
var imagenDerecha = document.querySelector(".imgDerecha");
var h3section = document.querySelector(".sectionTextH3");

//resultado
var resultado = document.querySelector(".textPalabra");

//onclikc
buttonEncriptar.onclick = encrypt;
buttonDesencriptar.onclick = descrypt;
buttonCopiarTexto.onclick = copy;


function recoverText() {
    var textoInput = document.querySelector(".textoInput");
    return textoInput.value;
}

function hiddenThings() {
    imagenDerecha.classList.add("hidden");
    h3section.classList.add("hidden");
}

function encrypt() {
    var textoInput = recoverText()
    if (textoInput.value = !recoverText()) {
        alert("Por favor escribe un texto")
    }
    else {
        hiddenThings();
        resultado.textContent = encryptWord(textoInput);
    }
}

function encryptWord(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "ai"
        }
        else if (texto[i] == "e") {
            textofinal = textofinal + "enter"
        }
        else if (texto[i] == "i") {
            textofinal = textofinal + "imes"
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "ober"
        }
        else if (texto[i] == "u") {
            textofinal = textofinal + "ufat"
        } else {
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

function copy() {
    var recText = document.querySelector(".textPalabra")
    navigator.clipboard.writeText(recText.innerHTML);
    alert("Texto copiado")
}

function descrypt() {
    var textoInput = recoverText()

    if (textoInput.value = !recoverText()) {
        alert("Por favor escribe un texto")
    }
    else {
        hiddenThings();
    }
    resultado.textContent = desencryptWord(textoInput);
}


function desencryptWord(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (var j = 0; j < texto.length; j++) {
        if (texto[j] == "a") {
            textofinal = textofinal + "a"
            j = j + 1;
        }
        else if (texto[j] == "e") {
            textofinal = textofinal + "e"
            j = j + 4;
        }
        else if (texto[j] == "i") {
            textofinal = textofinal + "i"
            j = j + 3;
        }
        else if (texto[j] == "o") {
            textofinal = textofinal + "o"
            j = j + 3;
        }
        else if (texto[j] == "u") {
            textofinal = textofinal + "u"
            j = j + 3;
        } else {
            textofinal = textofinal + texto[j];
        }
    }
    return textofinal;
}