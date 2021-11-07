var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outText= document.querySelector("#out-text");
function clickEvent(){
    outText.innerText="Translated  " + txtInput.value;
}


btnTranslate.addEventListener("click", clickEvent);