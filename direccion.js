export default class Direccion {
  constructor(
    calle,
    numeroExterior,
    numeroInterior,
    colonia,
    codigoPostal,
    ciudad,
    municipio
  ) {
    this._calle = calle;
    this._numeroExterior = numeroExterior;
    this._numeroInterior = numeroInterior;
    this._colonia = colonia;
    this._codigoPostal = codigoPostal;
    this._ciudad = ciudad;
    this._municipio = municipio;
  }
  getFormatoCorto() {
    return `${this._calle}, ${this._numeroExterior}`
  }
  getFormatoExtendido() {
    return `${this._calle}, ${this.__numeroExterior},${this._numeroInterior}, ${this._colonia}, ${this._codigoPostal}, ${this._ciudad}, ${this._municipio}`;
  }
}
