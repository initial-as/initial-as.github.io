---
title: "8. Praktik Validasi Form dan Manipulasi DOM dengan JavaScript"
---

# Praktik Validasi Form dan Manipulasi DOM dengan JavaScript

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Mengakses elemen HTML menggunakan DOM JavaScript.
2. Mengubah isi dan style elemen HTML secara dinamis.
3. Menggunakan event JavaScript untuk interaksi pengguna.
4. Membuat validasi form sederhana menggunakan JavaScript.
5. Menambahkan fitur interaktif pada website proyek.

---

## B. Deskripsi Proyek Semester

Mahasiswa mengembangkan:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 8**, proyek dikembangkan dengan menambahkan:

* Validasi form pendaftaran
* Manipulasi elemen menggunakan DOM
* Event JavaScript modern
* Pesan error dan notifikasi pengguna

Output tahap ini adalah **website dengan form interaktif dan validasi input sederhana**.

---

## C. Persiapan Alat dan Software

Mahasiswa wajib menyiapkan:

1. Text Editor

   * Visual Studio Code (direkomendasikan)
   * Notepad++
   * Sublime Text

2. Browser

   * Google Chrome
   * Mozilla Firefox

3. Developer Tools Browser

4. Proyek dari **Praktikum Tahap 7**

    Pastikan struktur proyek:

    ```text
    web-company-profile/
    │
    ├── index.html
    ├── profil.html
    ├── layanan.html
    ├── daftar.html
    │
    └── assets/
        ├── images/
        ├── css/
        │   └── style.css
        └── js/
            └── script.js
    ```

---

## D. Langkah-Langkah Praktikum

---

### LANGKAH 1 – Menyiapkan Form Pendaftaran

Buka `daftar.html`.

Tambahkan form berikut:

```html
<h2>Form Pendaftaran</h2>

<form id="formDaftar">

    <label>Nama:</label>
    <input type="text" id="nama">

    <label>Email:</label>
    <input type="email" id="email">

    <button type="submit">Daftar</button>

</form>

<p id="pesan"></p>
```

---

### LANGKAH 2 – Menghubungkan File JavaScript

Pastikan file berikut sudah ada:

```html
<script src="assets/js/script.js"></script>
```

Letakkan sebelum `</body>`.

---

### LANGKAH 3 – Mengambil Elemen dengan DOM

Buka `script.js`.

Tambahkan:

```javascript
let form =
document.getElementById("formDaftar");

let pesan =
document.getElementById("pesan");
```

---

### LANGKAH 4 – Menambahkan Event Submit

Tambahkan:

```javascript
form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Form diproses");

});
```

Penjelasan:

* `submit` → event saat form dikirim
* `preventDefault()` → mencegah reload halaman

---

### LANGKAH 5 – Mengambil Nilai Input

Tambahkan di dalam event:

```javascript
let nama =
document.getElementById("nama").value;

let email =
document.getElementById("email").value;
```

---

### LANGKAH 6 – Membuat Validasi Nama

Tambahkan:

```javascript
if(nama == "") {

    pesan.innerHTML =
    "Nama wajib diisi";

}
```

---

### LANGKAH 7 – Membuat Validasi Email

Tambahkan:

```javascript
else if(email == "") {

    pesan.innerHTML =
    "Email wajib diisi";

}
```

---

### LANGKAH 8 – Menampilkan Pesan Berhasil

Tambahkan:

```javascript
else {

    pesan.innerHTML =
    "Pendaftaran berhasil";

}
```

---

### LANGKAH 9 – Memberi Warna Pesan

Tambahkan:

```javascript
pesan.style.color = "red";
```

Untuk sukses:

```javascript
pesan.style.color = "green";
```

Contoh lengkap:

```javascript
if(nama == "") {

    pesan.innerHTML =
    "Nama wajib diisi";

    pesan.style.color = "red";

}
```

---

### LANGKAH 10 – Membersihkan Form Setelah Berhasil

Tambahkan:

```javascript
document.getElementById("formDaftar").reset();
```

---

### LANGKAH 11 – Menambahkan Event Fokus Input

Tambahkan:

```javascript
document.getElementById("nama")
.addEventListener("focus", function() {

    console.log("Input nama aktif");

});
```

---

### LANGKAH 12 – Pengujian Program

Lakukan pengujian:

| Skenario     | Hasil yang Diharapkan |
| ------------ | --------------------- |
| Nama kosong  | Muncul pesan error    |
| Email kosong | Muncul pesan error    |
| Semua diisi  | Pesan berhasil        |
| Form dikirim | Halaman tidak reload  |

---

## E. Contoh Kode Lengkap

### HTML

```html
<form id="formDaftar">

    <label>Nama:</label>
    <input type="text" id="nama">

    <label>Email:</label>
    <input type="email" id="email">

    <button type="submit">Daftar</button>

</form>

<p id="pesan"></p>
```

---

### JavaScript

```javascript
let form =
document.getElementById("formDaftar");

let pesan =
document.getElementById("pesan");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let nama =
    document.getElementById("nama").value;

    let email =
    document.getElementById("email").value;

    if(nama == "") {

        pesan.innerHTML =
        "Nama wajib diisi";

        pesan.style.color = "red";

    }

    else if(email == "") {

        pesan.innerHTML =
        "Email wajib diisi";

        pesan.style.color = "red";

    }

    else {

        pesan.innerHTML =
        "Pendaftaran berhasil";

        pesan.style.color = "green";

        form.reset();

    }

});
```

---

## F. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

- Menggunakan DOM JavaScript
- Menggunakan `addEventListener()`
- Validasi form berjalan
- Tidak ada error di console
- Kode rapi dan terstruktur

---

## G. Tugas

Tambahkan salah satu fitur berikut:

1. Validasi Panjang Nama

    ```javascript
    if(nama.length < 3)
    ```

2. Validasi Format Email Sederhana

    ```javascript
    if(!email.includes("@"))
    ```

---

## H. Refleksi Praktikum

Jawab pertanyaan berikut:

1. Apa fungsi DOM dalam JavaScript?
2. Mengapa menggunakan `preventDefault()`?
3. Apa kelebihan `addEventListener()` dibanding `onclick`?
4. Mengapa validasi form penting?

---

## I. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `daftar.html` dan `script.js` yang telah dibuat.
2. Screenshot:
   * Form validasi error
   * Form berhasil submit
   * Console browser
3. Penjelasan mengenai praktikum yang telah dikerjakan.
4. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan mengubah proyek ke dalam bentuk PHP.