import Kartya from "./Kartya.js";
export default class Kartyak {
  #lista = [];
  #taroloELEM;
  constructor(lista, taroloElem) {
    this.#lista = lista;
    this.#taroloELEM = taroloElem;
    this.#taroloELEM.empty();
    this.kutyaKiir();
  }
  kutyaKiir() {
    this.#lista.forEach((elem) => {
      new Kartya(elem, this.#taroloELEM);
    });
  }
}
