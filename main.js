import { kutyaLista } from "./adatok.js";
import Kartyak from "./view/Kartyak.js";
const taroloElem = $(".tartalom");
const kivalasztottElem = $(".kivalasztott");
const kivalasztotLista = [];
new Kartyak(kutyaLista, taroloElem);
$(window).on("kivalaszt", (event) => {
  console.log(event.detail);
  kivalasztotLista.push(event.detail);
  console.log(kivalasztotLista);
  new Kartyak(kivalasztotLista, kivalasztottElem);
});
