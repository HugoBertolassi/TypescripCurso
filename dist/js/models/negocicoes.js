export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
    paraTexto() {
        return `
        Negociacoes: ${Negociacoes}
        `;
    }
    ehIgual(negociacaoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacaoes.lista());
    }
}
//# sourceMappingURL=negocicoes.js.map