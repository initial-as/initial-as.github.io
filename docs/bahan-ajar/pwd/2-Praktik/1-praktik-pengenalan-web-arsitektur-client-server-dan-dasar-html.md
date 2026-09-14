---
title: "1. Pengenalan Web, Arsitektur Client–Server, dan Dasar HTML"
---

# Pengenalan Web, Arsitektur Client–Server, dan Dasar HTML

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Membuat struktur folder proyek web yang rapi dan terorganisir.
2. Membuat file HTML dengan struktur HTML5 yang benar.
3. Mengimplementasikan elemen dasar HTML.
4. Menjalankan file HTML di browser.
5. Menyimpan dan mengelola file proyek secara sistematis.

---

## B. Deskripsi Proyek Semester

Mahasiswa akan membangun:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Tahap 1 berfokus pada:

* Setup proyek
* Struktur dasar halaman utama (Home)
* Penulisan HTML sesuai standar

---

## C. Persiapan Alat dan Software

Mahasiswa wajib menyiapkan:

1. Text Editor:

   * Visual Studio Code (direkomendasikan)
   * Notepad++
   * Sublime Text

2. Browser:

   * Google Chrome
   * Mozilla Firefox

3. Folder kerja di komputer masing-masing.

---

## D. Langkah-Langkah Praktikum

---

### LANGKAH 1 – Membuat Struktur Folder Proyek

1. Buat folder utama dengan nama:

```
web-company-profile
```

2. Di dalamnya, buat struktur berikut:

```
web-company-profile/
│
├── index.html
└── assets/
    ├── css/
    └── js/
```

⚠️ Catatan:

* Gunakan huruf kecil.
* Jangan gunakan spasi pada nama folder.
* Gunakan tanda hubung (-) jika perlu.

---

### LANGKAH 2 – Membuat File index.html

Buka text editor dan buat file baru:

```
index.html
```

Simpan di dalam folder `web-company-profile`.

---

### LANGKAH 3 – Menulis Struktur HTML5 Dasar

Ketik kode berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Company Profile - Beranda</title>
</head>
<body>

</body>
</html>
```

Penjelasan:

* `<!DOCTYPE html>` → Mendeklarasikan HTML5
* `lang="id"` → Bahasa Indonesia
* `meta charset` → Encoding UTF-8
* `meta viewport` → Responsive design

Simpan file.

---

### LANGKAH 4 – Menambahkan Konten Halaman Home

Tambahkan isi berikut di dalam `<body>`:

```html
<h1>PT Maju Jaya Teknologi</h1>

<hr>

<h2>Tentang Kami</h2>
<p>
PT Maju Jaya Teknologi adalah perusahaan yang bergerak di bidang
pengembangan perangkat lunak dan solusi digital.
</p>

<h2>Visi</h2>
<p>
Menjadi perusahaan teknologi terdepan dalam inovasi dan layanan digital.
</p>

<h2>Misi</h2>
<p>
Memberikan solusi teknologi yang efektif, efisien, dan berkualitas tinggi.
</p>
```

---

### LANGKAH 5 – Menjalankan File di Browser

1. Klik dua kali file `index.html`
2. Atau klik kanan → Open With → Browser
3. Pastikan halaman tampil dengan benar

---

### LANGKAH 6 – Validasi Struktur

Periksa:

- Semua tag ditutup dengan benar ✔
- Indentasi rapi ✔
- Tidak ada kesalahan penulisan tag ✔
- Struktur lengkap (DOCTYPE, html, head, body) ✔

---

## E. Standar Kode yang Wajib Dipenuhi

Mahasiswa WAJIB:

* Menggunakan huruf kecil pada tag
* Menggunakan indentasi konsisten (2 atau 4 spasi)
* Tidak menggunakan inline style (CSS)
* Tidak menghapus struktur dasar HTML5
* Menyimpan file dengan ekstensi `.html`

---

## F. Tugas

Tambahkan:

1. Paragraf tambahan tentang layanan perusahaan
2. Informasi alamat perusahaan
3. Gunakan elemen `<strong>` dan `<em>` secara tepat

Contoh:

```html
<p>
Kami menyediakan layanan <strong>pengembangan web</strong>,
<em>mobile application</em>, dan sistem informasi.
</p>
```

---

## G. Refleksi Praktikum

Jawablah pertanyaan berikut:

1. Apa fungsi `<!DOCTYPE html>`?
2. Apa perbedaan `<head>` dan `<body>`?
3. Mengapa struktur folder penting dalam pengembangan web?

---

## H. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `index.html`
2. Screenshot tampilan di web browser.
3. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan menambahkan **gambar dan link navigasi** pada website.