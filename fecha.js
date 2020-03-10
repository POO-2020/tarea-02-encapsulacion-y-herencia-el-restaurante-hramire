export default class Fecha{
    /**
     * 
     * @param {number} dia día del año
     * @param {number} mes Mes del año
     * @param {number} año Año actual
     */
    constructor(dia,mes,año){
      this.dia = dia 
      this.mes = mes 
      this.año = año 
      this.date = new Date (this.año, this.mes, this.dia)
    }
    getAños(){
        let añosTotales = 2020 - this.año
        return (añosTotales)

    }
    getMeses(){
        let meses= (2020 - this.año)*12
        return(meses)

    }
    getSemanas(){
        let semanas = (2020 - this.año)*(12)*4
        return (semanas)

    }
    getDias(){
        let dias = (2020 - this.año)*(12)*(4)*(7)
        return (dias)

    }
    getFecha(){
        let mes = ['ene','feb','mar','abr','may','jun','jul','agos','sept','oct','nov','dic'];
        return `${this.dia}/${mes[this.mes -1]}/${this.año}`



    }
    
    getDiaFecha(){
        this.date.getDay()
        let dia =  ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
        return `${dia[ this.date.getDay()]}`
    }


} 