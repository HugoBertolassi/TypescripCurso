import { NegociacoesDoDia } from "../interface/negociacao-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{
    public obterNegociacoes():Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
            .then(res=>res.json())//recebeu os dados e converte para json
            .then((dados:NegociacoesDoDia[])=>{//Array<any>)=>{funciona mas nao garante o nome da variaveis dados pela interface
                return dados.map(dadoDeHoje=>{//pega os dados de hoje e converte um novo array do tipo negociacao
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante)
                })
            })
         
    }
}