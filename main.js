import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elemento-pedido.js";
import Direcion from "./direccion.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Restaurante from "./restaurante.js";
import ClienteFrecuente from "./cliente-frecuente.js";

class Main{
    constructor(){
        this.precio = new Precio(60.10)
        this.producto = new Producto("Pasta grande", this.precio)
        this.producto2 = new Producto("Pizza", new Precio(89.00))
        this.elementoPedido = new ElementoPedido(this.producto, 2)
        this.elementoPedido2 = new ElementoPedido(this.producto2, 1)
        this.direccion = new Direcion("Cerrada de la hacienda", 43, 6, "Rinconada de la hacienda", 44284, "Colima", "Colima")
        this.cliente = new Cliente("Lord Boldemort", this.direccion, 3121943772)
        this.cliente2 = new Cliente("Daniel Ramirez Gomez", this.direccion, 3129439333)
        
        let datoRestaurante = {
            nombre: "Giordanos",
            telefono: 3115867,
            direccion: this.direccion
        }


        let datosPedido = {
            fecha: new Fecha(new Date(2020,2,25)),
            hora: new Tiempo(12 , 43, "pm"),
            cliente: this.cliente,
            numeroPedido: 12
        }

        let datosPedido2 = {
            fecha: new Fecha(new Date(2018,2,26)),
            hora: new Tiempo(5, 20, "pm"),
            cliente: this.cliente2,
            numeroPedido: 13
        }

        let datosClienteFrecuente = {
            nombre: "El niño polla",
            direccion: new Direcion("Bahia de manzanillo", 20, 7, "Villa de alvarez", 244876, "Colima", "Colima"),
            telefono: 3129439333,
            numeroCliente: 130,
            fecha: new Fecha(new Date(2016,6,24))
        }

        this.pedido = new Pedido(datosPedido)
        this.pedido2 = new Pedido(datosPedido2)

        this.clienteFrecuente = new ClienteFrecuente(datosClienteFrecuente)

        this.restaurante = new Restaurante(datoRestaurante)
        
        this.pedido.agregarElemento(this.elementoPedido)
        this.pedido.agregarElemento(this.elementoPedido2)
        this.pedido.agregarElemento(this.elementoPedido2)

    }

    testElementoProducto()
    { console.log(this.elementoPedido.getDescripcion())}

    testDireccion()
    { console.log(this.direccion.getFormatoExtendido())
      console.log(this.direccion.getFormatoCorto())}

    testCliente()
    { console.log(this.cliente.getPerfil())}

    testPedido()
    {
        
        console.log(this.pedido.getResumen())
        console.log(this.pedido.getNumeroElementos())
        console.log(this.pedido.getProductos())
        console.log(this.pedido.getCostoTotal())
        this.pedido.listarElementos()
        
        
    }

    testRestaurante()
    {
        this.restaurante.registrarProducto(this.producto)
        this.restaurante.registrarProducto(this.producto2)

        //Prueba "mismo pedido 2 veces"
        console.log(this.restaurante.registrarPedido(this.pedido))
        console.log(this.restaurante.registrarPedido(this.pedido))

        //Prueba "elimino el pedido exitosamente"
        console.log(this.restaurante.eliminarPedido(this.pedido))

        //Prueba "no encuentro el pedido, regreso false"
        console.log(this.restaurante.eliminarPedido(this.pedido))

        //Prueba "despues de eliminarlo agrego otro pedido"
        console.log(this.restaurante.registrarPedido(this.pedido))

        //Prueba "modificar pedido"
        console.log(this.restaurante.modificarPedido(this.pedido, this.pedido2))

        this.restaurante.listarProductos()
        this.restaurante.listarPedidos()
    }
}

let tester = new Main()
tester.testElementoProducto();
tester.testDireccion();
tester.testCliente();
tester.testPedido();
tester.testRestaurante();