---
title: "8. DOM (Document Object Model) dan Event pada JavaScript"
---

# DOM (Document Object Model) dan Event pada JavaScript

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan konsep Document Object Model (DOM).
2. Memahami hubungan antara HTML dan DOM.
3. Mengakses elemen HTML menggunakan JavaScript.
4. Memanipulasi isi dan atribut elemen HTML.
5. Menggunakan event JavaScript untuk membuat interaksi dinamis.
6. Membuat validasi sederhana menggunakan DOM dan event.

---

## 1. Pendahuluan

Pada pertemuan sebelumnya, mahasiswa telah mempelajari dasar JavaScript seperti:

* Variabel
* Fungsi
* Percabangan
* Event sederhana (`onclick`)

Namun, JavaScript akan menjadi lebih powerful ketika dapat:

* Mengubah isi halaman secara langsung
* Mengubah style elemen
* Membaca input pengguna
* Merespons berbagai aktivitas pengguna

Untuk melakukan hal tersebut digunakan **Document Object Model (DOM)**.

DOM memungkinkan JavaScript berinteraksi langsung dengan elemen HTML.

---

## 2. Pengertian DOM

DOM (Document Object Model) adalah representasi struktur halaman HTML dalam bentuk objek yang dapat diakses dan dimanipulasi menggunakan JavaScript.

Setiap elemen HTML dianggap sebagai objek.

Contoh:

```html
<h1>Halo</h1>
```

Dianggap sebagai objek:

* tag
* atribut
* isi teks

---

## 3. Struktur DOM

Browser membaca HTML dan membentuk struktur pohon (DOM Tree).

Contoh:

```html
<html>
    <body>
        <h1>Judul</h1>
        <p>Paragraf</p>
    </body>
</html>
```

Struktur:
```text
html
│
└── body
    ├── h1
    └── p
```

---

## 4. Mengakses Elemen HTML

JavaScript dapat mengambil elemen HTML dengan berbagai cara.

---

### 4.1 getElementById()

Mengambil elemen berdasarkan `id`.

HTML:

```html
<p id="teks">Halo Dunia</p>
```

JavaScript:

```javascript
document.getElementById("teks");
```

---

### 4.2 getElementsByClassName()

Mengambil elemen berdasarkan class.

```javascript
document.getElementsByClassName("menu");
```

---

### 4.3 getElementsByTagName()

Mengambil berdasarkan tag HTML.

```javascript
document.getElementsByTagName("p");
```

---

### 4.4 querySelector()

Mengambil elemen pertama yang cocok.

```javascript
document.querySelector(".menu");
```

---

### 4.5 querySelectorAll()

Mengambil semua elemen yang cocok.

```javascript
document.querySelectorAll("p");
```

---

## 5. Mengubah Isi Elemen

---

### 5.1 innerHTML

Digunakan untuk mengubah isi HTML.

HTML:

```html
<p id="demo"></p>
```

JavaScript:

```javascript
document.getElementById("demo").innerHTML =
"Selamat belajar JavaScript";
```

---

### 5.2 textContent

Digunakan untuk mengubah teks tanpa HTML.

```javascript
document.getElementById("demo").textContent =
"Halo";
```

---

## 6. Mengubah Style dengan JavaScript

Contoh:

```javascript
document.getElementById("demo").style.color =
"blue";
```

Contoh lain:

```javascript
document.getElementById("demo").style.fontSize =
"24px";
```

---

## 7. Mengubah Atribut HTML

Contoh pada gambar:

HTML:

```html
<img id="gambar" src="lama.jpg">
```

JavaScript:

```javascript
document.getElementById("gambar").src =
"baru.jpg";
```

---

## 8. Event pada JavaScript

Event adalah aksi yang dilakukan pengguna atau browser.

Contoh:

* Klik mouse
* Mengetik keyboard
* Menggerakkan mouse
* Submit form

---

## 9. Jenis-Jenis Event Dasar

| Event       | Fungsi                       |
| ----------- | ---------------------------- |
| onclick     | Saat elemen diklik           |
| onchange    | Saat nilai berubah           |
| onmouseover | Saat mouse diarahkan         |
| onmouseout  | Saat mouse keluar            |
| onkeyup     | Saat tombol keyboard dilepas |
| onsubmit    | Saat form dikirim            |

---

## 10. Contoh Event onclick

HTML:

```html
<button onclick="ubahTeks()">Klik</button>

<p id="hasil"></p>
```

JavaScript:

```javascript
function ubahTeks() {
    document.getElementById("hasil").innerHTML =
    "Tombol berhasil diklik";
}
```

---

## 11. Event addEventListener()

Cara modern menangani event.

HTML:

```html
<button id="btn">Klik</button>
```

JavaScript:

```javascript
document.getElementById("btn")
.addEventListener("click", function() {
    alert("Tombol ditekan");
});
```

Kelebihan:

* Lebih fleksibel
* Bisa banyak event
* Praktik modern JavaScript

---

## 12. Validasi Form Sederhana

Validasi memastikan data diisi dengan benar.

---

### Contoh Validasi Nama

HTML:

```html
<input type="text" id="nama">
<button onclick="cekNama()">Kirim</button>
```

JavaScript:

```javascript
function cekNama() {

    let nama =
    document.getElementById("nama").value;

    if(nama == "") {
        alert("Nama wajib diisi");
    } else {
        alert("Data berhasil dikirim");
    }

}
```

---

## 13. Best Practice DOM dan Event

1. Gunakan `addEventListener()`
2. Pisahkan HTML dan JavaScript
3. Gunakan nama ID yang jelas
4. Hindari manipulasi berlebihan
5. Gunakan validasi input

---

## 14. Kesalahan Umum

- Salah penulisan ID
- Elemen belum dimuat saat script dijalankan
- Salah penempatan script
- Tidak menutup kurung
- Salah penggunaan `innerHTML`

---

## Rangkuman

Pada pertemuan ini telah dipelajari:

1. Konsep DOM
2. Struktur DOM Tree
3. Cara mengakses elemen HTML
4. Manipulasi isi, style, dan atribut
5. Event JavaScript
6. Validasi form sederhana

DOM merupakan fondasi penting untuk membuat website interaktif dan dinamis.

---

## Referensi

* Duckett, J. (2011). *JavaScript and jQuery: Interactive Front-End Web Development*.
* [Mozilla Developer Network (MDN) Web Docs. JavaScript Guide.](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [W3Schools. JavaScript Tutorial.](https://www.w3schools.com/js/)
