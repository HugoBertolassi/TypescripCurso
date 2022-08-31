//pasta utils, tem ptotipos de codsgio que serao utilizados pelo resto do sistema

import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "./imprimivel.js";


export function imprimir(...objetos:Imprimivel[]){
    for(let objeto of objetos){
        console.log(objeto.paraTexto())
    }
}