const buttonGerar = document.querySelector("#button-gerar");
buttonGerar.addEventListener("click", gerarLink)
const linkDiv = document.querySelector(".link-container span");

var link = "";
var apresentacao = ""
var periodo = "";
var horas;

horas = new Date().getHours();

const alertDiv = document.querySelector(".alert");

function gerarLink() {
    const nomeInput = document.querySelector("#name");
    const nome = nomeInput.value;
    
    const dddInput = document.querySelector("#ddd");
    var ddd = dddInput.value;

    const numberInput = document.querySelector("#number");
    let number = numberInput.value;
    
    number = number.replace("-","")
    if(number.length == 8) {
        number = "9" + number; 
    } else if(number.length < 8) {
        console.log("Número inválido. Tente Novamente")
    }

    numberInput.value = ""

    if(horas >= 6 && horas < 12) {
        periodo = `Bom+dia`;
    } else if(horas >= 12 && horas < 18) {
        periodo = `Boa+tarde`;
    }

    if(nome != "") {
        apresentacao = `&text=Bom+dia%21%0D%0ASou+${nome}+da+MAXHUMAN+UBERABA-MG`
    } else {
        apresentacao = `&text=Bom+dia%21%0D%0ASou+da+MAXHUMAN+UBERABA-MG`
    }
    
    link = `https://api.whatsapp.com/send/?phone=55${ddd}${number}${apresentacao}`

    if(horas >= 6 && horas < 12) {
        link = link;
    }
    else if(horas >= 12 && horas < 18) {
        link = link.replace("Bom+dia", "Boa+tarde");
    } else {
        link = link.replace("Bom+dia", "Boa+noite");
    }

    //link = `https://wa.me/55${ddd}${number}&text=Bom+dia%21%0D%0ASou+${nome}+da+MAXHUMAN+UBERABA-MG`

    console.log(link)
    linkDiv.innerHTML = link;
}

linkDiv.addEventListener("click", copyClipboard)

function copyClipboard() {
    const textareaInput = document.createElement("textarea")
    textareaInput.value = link;
    
    document.body.appendChild(textareaInput);
    
    textareaInput.select();
    
    document.execCommand("copy");
    
    document.body.removeChild(textareaInput);
    
    console.log(textareaInput.value);
    
    alertDiv.innerHTML = "Link copiado!"
    setTimeout(() => {
        alertDiv.innerHTML = ""
    }, 1500)
  }
  

//https://api.whatsapp.com/send/?phone=5534991288792&text=Prezada+Veronyk%2C+Boa+noite%21%0D%0ASou+Daniel+da+MAXHUMAN+UBERABA-MG%2C+tudo+bem%3F%0D%0A+&app_absent=0