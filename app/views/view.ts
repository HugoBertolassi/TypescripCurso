import { escape } from "../decorators/escape.js";
import { inspect } from "../decorators/inspect.js";

export abstract class  View<T>{//t É UM TIPO GENERICO //abscteract class exge que os metodos sejam feitos nos filhos
    protected elemento:HTMLElement;//permite as classes filhas acessar a classe pai
    private escapar:boolean=false;
    constructor(seletor:string,escapar?:boolean){//colocar o interrogacaodepois, mostra que o parametro e opcional, mas tem que fazer no codiog caso o parametro seja verdadeiro
        const elemento=document.querySelector(seletor);
        if(elemento){
            this.elemento=elemento as HTMLElement;//antes ele podia aceitar null, aqui forcamos a aceitar somente html
        }
        else{
            throw Error("Sleeltor nao definido no html")
        }
                
        if(escapar){
                this.escapar=escapar;
        }

    }

    //@inspect
    update(model:T):void{
        const t11=performance.now();//testa a performance da pagna
        const template=this.template(model);
        //console.log(template);
        /*if(this.escapar){
            template.replace(/<script>[\s\S]*?<\/script/,"")//suibstitui para banco se algume digital algo ou tentar coloacar um scrit
        }*/
        this.elemento.innerHTML= template
        const t2=performance.now();
        console.log(`Tempo de excuçã do metodo update ${(t2-t11)/1000} segundos`)
    
    
    }
   /*template(model:T):string{(template original)
        throw Error('classe filha tem que implementar metodo template na cas filho')//mensagem em runtime
    }*/
    protected abstract template(model:T):string;//forca criar os templates nas classes filhas

}