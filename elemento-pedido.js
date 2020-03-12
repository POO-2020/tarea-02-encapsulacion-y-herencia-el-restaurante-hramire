export default class ElementoPedido{
    /**
     * 
     * @param {string} producto producto vendido 
     * @param {number} cantidad precio total
     */
    constructor(producto,cantidad){
        this._producto = producto
        this._cantidad = cantidad
    }
    getDescripcion(){
       return (`${this._cantidad} X ${this._producto.nombre} ${this._producto.precio.valor * this._cantidad}`)
    }
} 