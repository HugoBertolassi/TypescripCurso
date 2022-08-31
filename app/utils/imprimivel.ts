//criar uma funcao desta forma e ser estendida nas classes, obriga que as classes tenham a funcao descrita internamente
//garante tambem o tipo do objeto em imprimir

export interface Imprimivel{
    paraTexto():string;
   
}
//por quereremos faz ela apenas forcar a inclusao do metodo, e nao ser possivel extender mais de uma clase, sera feitor que esta clase seja uma interface
/*export abstract class Imprimivel{
    public abstract paraTexto():string;

    
}*/