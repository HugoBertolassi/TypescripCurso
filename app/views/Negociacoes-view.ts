import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/negocicoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
    
   //@escape
    protected template(model:Negociacoes):string{//em funcao de retornar o html+dados //foi colocado protected para evitar alguem acessar esse metodo
        return`
        <table class="table class="table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao=>{
                    return`
                       <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                       </tr>
                        `;
                    }).join()}
            </tbody>
        </table>

        `
    }
    update(model:Negociacoes):void{
        const template=this.template(model);
        //console.log(template);
        this.elemento.innerHTML= this.template(model);
    }

    private formatarData(data:Date):string{
        return new Intl.DateTimeFormat().format(data);
    }
}