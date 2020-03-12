export default class Restaurante{
    constructor(nombre,telefono,direccion){
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion 
        this._productos = []
        this._pedidos = []
    }
    registrarProducto(x){
        this._productos.push(x)
    }
    listarProducto(){
        this._productos.forEach(x =>{
            console.log(x.getDescripcion())})

    }
    registrarPedido(y){
        this._pedidos.push(y)
    }
    listarPedidos(){
        this._pedidos.forEach(y =>{
            console.log(y.getResumen())
        })
    }
}