export default class Pedido{
    constructor(fecha,hora,cliente){
        this.fecha = fecha
        this.hora = hora
        this.cliente = cliente
        this.elementosPedidos = [

        ]
    }
    getResumen(){
        return (`${this.fecha.getFecha()},${this.hora.getFormato12()},${this.getNumeroElementos()}, ${this.getNumeroPoductos()},$${this.getCostoTotal()}`)

    }
    getNumeroElementos(){
        let numero = 0 

        this.elementosPedidos.forEach( (elemento, i) =>{
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
        this.elementosPedidos.forEach(elemento =>{
            total = (total + ((elemento.cantidad) * (elemento.producto.precio.valor)))
        })
        return (total)

    }
    agregarElemento(pizza){
        this.elementosPedidos.push(pizza)

    }
    listarElemento(){
        this.elementosPedidos.forEach(elemento =>{
            console.log(elemento.getDescripcion())
        })

    }
    
}