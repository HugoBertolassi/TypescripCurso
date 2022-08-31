
    export function escape(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal=descriptor.value;
        descriptor.value=function(...args:any[]){
            let retorno=metodoOriginal.apply(this,args);
            //iMPLEMENTACAO FUNCAO
            if(typeof retorno==='string'){
                console.log(`@escape em acao na classe 
                    ${this.constructor.name} para o metodo ${propertyKey}`)//esse comano permite pegar o nome da classe
                retorno=retorno.replace(/<script>[\s\S]*?<\/script/,"");
            }

            return retorno
        }

        


        return descriptor
    }