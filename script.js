var btnTranslate= document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outText= document.querySelector("#out-text");
var serverUrl ="https://api.funtranslations.com/translate/dothraki.json"
function getTranslationUrl(input){
    return serverUrl +"?text=" + input;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong happened");
}

function clickEvent(){
    //outText.innerText="Translated  " + txtInput.value;
    fetch(getTranslationUrl(txtInput.value))
    .then(response =>response.json())
    .then(json => outText.innerText=json.contents.translated)
    .catch(errorHandler);
}


btnTranslate.addEventListener("click", clickEvent);