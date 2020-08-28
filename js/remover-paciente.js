//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut"); //remove a linha mais devagar, foi criado class no 
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com um duplo click");
//         this.remove(); //this é o dono do evento, tomar cuidado quando usar ele
//     });
//}); // remove paciente com 2 clicks

    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode;
    //paiDoAlvo.remove(); ou tudo em uma linha como abaixo

    //event.target.parentNode.remove(); //remove instantaneamente a linha



    //testee

