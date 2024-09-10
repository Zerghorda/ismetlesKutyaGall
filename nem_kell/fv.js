export function kutyaKiir(kutya) {
  const tartalomELEM = $(".tartalom");
  tartalomELEM.append(
    `<div class="card col-lg-4 col-md-6">
        <div class="card-header">${kutya.nev}</div>
        <div class="card-body">${kutya.kor}</div>
        <div class="card-footer">${kutya.nem}</div>
        <button class="btn" btn-success>Kiválaszt</button>
     </div>`
  );
}
