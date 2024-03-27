let menuharga = {
    menu1: {menu: 'Es Kopi Susu', harga: 10000},
    menu2: {menu: 'Roti Bakar', harga: 25000},
    menu3: {menu: 'Tahu Telor', harga: 15000},
    menu4: {menu: 'Nasi Goreng', harga: 12000},
};
document.getElementById('d9').innerHTML = menuharga.menu1.menu + " Rp " + menuharga.menu1.harga;
document.getElementById('d10').innerHTML = menuharga.menu2.menu + " Rp " + menuharga.menu2.harga;
document.getElementById('d11').innerHTML = menuharga.menu3.menu + " Rp " + menuharga.menu3.harga;
document.getElementById('d12').innerHTML = menuharga.menu4.menu + " Rp " + menuharga.menu4.harga;

let totalA = 0;
for (let menu in menuharga) {
  totalA += menuharga[menu].harga;
}
let diskonA = 0.1 * totalA;
let totalpembayaranA = totalA - diskonA;

document.getElementById("d13").innerHTML = "Total = Rp " + totalA;
document.getElementById("d14").innerHTML = "Total Diskon = Rp " + diskonA;
document.getElementById("d15").innerHTML = "Total Pembayaran = Rp " + totalpembayaranA;


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