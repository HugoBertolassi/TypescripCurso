import { getOriginalNode } from "../../node_modules/typescript/lib/typescript.js";
import { domInjector } from "../decorators/dom-injector.js";
import { escape } from "../decorators/escape.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-empo-execucao.js";
import { DiaDaSemana } from "../enums/diaSemana.js";
//import { NegociacoesDoDia } from "../interface/negociacao-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negocicoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/Negociacoes-view.js";



export class NegociacaoController{
    @domInjector('#data')
    private inputData:HTMLInputElement ;
    @domInjector('#quantidade')
    private inputQuantidade:HTMLInputElement;
    @domInjector('#valor')
    private inputValor:HTMLInputElement;
    private negociacoes=new Negociacoes();//inicializa vazia
    private negociacoesView= new NegociacoesView("#negociacoesView");
    private mensagemView=new MensagemView('#mensagemView');
    private negociacaoService=new NegociacoesService();
    
    constructor(){
        //Os valores do dom foram atribuidos pelo getter do decorator domInjector, e essa esa forma anterior
       /* this.inputData  =document.querySelector("#data") as HTMLInputElement;// CASTINGforca a variavel ser HTMLInputELement
        this.inputQuantidade    =<HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor =document.querySelector("#valor") as HTMLInputElement;*/
        this.negociacoesView.update(this.negociacoes);
    }
    @escape
    @inspect
    @logarTempoDeExecucao()//esta informando que essa e uma fncao Decorator,deve ativar o decoratorno tsconfig
    public adiciona():void{
       //const negociacao=this.criaNegociacao();
       const negociacao =Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
       )
       
       //console.log(negociacao)
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negocicaoes em dias uteis sao aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao)
        imprimir(negociacao)
        this.atualizaView();
        this.limparFormulario()  
      /* if(negociacao.data.getDay()>0 && negociacao.data.getDay()<6){ //valida o dia da semana se é uitl
            this.negociacoes.adiciona(negociacao)
            //console.log(this.negociacoes.lista())
            //console.log(this.negociacoes.lista().pop())//teste de remover valor da lista
            this.atualizaView();
            this.limparFormulario()    
        }
        else{
            this.mensagemView.update('Apenas negocicaoes em dias uteis sao aceitas')
        }*/

    }
    
    private ehDiaUtil(data:Date):boolean{
       
        return data.getDay()>DiaDaSemana.DOMINGO && data.getDay()<DiaDaSemana.SABADO;

    }
    /*
    private criaNegociacao():Negociacao{
        const exp=/-/g;//expressao regular
        const date=new Date(this.inputData.value.replace(exp,','));
        const quantidade=parseInt(this.inputQuantidade.value);
        const valor=parseInt( this.inputValor.value);
        const negociacao=new Negociacao(
            date,
            quantidade,
            valor);
        return negociacao;
    }*/

    private limparFormulario():void{
        this.inputData.value="";
        this.inputQuantidade.value="";
        this.inputValor.value="";
        this.inputData.focus();

    }
    //atualiza todas as view
    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso')
   
    }
    public importaDados():void{
        this.negociacaoService.obterNegociacoes()//retora uma lista de negociacao
        .then(negociacoesDehoje=>{//validar a repeticao da lista
            return negociacoesDehoje.filter(negociacaoDehoje=>{//para verificar todo o array de negociacao
                return !this.negociacoes
                    .lista()
                    .some(negociacao=>negociacao.ehIgual(negociacaoDehoje))//retorna true se encontrar um valor igual e para
            })
        })
        .then(negociacoesDehoje=>{
            for(let negociacao of negociacoesDehoje){
                this.negociacoes.adiciona(negociacao)
            }
            this.negociacoesView.update(this.negociacoes)
        })
        //importar dados original, nao por micro sercvico
        // fetch('http://localhost:8080/dados')
        //     .then(res=>res.json())//recebeu os dados e converte para json
        //     .then((dados:NegociacoesDoDia[])=>{//Array<any>)=>{funciona mas nao garante o nome da variaveis dados pela interface
        //         return dados.map(dadoDeHoje=>{//pega os dados de hoje e converte um novo array do tipo negociacao
        //             return new Negociacao(
        //                 new Date(),
        //                 dadoDeHoje.vezes,
        //                 dadoDeHoje.montante)
        //         })
        //     })
        //     .then(negociacoesDehoje=>{
        //         for(let negociacao of negociacoesDehoje){
        //             this.negociacoes.adiciona(negociacao)
        //         }
        //         this.negociacoesView.update(this.negociacoes)
        //     })
    }
}