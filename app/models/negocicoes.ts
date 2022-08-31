import { Comparavel } from "../interface/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel,Comparavel<Negociacoes>{
    //lista de negociacoes
    //private negociacoes:Array<Negociacao>=[];
    private negociacoes:Negociacao[]=[];//mesmo codigo que o de cima em typescript

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }
    
    lista():ReadonlyArray<Negociacao>{//for;a o array so ser lido
    //lista():readonly Negociacao[]{//mesmo codigo da linha de ima
        return [...this.negociacoes];//FAZ ISSO PARA DEVOLVER  LISTA EM MEMORIA COPIADA, NAO PERMITINDO ALTERAR A LISTA
    }
    public paraTexto():string{
        return `
        Negociacoes: ${Negociacoes}
        `
    }
    public ehIgual(negociacaoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes)=== JSON.stringify(negociacaoes.lista());
    }
}
/*
const negociacoes=new Negociacoes();
negociacoes.lista().forEach(n=>{//xempo pegar dado
    n.quantidade;
})*/