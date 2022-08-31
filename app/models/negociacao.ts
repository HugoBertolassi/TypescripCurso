import { Comparavel } from "../interface/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacoes } from "./negocicoes.js";

export class Negociacao implements Imprimivel,Comparavel<Negociacao>{
    constructor(//cria o construtor e as variaveis
        private _data:Date,
        public readonly quantidade:number,//fazer dessa forma permite apenas o get, porque bloquia a escrita fora do construtor
        public readonly valor:number///deixar assim, permite que se urarem um meodo do proprio tipo pode ser mudado. Assim olhar metodo do get data
    ){
      // super();//coloca pq e estendido de uma classe
        
    }

    get volume(){
        return this.valor * this.quantidade
    }
    get data():Date{
        const data=new Date(this._data.getTime());//Cria uma variavel que recebe o valor, e se apessoa tentar modificar não vai achar a vairavel
        return data;
    }


//Mesmo que o codigo acima mas da form mais usual
/*export class Negociacao{
    private _data: Date;
    private _quantidade:number;
    private _valor:number;
    private negociacoes:Negociacoes;

    constructor(data:Date,quantidade:number,valor:number){
        this._data=data;
        this._quantidade=quantidade
        this._valor=valor
    }
    get data(){
        return this._data;
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
    get volume(){
        return this._valor * this._quantidade
    }*/

    public static criaDe(dataString:string,quantidadeString:string,valorString:string):Negociacao{//static vira um metodo da propria classe
            const exp=/-/g;//expressao regular
            const date=new Date(dataString.replace(exp,','));
            const quantidade=parseInt(quantidadeString);
            const valor=parseInt(valorString);
            const negociacao=new Negociacao(
                date,
                quantidade,
                valor);
            return negociacao;
        
    }
    public paraTexto():string{
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
        `
    }
    public ehIgual(negociacao:Negociacao):boolean{
        return this.data.getDate()===negociacao.data.getDate()
            && this.data.getMonth()===negociacao.data.getMonth()
            && this.data.getFullYear()===this.data.getFullYear(); 
    }

}