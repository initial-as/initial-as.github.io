---
title: "PWD 7 - Pengenalan JavaScript dan Dasar Pemrograman Sisi Klien"
---

# Pengenalan JavaScript dan Dasar Pemrograman Sisi Klien

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan peran JavaScript dalam pengembangan web modern.
2. Memahami hubungan HTML, CSS, dan JavaScript pada halaman web.
3. Menuliskan sintaks dasar JavaScript dengan benar.
4. Menggunakan variabel, tipe data, operator, dan percabangan sederhana.
5. Menampilkan output JavaScript pada browser.
6. Membuat interaksi dasar pada halaman web menggunakan JavaScript.

---

## 1. Pendahuluan

Pada pertemuan sebelumnya, mahasiswa telah mempelajari HTML sebagai struktur halaman web dan CSS sebagai pengatur tampilan.

Namun, halaman web modern tidak cukup hanya memiliki struktur dan desain. Website saat ini membutuhkan **interaktivitas**, seperti:

* Tombol yang merespons klik pengguna
* Validasi form sebelum dikirim
* Perubahan isi halaman secara dinamis
* Perhitungan otomatis
* Menu interaktif

Untuk memenuhi kebutuhan tersebut digunakan **JavaScript**. JavaScript adalah bahasa pemrograman yang berjalan di browser dan digunakan untuk membuat halaman web menjadi dinamis dan interaktif.

---

## 2. Peran JavaScript dalam Web Development

Dalam pengembangan web dasar:

* HTML → Struktur konten
* CSS → Tampilan visual
* JavaScript → Perilaku/interaksi

Ketiganya saling melengkapi. Contoh sederhana:

* HTML membuat tombol
* CSS mempercantik tombol
* JavaScript memberi aksi saat tombol diklik

---

## 3. Cara Menambahkan JavaScript ke HTML

Terdapat tiga cara utama, yaitu _inline_, _internal_, dan _external_.

---

### 3.1 _Inline_ JavaScript

Ditulis langsung pada elemen HTML.

```html
<button onclick="alert('Halo')">Klik</button>
```

---

### 3.2 _Internal_ JavaScript

Ditulis di dalam tag `<script>`.

```html
<script>
    alert("Selamat datang");
</script>
```

---

### 3.3 _External_ JavaScript (Direkomendasikan)

Ditulis di file terpisah.

```html
<script src="assets/js/script.js"></script>
```

Isi `script.js`:

```javascript
alert("Halo dari file eksternal");
```

Kelebihan:

* Lebih rapi
* Mudah dikelola
* Bisa digunakan ulang

---

## 4. Sintaks Dasar JavaScript

JavaScript terdiri dari perintah-perintah yang dieksekusi browser.

Contoh:

```javascript
console.log("Belajar JavaScript");
```

Setiap perintah dapat diakhiri dengan titik koma `;`

---

## 5. Variabel

Variabel digunakan untuk menyimpan data.

---

### 5.1 Deklarasi Variabel

```javascript
let nama = "Aulia";
let umur = 20;
const kampus = "UIN";
```

---

### 5.2 Jenis Deklarasi

#### `let`

Nilai dapat berubah.

```javascript
let nilai = 80;
nilai = 90;
```

#### `const`

Nilai tetap.

```javascript
const phi = 3.14;
```

#### `var`

Cara lama, masih ada tetapi kurang direkomendasikan.

---

## 6. Tipe Data Dasar

---

### 6.1 String

Teks.

```javascript
let nama = "Andi";
```

---

### 6.2 Number

Angka.

```javascript
let umur = 21;
```

---

### 6.3 Boolean

Benar atau salah.

```javascript
let aktif = true;
```

---

### 6.4 Null

Nilai kosong.

```javascript
let data = null;
```

---

## 7. Operator

---

### 7.1 Operator Aritmatika

```javascript
let hasil = 5 + 3;
```

Jenis:

* `+` tambah
* `-` kurang
* `*` kali
* `/` bagi
* `%` sisa bagi

---

### 7.2 Operator Perbandingan

```javascript
5 > 3
```

Jenis:

* `==`
* `===`
* `!=`
* `>`
* `<`

---

### 7.3 Operator Logika

* `&&` dan
* `||` atau
* `!` tidak

---

## 8. Output JavaScript

---

### 8.1 Alert

Menampilkan kotak pesan.

```javascript
alert("Data berhasil disimpan");
```

---

### 8.2 Console

Menampilkan output di Console browser.

```javascript
console.log("Tes output");
```

---

### 8.3 Menampilkan ke HTML

```html
<p id="hasil"></p>
```

```javascript
document.getElementById("hasil").innerHTML = "Halo Dunia";
```

---

## 9. Input Pengguna

Menggunakan `prompt()`:

```javascript
let nama = prompt("Masukkan nama:");
alert("Halo " + nama);
```

---

## 10. Percabangan Sederhana

Digunakan untuk pengambilan keputusan.

```javascript
let nilai = 80;

if (nilai >= 75) {
    alert("Lulus");
} else {
    alert("Tidak Lulus");
}
```

---

## 11. Fungsi

Fungsi adalah blok kode yang dapat dipanggil ulang.

```javascript
function salam() {
    alert("Selamat belajar");
}

salam();
```

---

## 12. Event Dasar

Event adalah aksi pengguna, seperti klik.

```html
<button onclick="salam()">Klik</button>
```

---

## 13. Best Practice JavaScript Dasar

1. Gunakan file eksternal `.js`
2. Gunakan `let` dan `const`
3. Gunakan nama variabel yang jelas
4. Pisahkan HTML, CSS, dan JS
5. Gunakan console untuk debugging

---

## 14. Kesalahan Umum

- Salah penulisan huruf besar-kecil
- Lupa tanda kutip
- Salah nama variabel
- Script dipanggil sebelum elemen HTML tersedia
- Tidak menutup kurung atau kurawal

---

## Rangkuman

Pada pertemuan ini telah dipelajari:

1. Peran JavaScript dalam web
2. Cara menambahkan JavaScript ke HTML
3. Variabel dan tipe data
4. Operator dasar
5. Output dan input sederhana
6. Percabangan
7. Fungsi dan event dasar

JavaScript merupakan fondasi penting untuk membuat website menjadi interaktif dan dinamis.

---

## Referensi

* Duckett, J. (2011). *JavaScript and jQuery: Interactive Front-End Web Development*.
* [Mozilla Developer Network (MDN) Web Docs. JavaScript Guide.](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [W3Schools. JavaScript Tutorial.](https://www.w3schools.com/js/)
