var aceptado = false;


function acceptTerms(){

        var check = document.getElementById("check");
        var terms = document.getElementById("term-cond");
        var frase = document.getElementById("terms");

    if (aceptado){
        check.checked = false;

        check.style.display= "inline";
        terms.style.textAlign = "left";
        terms.style.marginLeft = "1.7em"
        frase.style.backgroundColor = "white";
        frase.style.padding = "0em";
        frase.style.borderRadius = "0em";
        
        aceptado = false;

    }else{

       
        aceptado = true;
        
        check.style.display= "none";
        check.checked = true;
        terms.style.textAlign = "center";
        terms.style.marginLeft = "0"
        frase.style.backgroundColor = "#6DB7E2";
        frase.style.padding = "0.8em";
        frase.style.borderRadius = "1em";
    
    }

}
    
function onFoc(parte){
    var hijo = document.getElementById(parte).children;
    hijo[0].style.color = "#CECE34";
    hijo[0].style.transition = "all 0.3s ease"; 
    hijo[1].style.color = "#CECE34";
    hijo[2].style.borderColor = "#CECE34";
    hijo[1].style.transition = "all 0.3s ease";
    hijo[2].style.color = "#    005176"
    hijo[1].style.fontSize = "8px";
    



}

function noFoc(parte){
    var hijo = document.getElementById(parte).children;
    hijo[0].style.color = "gray";
    hijo[1].style.color = "#8e8e8e";
    hijo[2].style.borderColor = "#6DB7E2";
    
    if (hijo[2].value == ""){
        hijo[1].style.fontSize = "16px";

    }
}

