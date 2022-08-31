//serve para cirar funca que vai ser chamada em qualque rluga do codio
export function logarTempoDeExecucao(emSegundos:boolean =false){
    return function(//estutura de um decorator
        target:any,//prototipacao do target
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal=descriptor.value;
        descriptor.value=function(...args:Array<any>){//cria um array para pegar uma quantidade indefinida de parametros
            let divisor=1;
            let unidade="milisegundos";
            if(emSegundos){
                divisor=1000;
                unidade="segundos";

            }
            const t1=performance.now();
            const retorno=metodoOriginal.apply(this,args);//chmar meodo original
            const t2=performance.now();
            console.log(`${propertyKey},tempo de execucao: ${(t2-t1)/divisor} ${unidade}`);
            retorno;
        }
        return descriptor;
    }
}