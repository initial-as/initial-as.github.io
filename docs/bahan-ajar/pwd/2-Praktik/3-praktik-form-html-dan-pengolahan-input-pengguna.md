---
title: "3. Praktik Form HTML dan Pengolahan Input Pengguna"
---

# Praktik Form HTML dan Pengolahan Input Pengguna

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Membuat halaman form pendaftaran menggunakan HTML.
2. Menggunakan berbagai jenis input form secara tepat.
3. Menerapkan validasi dasar HTML5 pada form.
4. Mengintegrasikan halaman form ke dalam website yang sudah ada.
5. Mendesain form yang terstruktur dan mudah digunakan.

---

## B. Deskripsi Proyek Semester

Mahasiswa mengembangkan:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 3**, proyek dikembangkan dengan menambahkan:

* Halaman pendaftaran (`daftar.html`)
* Form input data pengguna
* Validasi form dasar (HTML5)
* Integrasi ke navigasi website

Output tahap ini adalah **form pendaftaran yang siap diproses pada tahap berikutnya (PHP)**.

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

3. Proyek dari **Praktikum Tahap 2**

    Struktur proyek sebelumnya:

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

---

## D. Langkah-Langkah Praktikum

---

### LANGKAH 1 – Menambahkan Halaman Form

Tambahkan file baru:

```
daftar.html
```

Struktur proyek menjadi:

```
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
    └── js/
```

---

### LANGKAH 2 – Membuat Struktur HTML Dasar

Isi `daftar.html` dengan struktur berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Form Pendaftaran</title>
</head>
<body>

<h1>Form Pendaftaran</h1>

</body>
</html>
```

---

### LANGKAH 3 – Menambahkan Navigasi

Tambahkan navigasi agar terhubung dengan halaman lain:

```html
<nav>
    <a href="index.html">Beranda</a> |
    <a href="profil.html">Profil</a> |
    <a href="layanan.html">Layanan</a> |
    <a href="daftar.html">Daftar</a>
</nav>

<hr>
```

⚠️ Pastikan navigasi ini juga ditambahkan ke semua halaman lain.

---

### LANGKAH 4 – Membuat Struktur Form

Tambahkan kode berikut di bawah judul:

```html
<form action="#" method="POST">

</form>
```

---

### LANGKAH 5 – Menambahkan Input Form

Lengkapi form dengan elemen berikut:

```html
<form action="#" method="POST">

    <label>Nama Lengkap:</label><br>
    <input type="text" name="nama" required><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Password:</label><br>
    <input type="password" name="password" required><br><br>

    <label>Jenis Kelamin:</label><br>
    <input type="radio" name="jk" value="L"> Laki-laki
    <input type="radio" name="jk" value="P"> Perempuan<br><br>

    <label>Hobi:</label><br>
    <input type="checkbox" name="hobi"> Membaca
    <input type="checkbox" name="hobi"> Olahraga
    <input type="checkbox" name="hobi"> Gaming<br><br>

    <label>Jurusan:</label><br>
    <select name="jurusan">
        <option value="TI">Teknologi Informasi</option>
        <option value="SI">Sistem Informasi</option>
    </select><br><br>

    <label>Alamat:</label><br>
    <textarea name="alamat"></textarea><br><br>

    <button type="submit">Daftar</button>

</form>
```

---

### LANGKAH 6 – Menambahkan Validasi HTML5

Tambahkan atribut validasi:

```html
<input type="text" name="nama" required placeholder="Masukkan nama lengkap">

<input type="password" name="password" minlength="6">

<input type="number" name="umur" min="17" max="60">
```

---

### LANGKAH 7 – Pengujian Form

Lakukan pengujian:

1. Buka `daftar.html`
2. Klik tombol submit tanpa mengisi form
3. Pastikan validasi berjalan
4. Isi form dan klik submit

---

## E. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

- Menggunakan atribut `name` pada setiap input
- Menggunakan label untuk setiap field
- Menggunakan validasi HTML5
- Struktur form rapi dan mudah dibaca
- Navigasi konsisten di semua halaman

---

## F. Tugas

Tambahkan:

1. Field:

   * Nomor telepon
   * Tanggal lahir

2. Gunakan atribut:

    ```html
    <input type="date">
    <input type="tel">
    ```

3. Tambahkan placeholder pada semua input

---

## G. Refleksi Praktikum

Jawab pertanyaan berikut:

1. Apa fungsi atribut `name` pada input form?
2. Apa perbedaan method GET dan POST?
3. Mengapa validasi form penting?

---

## H. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `daftar.html`.
2. Screenshot tampilan halaman daftar ketika diakses di web browser.
3. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan menambahkan **CSS** pada website.