---
title: "4. Praktik Pengenalan CSS dan Dasar Styling Halaman Web"
---

# Praktik Pengenalan CSS dan Dasar Styling Halaman Web

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Menghubungkan file CSS eksternal ke halaman HTML.
2. Menggunakan selector CSS (tag, class, id).
3. Menerapkan styling dasar (warna, font, background).
4. Mengatur jarak menggunakan margin dan padding.
5. Meningkatkan tampilan website agar lebih menarik dan rapi.

---

## B. Deskripsi Proyek Semester

Mahasiswa mengembangkan:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 4**, proyek dikembangkan dengan menambahkan:

* File CSS eksternal (`style.css`)
* Styling dasar pada semua halaman
* Tampilan navigasi yang lebih rapi
* Pengaturan layout sederhana menggunakan box model

Output tahap ini adalah **website dengan tampilan visual yang lebih menarik dan terstruktur**.

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

3. Proyek dari **Praktikum Tahap 3**

    Struktur proyek sebelumnya:

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

## D. Langkah-Langkah Praktikum

---

### LANGKAH 1 – Membuat File CSS

Masuk ke folder:

```
assets/css/
```

Buat file baru:

```
style.css
```

---

### LANGKAH 2 – Menghubungkan CSS ke HTML

Tambahkan kode berikut pada bagian `<head>` di semua file HTML:

```html
<link rel="stylesheet" href="assets/css/style.css">
```

⚠️ Pastikan path sesuai dengan struktur folder.

---

### LANGKAH 3 – Styling Dasar Halaman

Buka file `style.css`, lalu tambahkan:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}
```

---

### LANGKAH 4 – Styling Judul dan Paragraf

Tambahkan:

```css
h1 {
    color: #333;
    text-align: center;
}

p {
    color: #555;
    line-height: 1.6;
}
```

---

### LANGKAH 5 – Styling Navigasi

Tambahkan:

```css
nav {
    background-color: #333;
    padding: 10px;
    text-align: center;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}

nav a:hover {
    text-decoration: underline;
}
```

---

### LANGKAH 6 – Menggunakan Class CSS

Tambahkan class pada HTML, misalnya di `index.html`:

```html
<h1 class="judul-utama">PT Maju Jaya Teknologi</h1>
```

Tambahkan di CSS:

```css
.judul-utama {
    color: darkblue;
}
```

---

### LANGKAH 7 – Menggunakan ID CSS

Tambahkan pada HTML:

```html
<div id="konten">
    <p>Ini adalah isi konten utama.</p>
</div>
```

Tambahkan pada CSS:

```css
#konten {
    padding: 20px;
}
```

---

### LANGKAH 8 – Mengatur Box Model

Tambahkan:

```css
div {
    margin: 10px;
    padding: 15px;
    border: 1px solid #ccc;
    background-color: white;
}
```

---

### LANGKAH 9 – Pengujian Tampilan

Lakukan pengecekan:

1. Buka semua halaman (`index.html`, `profil.html`, dll.)
2. Pastikan:

   * Warna berubah
   * Navigasi terlihat rapi
   * Jarak antar elemen lebih nyaman
   * Tampilan konsisten

---

## E. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

- Menggunakan CSS eksternal
- Selector digunakan dengan benar
- Tidak menggunakan inline CSS
- Kode rapi dan konsisten
- Semua halaman menggunakan style yang sama

---

## F. Tugas

Tambahkan:

1. Efek hover pada menu:

    ```css
    nav a:hover {
        color: yellow;
    }
    ```

2. Styling form:

    ```css
    input, textarea, select {
        width: 98%;
        padding: 8px;
        margin: 5px 0;
    }

    input[type="radio"],
    input[type="checkbox"] {
        width: auto;
    }
    ```

3. Tombol lebih menarik:

    ```css
    button {
        background-color: blue;
        color: white;
        padding: 10px;
        border: none;
    }
    ```

---

# G. Refleksi Praktikum

Jawab pertanyaan berikut:

1. Apa perbedaan CSS internal dan eksternal?
2. Apa fungsi selector dalam CSS?
3. Mengapa CSS penting dalam pengembangan web?

---

## H. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `style.css`.
2. Screenshot tampilan halaman daftar ketika diakses di web browser.
3. Penjelasan mengenai praktikum yang telah dikerjakan.
4. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan menggunakan layout modern berbasis flexbox.