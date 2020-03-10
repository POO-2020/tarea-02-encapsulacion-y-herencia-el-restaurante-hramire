export default class ElementoPedido{
    /**
     * 
     * @param {string} producto producto vendido 
     * @param {number} cantidad precio total
     */
    constructor(producto,cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    getDescripcion(){
       return (`${this.cantidad} X ${this.producto.nombre} ${this.producto.precio.valor * this.cantidad}`)
    }
} 