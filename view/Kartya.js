export default class Kartya {
  //adattagok
  //konst
  //tagfüggvények
  #obj = {};
  #szuloElem;
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kutyaKiir();
    this.gombELEM = $(".kivalaszt:last");
    console.log(this.gombELEM);
    this.esemenyKezelo();
  }
  kutyaKiir() {
    this.#szuloElem.append(
      `<div class="card col-lg-4 col-md-6">
              <div class="card-header">${this.#obj.nev}</div>
              <div class="card-body">${this.#obj.kor}</div>
              <div class="card-footer">${this.#obj.nem}</div>
              <button class="btn btn-success kivalaszt">Kiválaszt</button>
           </div>`
    );
  }
  esemenyKezelo() {
    this.gombELEM.on("click", () => {
      console.log(this);
      const e = new CustomEvent("kivalaszt", { detail: this.#obj });
      window.dispatchEvent(e);
    });
  }
}
