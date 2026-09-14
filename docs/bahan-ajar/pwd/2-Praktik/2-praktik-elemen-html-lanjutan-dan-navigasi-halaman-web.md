---
title: "2. Praktik Elemen HTML Lanjutan dan Navigasi Halaman Web"
---

# Praktik Elemen HTML Lanjutan dan Navigasi Halaman Web

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Membuat beberapa halaman web dalam satu proyek website.
2. Menggunakan elemen hyperlink untuk menghubungkan antar halaman.
3. Menyusun navigasi sederhana pada website.
4. Menggunakan elemen list untuk menampilkan informasi terstruktur.
5. Menampilkan gambar pada halaman web.

---

## B. Deskripsi Proyek Semester

Mahasiswa akan membangun:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 2**, proyek dikembangkan dengan menambahkan:

* Halaman tambahan (multi-page website)
* Navigasi antar halaman
* Konten layanan perusahaan
* Penambahan gambar pada halaman web

Output tahap ini adalah **website dengan beberapa halaman yang saling terhubung**.

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

3. Proyek dari **Praktikum Tahap 1**

    Struktur proyek sebelumnya:

    ```
    web-company-profile/
    │
    ├── index.html
    └── assets/
        ├── css/
        └── js/
    ```

---

## D. Langkah-Langkah Praktikum

---

### LANGKAH 1 – Menambahkan Halaman Baru

Tambahkan dua halaman baru pada folder proyek:

```
profil.html
layanan.html
```

Struktur proyek sekarang menjadi:

```
web-company-profile/
│
├── index.html
├── profil.html
├── layanan.html
│
└── assets/
    ├── css/
    └── js/
```

---

### LANGKAH 2 – Membuat Struktur HTML pada Halaman Baru

Isi file `profil.html` dengan struktur HTML berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Profil Perusahaan</title>
</head>
<body>

<h1>Profil Perusahaan</h1>

<p>
PT Maju Jaya Teknologi merupakan perusahaan yang bergerak
di bidang pengembangan perangkat lunak dan solusi digital.
</p>

</body>
</html>
```

Lakukan hal yang sama untuk `layanan.html`.

---

### LANGKAH 3 – Membuat Navigasi Website

Buka file `index.html`.

Tambahkan navigasi di bagian atas halaman:

```html
<nav>
    <a href="index.html">Beranda</a> |
    <a href="profil.html">Profil</a> |
    <a href="layanan.html">Layanan</a>
</nav>

<hr>
```

Lakukan hal yang sama pada semua halaman agar navigasi konsisten.

---

### LANGKAH 4 – Menambahkan Daftar Layanan

Buka file `layanan.html`.

Tambahkan konten berikut:

```html
<h2>Layanan Kami</h2>

<ul>
    <li>Pengembangan Website</li>
    <li>Pengembangan Aplikasi Mobile</li>
    <li>Konsultasi Teknologi Informasi</li>
    <li>Pembuatan Sistem Informasi</li>
</ul>
```

---

### LANGKAH 5 – Menambahkan Gambar

Buat folder baru:

```
assets/images
```

Struktur proyek sekarang:

```
web-company-profile/
│
├── index.html
├── profil.html
├── layanan.html
│
└── assets/
    ├── images/
    ├── css/
    └── js/
```

Letakkan satu gambar logo perusahaan di folder tersebut.

Misalnya:

```
logo.png
```

Tambahkan kode berikut di halaman `profil.html`.

```html
<h2>Logo Perusahaan</h2>

<img src="assets/images/logo.png" alt="Logo Perusahaan" width="200">
```

---

### LANGKAH 6 – Menguji Navigasi Website

Lakukan pengujian berikut:

1. Buka `index.html` pada browser
2. Klik menu **Profil**
3. Klik menu **Layanan**
4. Pastikan semua halaman dapat diakses dengan benar

Jika semua halaman dapat dibuka tanpa error, maka navigasi telah berhasil dibuat.

---

## E. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

* Struktur HTML5 lengkap
* Navigasi tersedia pada semua halaman
* Penulisan tag HTML menggunakan huruf kecil
* Indentasi kode rapi
* Penggunaan atribut `alt` pada gambar

---

## F. Tugas

Tambahkan halaman baru:

```
kontak.html
```

Isi halaman tersebut dengan informasi:

* Alamat perusahaan
* Nomor telepon
* Email

Tambahkan juga link menuju halaman tersebut pada menu navigasi.


---

## G. Refleksi Praktikum

Jawablah pertanyaan berikut:

1. Apa fungsi elemen `<a>` dalam HTML?
2. Mengapa navigasi harus konsisten pada setiap halaman website?
3. Apa fungsi atribut `alt` pada elemen `<img>`?

---

## H. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `index.html`, `profil.html`, dan `layanan.php`
2. Screenshot tampilan di web browser.
3. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan menambahkan **form pendaftaran online** pada website.
