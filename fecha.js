export default class Fecha{
    /**
     * 
     * @param {number} dia día del año
     * @param {number} mes Mes del año
     * @param {number} año Año actual
     */
    constructor(dia,mes,año){
      this._dia = dia 
      this._mes = mes 
      this._año = año 
      this._date = new Date (this._año, this._mes, this._dia)
    }
    getAños(){
        let añosTotales = 2020 - this._año
        return (añosTotales)

    }
    getMeses(){
        let meses= (2020 - this._año)*12
        return(meses)

    }
    getSemanas(){
        let semanas = (2020 - this._año)*(12)*4
        return (semanas)

    }
    getDias(){
        let dias = (2020 - this._año)*(12)*(4)*(7)
        return (dias)

    }
    getFecha(){
        let mes = ['ene','feb','mar','abr','may','jun','jul','agos','sept','oct','nov','dic'];
        return `${this._dia}/${mes[this._mes -1]}/${this._año}`



    }
    
    getDiaFecha(){
        this._date.getDay()
        let dia =  ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
        return `${dia[ this._date.getDay()]}`
    }


} 