import {} from "./fv.js";
import Kartya from "./Kartya.js";
import { kutyaLista } from "../adatok.js";
//kutya adatai meg jelenének a tartalom divben külön divekben a egymás mellet az egyes kutyák adatait
const cim = "Minden, amit a kutyáról kell tudni!";
let nev = "jenő";
nev = "béla";
console.log(nev);
const cimELEM = $("header");
console.log(cimELEM);
cimELEM.append(`<p>${cim}</p>`);
console.log(kutyaLista[0].nev);

const taroloElem = $(".tartalom");
