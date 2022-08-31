//decorator de propriedade de dom, para auxiliar ao pegar os dads do DOM

export function domInjector(seletor:string){
    return function(
        target:any,//assim nao temos acesso a instancia do decorator, por isso fazmos o getter
        propertyKey:string//nome da propriedade da classe
        //descriptor:PropertyDescriptor//habilita gravar sobre o metodo original da classe, por nao usar nesse caso
    ){
        console.log(`buscando elemento do DOM com o seletor  ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)
        
        let elemento:HTMLElement;//inicia com undefined
        const getter = function(){
            if(!elemento){//valida se em algum momento ja foi pegado o valor deste elemento durante o codigo, se sim, nao pega novamente
                elemento=<HTMLElement>document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            } 
           return elemento;
        }
        
        Object.defineProperty(target,
            propertyKey,
            {get:getter}//
        );
    }
}