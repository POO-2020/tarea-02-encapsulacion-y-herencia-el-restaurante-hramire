export default class Restaurante{
    constructor(nombre,telefono,direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion 
        this.productos = []
        this.pedidos = []
    }
    registrarProducto(x){
        this.productos.push(x)
    }
    listarProducto(){
        this.productos.forEach(x =>{
            console.log(x.getDescripcion())})

    }
    registrarPedido(y){
        this.pedidos.push(y)
    }
    listarPedidos(){
        this.pedidos.forEach(y =>{
            console.log(y.getResumen())
        })
    }
}