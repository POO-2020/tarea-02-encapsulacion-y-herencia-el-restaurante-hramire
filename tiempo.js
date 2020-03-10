export default class Tiempo{
    /**
     * 
     * @param {number} hora la hora del día 
     * @param {number} minuto minuto del día 
     * @param {string} periodo periodo del día, am pm 
     */
constructor(hora,minuto,periodo){
this.hora = hora
this.minuto = minuto
this.periodo = periodo
}
getFormato12(){
    return (`${this.hora}: ${this.minuto}. ${this.periodo}`)


}
getFormato24(){
    let hora24 
    let suma 
    let resta 

    if ((this.hora == 12) && (this.periodo == "am")){
        resta = this.hora - 12 
        hora24 = resta 

        return `${hora24}:${this.minuto} ${this.periodo}`
    }
    if ((this.hora >= 1 ) && (this.periodo == "pm")){
        suma = this.hora + 12
        hora24 = suma 
        
        return `${hora24}:${this.minuto} ${this.periodo}` 
    }
    else{
        return `${hora24}: ${this.minuto} ${this.periodo}`
    }
}
}

