//interface com generics
export interface Comparavel<T>{//quando cria o generc, tem que definir o tipo na funcao que vai usar
    ehIgual(objeto:T):boolean;
}