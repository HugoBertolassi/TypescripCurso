import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table class="table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                       <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                       </tr>
                        `;
        }).join()}
            </tbody>
        </table>

        `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = this.template(model);
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
//# sourceMappingURL=Negociacoes-view.js.map