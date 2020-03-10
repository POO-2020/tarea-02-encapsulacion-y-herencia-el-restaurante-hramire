import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Direccion from "./direccion.js"
import Tiempo from "./tiempo.js"
import Cliente from "./cliente.js"
import Producto from "./producto.js"
import elementoPedido from "./elemento-pedido.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"

class Main {
    constructor(tiempo,precio,direccion,fecha,cliente){
        this.tiempo = new Tiempo (9,45,"pm");
        this.precio = new Precio (127.00)
        this.precio2 = new Precio (122.32)
        this.direccion = new Direccion ("Cerrada de la hacienda" ,43, 3, "rinconada de la hacienda", "20978", "Colima", "Villa de alvarez")
        this.fecha = new Fecha (5,2,2010)
        this.cliente = new Cliente ("Hector Ramirez", this.direccion,  31219437732)
        this.producto = new Producto ("Pizza Mexicana grande", this.precio)
        this.producto2 = new Producto ("Pasta bolognesa", this.precio2 )
        this.elementoPedido = new elementoPedido (this.producto, 2 )
        this.elementoPedido2 = new elementoPedido (this.producto2, 2)
        this.pedido = new Pedido (this.fecha, this.tiempo,this.cliente)
        this.restaurante = new Restaurante ("Giordanos ristorante", 3121943772, this.direccion)

        
    }
    getTiempo(){
        console.log(this.tiempo.getFormato24())
    }
    getPrecio(){
        console.log(this.precio.getPrecio())
    }
    getDireccion(){
        console.log(this.direccion.getFormatoCorto())
        console.log(this.direccion.getFormatoExtendido())
    }
    getFecha(){
        console.log(this.fecha.getAños())
        console.log(this.fecha.getMeses())
        console.log(this.fecha.getSemanas())
        console.log(this.fecha.getDias())
        console.log(this.fecha.getDiaFecha())
        console.log(this.fecha.getFecha())

    }
    getCliente(){
        console.log(this.cliente.getPerfil())
    }
    getProducto(){
        console.log(this.producto.getDescripcion())
    }
    getDescripcion(){
        console.log(this.elementoPedido.getDescripcion())
    }
    getPedido(){
        this.pedido.agregarElemento(this.elementoPedido2)
        this.pedido.listarElemento()
        this.pedido.agregarElemento(this.elementoPedido)
        this.pedido.listarElemento()
        console.log(this.pedido.getCostoTotal())
        console.log(this.pedido.getNumeroElementos())
        console.log (this.pedido.getNumeroPoductos())
        console.log (this.pedido.getResumen())
    }
    getRestaurante(){
        this.restaurante.registrarProducto(this.producto)
        this.restaurante.registrarProducto(this.producto2)
        this.restaurante.listarProducto()
        this.restaurante.registrarPedido(this.pedido)
        this.restaurante.listarPedidos()
    }
    
     

}
let app = new Main()
app.getTiempo()
app.getPrecio()
app.getDireccion()
app.getFecha()
app.getCliente()
app.getProducto()
app.getDescripcion()
app.getPedido()
app.getRestaurante()
