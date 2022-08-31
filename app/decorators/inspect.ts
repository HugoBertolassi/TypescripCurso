
export function inspect(//pode fazer o decorator de forma direta, se ela nao for receber argumewnto
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal=descriptor.value;
        descriptor.value=function(...args:any[]){
            console.log(`---Metodo ${propertyKey}`)
            console.log(`------Parametros ${JSON.stringify(args)}`)
            const retorno=metodoOriginal.apply(this,args);
            console.log(`------retorno: ${JSON.stringify(retorno)}`)
            return retorno
        }

        


        return descriptor
    }

/*export function inspect(){
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal=descriptor.value;
        descriptor.value=function(...args:any[]){
            console.log(`---Metodo ${propertyKey}`)
            console.log(`------Parametros ${JSON.stringify(args)}`)
            const retorno=metodoOriginal.apply(this,args);
            console.log(`------retorno: ${JSON.stringify(retorno)}`)
            return retorno
        }

        


        return descriptor
    }
}/*/
//eSQUELETO DE UM DECORATOR
/*
export function inspect(){
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal=descriptor.value;
        descriptor.value=function(...args:any[]){
            const retorno=metodoOriginal.apply(this,args);
            //iMPLEMENTACAO FUNCAO
            return retorno
        }

        


        return descriptor
    }
}
/*/