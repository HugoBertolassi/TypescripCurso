import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/Negociacoes-view.js";

const controller= new NegociacaoController();
const form=document.querySelector(".form");
if(form){//query selector pode retnar null, tratamento de null
    form.addEventListener('submit',event=>{
        event.preventDefault();//evita que reccaregue a pagina, quandoecebe o subimit do forma
        controller.adiciona();//
    })
}else{
    throw Error('Nao foi possivel Inicializar aplicacao')
}

const botaoImporta=document.querySelector('#botao-importa');
if(botaoImporta){
    botaoImporta.addEventListener('click',()=>{
        controller.importaDados()})
}
else{
    throw Error('Botao importa nao encontrado')
}


//teste da criacao do view
//const negociacoesView= new NegociacoesView();
//const template=negociacoesView.template();
//console.log(template);