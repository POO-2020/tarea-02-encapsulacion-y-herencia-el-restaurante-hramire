export default class Precio { 
    constructor(valor){
    this.valor = valor
    };

getPrecio(){
    return(`$${this.valor}`)
}
}