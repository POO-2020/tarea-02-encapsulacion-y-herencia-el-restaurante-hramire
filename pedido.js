export default class Pedido{
    constructor({numeroPedido,fecha,hora,cliente}){
        this._numeroPedido = numeroPedido
        this._fecha = fecha
        this._hora = hora
        this._cliente = cliente
        this._elementosPedidos = [

        ]
    }
    getResumen(){
        return (`${this._fecha.getFecha()},${this._hora.getFormato12()},${this.getNumeroElementos()}, ${this.getNumeroPoductos()},$${this. getCostoTotal()}`)

    }
    getNumeroElementos(){
        let numero = 0 

        this._elementosPedidos.forEach( (elemento, i) =>{
            numero = i 
        })
        numero++
        return (numero)

    }
    getNumeroPoductos(){
        let numero2 = 0 
        this.elementosPedidos.forEach((elemento,i)=>{
          numero2 = (numero2+ (elemento.cantidad))
        })
        return (numero2)

    }
    getCostoTotal(){
        let total = 0 
        this._elementosPedidos.forEach(elemento =>{
            total = (total + ((elemento.cantidad) * (elemento.producto.precio.valor)))
        })
        return (total)

    }
    agregarElemento(pizza){
        this.elementosPedidos.push(pizza)

    }
    listarElemento(){
        this._elementosPedidos.forEach(elemento =>{
            console.log(elemento.getDescripcion())
        })

    }
    
}