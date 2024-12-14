const prompt=require("prompt-sync")({sigint:true}); 

function segitigaKebalik(rows) {
  for (let i = rows; i > 0; i--) {
    let spasi = " ".repeat(rows - i);
    let bintang = "*".repeat(2 * i - 1);
    console.log(spasi + bintang);
  }
}

let rows = parseInt(prompt("Masukkan jumlah baris: "));
segitigaKebalik(rows);