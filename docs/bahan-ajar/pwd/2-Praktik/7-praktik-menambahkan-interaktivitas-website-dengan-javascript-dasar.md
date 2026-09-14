---
title: "7. Praktik Menambahkan Interaktivitas Website dengan JavaScript Dasar"
---

# Praktik Menambahkan Interaktivitas Website dengan JavaScript Dasar

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Menghubungkan file JavaScript eksternal ke halaman HTML.
2. Menggunakan variabel dan fungsi dasar JavaScript.
3. Menampilkan output menggunakan `alert()`, `console.log()`, dan elemen HTML.
4. Membuat event klik pada tombol.
5. Menambahkan interaktivitas sederhana pada website proyek.

---

## B. Deskripsi Proyek Semester

Mahasiswa mengembangkan:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 7**, proyek dikembangkan dengan menambahkan:

* File JavaScript eksternal (`script.js`)
* Tombol interaktif pada halaman website
* Pesan sambutan pengguna
* Fitur sederhana berbasis JavaScript

Output tahap ini adalah **website yang tidak hanya statis, tetapi sudah memiliki interaksi dasar**.

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

3. Proyek dari **Praktikum Tahap 6**

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

### LANGKAH 1 – Membuat File JavaScript

Masuk ke folder:

```text
assets/js/
```

Buat file baru:

```text
script.js
```

---

### LANGKAH 2 – Menghubungkan JavaScript ke HTML

Tambahkan kode berikut sebelum `</body>` pada semua halaman HTML:

```html
<script src="assets/js/script.js"></script>
```

Contoh:

```html
<body>

<h1>Selamat Datang</h1>

<script src="assets/js/script.js"></script>
</body>
```

---

### LANGKAH 3 – Menampilkan Pesan Sambutan

Isi `script.js`:

```javascript
alert("Selamat datang di website kami!");
```

Simpan, lalu buka `index.html`.

---

### LANGKAH 4 – Menggunakan Console Log

Tambahkan:

```javascript
console.log("Website berhasil dimuat");
```

Lihat hasilnya melalui:

* Klik kanan browser
* Inspect
* Console

---

### LANGKAH 5 – Membuat Variabel

Tambahkan:

```javascript
let namaPerusahaan = "PT Maju Jaya Teknologi";
console.log(namaPerusahaan);
```

---

### LANGKAH 6 – Membuat Fungsi Sederhana

Tambahkan di `script.js`:

```javascript
function tampilPesan() {
    alert("Terima kasih telah mengunjungi website kami.");
}
```

---

### LANGKAH 7 – Membuat Tombol Interaktif

Tambahkan pada `index.html`:

```html
<button onclick="tampilPesan()">Klik Saya</button>
```

Saat tombol diklik, fungsi dijalankan.

---

### LANGKAH 8 – Menampilkan Teks ke Halaman

Tambahkan di HTML:

```html
<p id="info"></p>
```

Tambahkan di `script.js`:

```javascript
document.getElementById("info").innerHTML =
"Website ini dibuat dengan HTML, CSS, dan JavaScript.";
```

---

### LANGKAH 9 – Input Nama Pengguna

Tambahkan:

```javascript
let nama = prompt("Masukkan nama Anda:");
alert("Halo, " + nama);
```

⚠️ Jalankan hanya saat pengujian, karena `prompt()` akan muncul saat halaman dibuka.

---

### LANGKAH 10 – Pengujian Program

Pastikan:

1. Alert muncul saat halaman dibuka
2. Tombol dapat diklik
3. Teks muncul di halaman
4. Console menampilkan pesan
5. Tidak ada error pada Console

---

## E. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

- Menggunakan file JavaScript eksternal
- Nama fungsi jelas dan sesuai tujuan
- Kode rapi dan diberi indentasi
- Tidak ada error di browser console
- Semua file terhubung dengan benar

---

## F. Tugas

Tambahkan salah satu fitur berikut:

1. Tombol Ganti Warna Background

    ```javascript
    function gantiWarna() {
        document.body.style.backgroundColor = "lightblue";
    }
    ```

2. Tombol Menampilkan Jam

    ```javascript
    function tampilJam() {
        alert(new Date());
    }
    ```

3. Salam Berdasarkan Nama

    ```javascript
    let nama = prompt("Nama Anda:");
    document.getElementById("info").innerHTML =
    "Selamat datang, " + nama;
    ```

---

## G. Refleksi Praktikum

Jawab pertanyaan berikut:

1. Apa fungsi file JavaScript eksternal?
2. Mengapa `<script>` sebaiknya diletakkan sebelum `</body>`?
3. Apa perbedaan `alert()` dan `console.log()`?
4. Apa fungsi event `onclick`?

---

## H. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `script.js` yang telah dibuat.
2. Screenshot tampilan halaman web ketika diakses di web browser desktop/mobile.
3. Penjelasan mengenai praktikum yang telah dikerjakan.
4. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan menambahkan validasi form dengan JavaScript.