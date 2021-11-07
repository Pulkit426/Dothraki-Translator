var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickEvent(){
    alert("Hello");
    console.log(txtInput.value);
}


btnTranslate.addEventListener("click", clickEvent);