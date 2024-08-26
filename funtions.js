//creamos las variables para capturar el texto dado por el usuario y encriptarlo
const textInput = document.querySelector(".input_text");
const outputText = document.querySelector(".text_encrip");

//creamos la funcion que va a llamar el boton 
function btnEncrip() {
    const textToEncrypt = textInput.value;
    const encryptedText = encriptation(textToEncrypt);
    outputText.textContent = encryptedText;
    textInput.value = "";
}

//creamos la funcion respectiva para encriptar los tatos capturados
function encriptation(stringEncriptada) {
    
    //creamos una matriz con los datos de encriptacion referentes a cada letra que se va a usar
    let datos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    
    //creamos un ciclo repetitivo for para recorrer la matriz
    for(let i = 0; i < datos.length; i++){
        if (stringEncriptada.includes(datos[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(datos[i][0], datos[i][1])
        }
    }
    //retornamos los hechos
    return stringEncriptada;
}

