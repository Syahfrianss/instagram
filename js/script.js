
const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
let total = makanan1 + makanan2 + makanan3;
let diskon = 0.10 * total ;
let totalpembayaran = total - diskon;
document.getElementById('demo1').innerHTML = "Total Bayar = Rp " + total;
document.getElementById('demo2').innerHTML = "Total Bayar Diskon 10% = Rp " + totalpembayaran;