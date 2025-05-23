/* *FUNGCTION & SCOPE*
Challenge

Studi Kasus: Toko Kue Sederhana
Kamu punya toko kue. Ada 3 jenis kue:

Brownies: Rp10.000
Donat: Rp8.000
Croissant: Rp12.000

Buat function bernama hitungTotal() yang:

Menerima 3 input: jumlah brownies, donat, croissant

Menghitung total harga semua kue

Mengembalikan total harga

Tampilkan hasilnya pakai console.log()

✨ Plus Point:
Tampilkan juga kalimat: "Total belanjaan kamu: Rp xxx" 
*/

function hitungTotal(jml_B, jml_D, jml_C) {
  const hargaBrownies = 10000;
  const hargaDonat = 8000;
  const hargaCroissant = 12000;

  let diskonBrownies = hargaBrownies;
  let diskonDonat = hargaDonat;
  let diskonCroissant = hargaCroissant;
  if (jml_B >= 5) {
    diskonBrownies = hargaBrownies * 0.1;
  }
  if (jml_D >= 3) {
    diskonDonat = hargaDonat * 0.15;
  }
  if (jml_C >= 2) {
    diskonCroissant = hargaCroissant * 0.2;
  }

  let totalOrder =
    jml_B * diskonBrownies + jml_D * diskonDonat + jml_C * diskonCroissant;

  return totalOrder;
}
console.log(jml_B, jml_D, jml_C);

const btn = document.getElementById("hitungTotal");
const hasil = document.getElementById("hasil");

btn.addEventListener("click", function () {
  // Ambil nilai input, parse ke angka
  const Brownies = parseInt(document.getElementById("jml_B").value) || 0;
  const Donat = parseInt(document.getElementById("jml_D").value) || 0;
  const Croissant = parseInt(document.getElementById("jml_C").value) || 0;
  // Hitung total harga
  const total = hitungTotal(Brownies, Donat, Croissant);

  // Tampilkan hasil di halaman
  hasil.textContent = "Total belanjaan kamu: Rp " + total;
});
