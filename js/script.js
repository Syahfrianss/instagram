//Tugas 5
const mhs = [
  {namamhs: "Rafi", nilai: 85, figma: false},
  {namamhs: "Andre", nilai: 100, figma: true},
  {namamhs: "Yardan", nilai: 77, figma: false},
  {namamhs: "Taufiq", nilai: 92, figma: true},
  {namamhs: "Nathan", nilai: 55, figma: false}
];

let score = 0;
let grade = "";

for (let i = 0; i < mhs.length; i++) {
  score = mhs[i].nilai;
  if (mhs[i].figma) {
    score += 10;
  }

  if (score > 100) {
    grade = "A+";
  }else if (score >= 80 && score <= 100) {
    grade = "A";
  }else if (score >= 70 && score <= 80) {
    grade = "B";
  }else if (score >= 60 && score <= 70) {
    grade = "C";
  }else if (score >= 50 && score <= 60) {
    grade = "D";
  }
  else {
    grade = "E";
  }
  document.getElementById("mahasiswa").innerHTML +=`<li>${mhs[i].namamhs}:<br> Nilai= ${mhs[i].nilai}  Grade= ${grade}</li>`;
}
//Tugas 4
const mnhrg = [
  { nama1: "Nasi Pecel",
    harga1: 10000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"]},
  { nama1:"Nasi Jagung", 
    harga1: 25000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"]},
  { nama1:"Nasi Ayam", 
    harga1: 15000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"]},
  { nama1:"Nasi Krawu", 
    harga1: 12000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"]},
  { nama1:"Nasi Rendang", 
    harga1: 15000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"]},
  { nama1:"Nasi Lele", 
    harga1: 13000, 
    varian:["Pedas Banget", "Pedas", "Pedas Original"]},
];
const level = [1,2,3,4,5,6,7,8,9,10];

let totalB = 0;
let member = true;
let mnhrgB = "";

for (let c = 0; c < mnhrg.length; c++) {
  if (mnhrg[c].nama1 !== "Nasi Pecel" || (mnhrg[c].nama1 === "Nasi Pecel" && member)) {
    mnhrgB += `<li>${mnhrg[c].nama1}: Rp ${mnhrg[c].harga1} Varian: ${mnhrg[c].varian.join(',')}</li>`;
  }
}


const pesanan = [mnhrg[0].nama1 , mnhrg[1].nama1 , mnhrg[4].nama1];
let pesan = "";
for (let d = 0;d < mnhrg.length; d++) {
  if(pesanan.includes(mnhrg[d].nama1)) {
    let variant = mnhrg[d].varian[1];
    let lvl = 0;
    if (mnhrg[d].nama1 === "Nasi Jagung") {
      lvl = level[9];
      variant = "Pedas banget";
    }else if (mnhrg[d].nama1 === "Nasi Rendang") {
      variant = "Pedas";
    }else if (mnhrg[d].nama1 === "Nasi Pecel") {
      if(member) {
        totalB += 5000;
        pesan += `<li>Nasi Pecel: Rp 5000 (PROMO) Varian: ${variant}</li>`;
      }
    }
    if(mnhrg[d].nama1 === "Nasi Jagung" || mnhrg[d].nama1 === "Nasi Rendang") {
      totalB += mnhrg[d].harga1;
      pesan += `<li>${mnhrg[d].nama1}: Rp ${mnhrg[d].harga1} Varian: ${variant} ${lvl > 0 ? `+ Level ${lvl}` : ""}</li>`;
    }
  }
}
let disc = 0.1;
let pajak = 0.11;
let totalbayarB= totalB;

if (member) {
  totalbayarB = totalB - (totalB * disc) + (totalB * pajak);
} else {
  totalbayarB = totalB;
}
document.getElementById("m1").innerHTML = "Menu<br>" + mnhrgB;
document.getElementById("p1").innerHTML = "Pesanan<br>" + pesan;
document.getElementById("pjkdsk").innerHTML = "Pajak = 11% <br> Diskon = 10%" ;
document.getElementById("t1").innerHTML = "Total yang Harus Dibayar = Rp" + `${totalbayarB}`;


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