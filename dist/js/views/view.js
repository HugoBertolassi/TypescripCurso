export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error("Sleeltor nao definido no html");
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        const t11 = performance.now();
        const template = this.template(model);
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de excuçã do metodo update ${(t2 - t11) / 1000} segundos`);
    }
}
//# sourceMappingURL=view.js.map