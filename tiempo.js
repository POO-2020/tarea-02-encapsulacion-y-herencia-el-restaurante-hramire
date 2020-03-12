export default class Tiempo{
    /**
     * 
     * @param {number} hora la hora del día 
     * @param {number} minuto minuto del día 
     * @param {string} periodo periodo del día, am pm 
     */
constructor(hora,minuto,periodo){
this._hora = hora
this._minuto = minuto
this._periodo = periodo
}
getFormato12(){
    return (`${this._hora}: ${this._minuto}. ${this._periodo}`)


}
getFormato24(){
    let hora24 
    let suma 
    let resta 

    if ((this._hora == 12) && (this._periodo == "am")){
        resta = this._hora - 12 
        hora24 = resta 

        return `${hora24}:${this._minuto} ${this._periodo}`
    }
    if ((this.hora >= 1 ) && (this.periodo == "pm")){
        suma = this.hora + 12
        hora24 = suma 
        
        return `${hora24}:${this._minuto} ${this._periodo}` 
    }
    else{
        return `${hora24}: ${this._minuto} ${this._periodo}`
    }
}
}

