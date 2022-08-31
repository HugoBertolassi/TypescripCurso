//interface pode extender quantas interface quiser

import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

//essa funcao tem por objetivo juntar as interfaces desejadas, para que apenmaas precse chamar essa na classe

export interface Modelo<T> extends Imprimivel,Comparavel<T>{

}