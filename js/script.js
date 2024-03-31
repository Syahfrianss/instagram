//Tugas 4
let mnhrg = {
  nasipecel: { 
    nama1: "Nasi Pecel",
    harga1: 10000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"], 
    level:["Lvl 10","Lvl 9","Lvl 8","Lvl 7","Lvl 6","Lvl 5","Lvl 4","Lvl 3","Lvl 2","Lvl 1"]
  },
  nasijagung: { 
    nama1:"Nasi Jagung", 
    harga1: 25000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"],
    level: ["Lvl 10","Lvl 9","Lvl 8","Lvl 7","Lvl 6","Lvl 5","Lvl 4","Lvl 3","Lvl 2","Lvl 1"]
  },
  nasiayam: { 
    nama1:"Nasi Ayam", 
    harga1: 15000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"],
    level:["Lvl 10","Lvl 9","Lvl 8","Lvl 7","Lvl 6","Lvl 5","Lvl 4","Lvl 3","Lvl 2","Lvl 1"]
  },
  nasikrawu: { 
    nama1:"Nasi Krawu", 
    harga1: 12000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"], 
    level:["Lvl 10","Lvl 9","Lvl 8","Lvl 7","Lvl 6","Lvl 5","Lvl 4","Lvl 3","Lvl 2","Lvl 1"]
  },
  nasirendang: { 
    nama1:"Nasi Rendang", 
    harga1: 15000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"],  
    level:["Lvl 10","Lvl 9","Lvl 8","Lvl 7","Lvl 6","Lvl 5","Lvl 4","Lvl 3","Lvl 2","Lvl 1"]
  },
  nasilele: { 
    nama1:"Nasi Lele", 
    harga1: 13000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"],   
    level:["Lvl 10","Lvl 9","Lvl 8","Lvl 7","Lvl 6","Lvl 5","Lvl 4","Lvl 3","Lvl 2","Lvl 1"]
  },
};
mnhrg.nasipecel.promo = 5000;
const pesanan = ["nasipecel","nasijagung","nasirendang"];
let totalB = 0;
for (const i of pesanan) {
  totalB += mnhrg[i].harga1;
  if (mnhrg[i].promo) {
    totalB -= mnhrg[i].promo;
  }
}
const member = true;
if (member) {
  let diskonB = 0.1 * totalB;
  let pajak = 0.11 * totalB;
  totalbayarB = totalB - diskonB + pajak;
}
document.getElementById("diskon").innerHTML = "Diskon: Rp " + diskonB;
document.getElementById("pajak").innerHTML = "Pajak: Rp ";
document.getElementById("bayar").innerHTML = "Total Bayar: Rp " + totalbayarB;
/*
let totalB = 0;
let menuB = "";
for (let i = 0; i < mnhrg.length; i++) {
menuB += `<li>${mnhrg[i].nama1}: Rp ${mnhrg[i].harga1}</li>`;
totalB += mnhrg[i].harga1;
}
let diskonB = 0.1 * totalB;
let totalpembayaranB = totalB - diskonB;

document.getElementById("menuB").innerHTML = menuB;
document.getElementById("d16").innerHTML = "Total = Rp " + totalB;
document.getElementById("d17").innerHTML = "Total Diskon = Rp " + diskonB;
document.getElementById("d18").innerHTML = "Total Pembayaran = Rp " + totalpembayaranB;
*/

/* TUGAS 3 Object */
let menuharga = [
    { namamenu: "Es Kopi Susu", harga: 10000},
    { namamenu:"Roti Bakar", harga: 25000},
    { namamenu:"Tahu Telor", harga: 15000},
    { namamenu:"Nasi Goreng", harga: 12000},
];
//document.getElementById('d9').innerHTML = menuharga.menu1.menu + " Rp " + menuharga.menu1.harga;
//document.getElementById('d10').innerHTML = menuharga.menu2.menu + " Rp " + menuharga.menu2.harga;
//document.getElementById('d11').innerHTML = menuharga.menu3.menu + " Rp " + menuharga.menu3.harga;
//document.getElementById('d12').innerHTML = menuharga.menu4.menu + " Rp " + menuharga.menu4.harga;

let totalA = 0;
let menuA = "";
for (let i = 0; i < menuharga.length; i++) {
  menuA += `<li>${menuharga[i].namamenu}: Rp ${menuharga[i].harga}</li>`;
  totalA += menuharga[i].harga;
}
let diskonA = 0.1 * totalA;
let totalpembayaranA = totalA - diskonA;

document.getElementById("menuA").innerHTML = menuA;
document.getElementById("d13").innerHTML = "Total = Rp " + totalA;
document.getElementById("d14").innerHTML = "Total Diskon = Rp " + diskonA;
document.getElementById("d15").innerHTML = "Total Pembayaran = Rp " + totalpembayaranA;

/*Tugas 2 */
const menutakjil = ['Es Kopi Susu', 'Roti Bakar', 'Tahur Telor', 'Nasi Goreng'];
menutakjil[3] = 'Nasi Pecel';
menutakjil[4] = 'Ayam Goreng';
document.getElementById('d1').innerHTML = menutakjil[0];
document.getElementById('d2').innerHTML = menutakjil[1];
document.getElementById('d3').innerHTML = menutakjil[2];
document.getElementById('d4').innerHTML = menutakjil[3];
document.getElementById('d5').innerHTML = menutakjil[4];

menutakjil[0] = 10000;
menutakjil[1] = 25000;
menutakjil[2] = 15000;
menutakjil[3] = 12000;
menutakjil[4] = 10000;
let total = menutakjil[0] + menutakjil[1] + menutakjil[2] + menutakjil[3] + menutakjil[4];
let diskon = 0.10 * total ;
let totalpembayaran = total - diskon;
document.getElementById('d6').innerHTML = "Total = Rp " + total;
document.getElementById('d7').innerHTML = "Total Diskon = Rp " + diskon;
document.getElementById('d8').innerHTML = "Total Bayar = Rp " + totalpembayaran;

/*Tugas 1 */
const menu = [10000, 25000, 15000];
const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
let totalmenu = makanan1 + makanan2 + makanan3;
let diskonmenu = 0.10 * totalmenu ;
let totalbayar = totalmenu - diskonmenu;
document.getElementById('demo4').innerHTML = "Total Bayar = Rp " + totalmenu;
document.getElementById('demo5').innerHTML = "Total Diskon 10% = Rp " + diskonmenu;
document.getElementById('demo6').innerHTML = "Total Pembayaran = Rp " + totalbayar;