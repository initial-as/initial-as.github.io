---
title: "1. Pengenalan Web, Arsitektur Client–Server, dan Dasar HTML"
---

# Pengenalan Web, Arsitektur Client–Server, dan Dasar HTML

## Capaian Pembelajaran

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan sejarah dan perkembangan teknologi web secara runtut.
2. Mendeskripsikan arsitektur client–server dalam sistem berbasis web.
3. Menjelaskan mekanisme kerja HTTP (request–response).
4. Mengidentifikasi komponen utama website (frontend, backend, database).
5. Menyusun dokumen HTML dasar sesuai standar HTML5.

## 1. Pendahuluan

Perkembangan teknologi informasi telah mendorong transformasi besar dalam cara manusia mengakses dan menyebarkan informasi. Salah satu teknologi yang memiliki pengaruh signifikan adalah World Wide Web (WWW).

World Wide Web pertama kali dikembangkan oleh **Tim Berners-Lee** pada tahun 1989 di **CERN**. Tujuan awal pengembangannya adalah untuk mempermudah pertukaran dokumen antar peneliti melalui sistem berbasis hypertext.

Sejak saat itu, web mengalami evolusi yang sangat pesat dan menjadi fondasi utama berbagai sistem informasi modern.

---

## 2. Evolusi Perkembangan Web

### 2.1 Web 1.0 (Static Web)

Karakteristik:

* Halaman bersifat statis
* Konten tidak interaktif
* Tidak terdapat partisipasi pengguna

Web 1.0 umumnya digunakan sebagai media penyampaian informasi satu arah.

---

### 2.2 Web 2.0 (Interactive Web)

Karakteristik:

* Interaktif
* User-generated content
* Integrasi media sosial
* Komunikasi dua arah

Teknologi seperti JavaScript dan server-side scripting mendorong lahirnya Web 2.0.

---

### 2.3 Web 3.0 (Semantic & Intelligent Web)

Karakteristik:

* Data terstruktur
* Integrasi kecerdasan buatan
* Personalisasi konten
* Interoperabilitas sistem

Dalam mata kuliah ini, fokus pembelajaran berada pada fondasi Web 1.0 dan Web 2.0.

---

## 3. Konsep Dasar Website

Website adalah kumpulan halaman web yang saling terhubung dan dapat diakses melalui jaringan internet menggunakan perangkat lunak peramban (browser).

---

### 3.1 Komponen Utama Website

#### a. Frontend

Bagian yang berinteraksi langsung dengan pengguna.

Teknologi utama:

* HTML (struktur)
* CSS (tampilan)
* JavaScript (interaksi)

---

#### b. Backend

Bagian yang berjalan di sisi server dan bertugas memproses logika aplikasi.

Contoh bahasa pemrograman:

* PHP
* Python
* Node.js

---

#### c. Database

Sistem penyimpanan data terstruktur.

Contoh:

* MySQL
* PostgreSQL

---

## 4. Arsitektur Client–Server

Arsitektur client–server merupakan model komunikasi antara dua komponen utama dalam sistem jaringan.

### 4.1 Client

Client adalah perangkat pengguna yang mengirim permintaan (request) ke server melalui browser.

Contoh browser:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge

---

### 4.2 Server

Server adalah komputer atau sistem yang:

* Menyimpan file website
* Memproses permintaan pengguna
* Mengirim respons kembali ke client

---

### 4.3 Skema Komunikasi

User → Browser (Client) → Internet → Server → Internet → Browser → User

Model ini menjadi dasar seluruh sistem web modern.

---

## 5. Mekanisme Kerja HTTP

Web menggunakan protokol komunikasi bernama HTTP (HyperText Transfer Protocol).

### 5.1 Tahapan Proses

1. Pengguna mengetik URL pada browser.
2. Browser mengirim HTTP Request ke server.
3. Server menerima dan memproses permintaan.
4. Server mengirim HTTP Response.
5. Browser merender dan menampilkan halaman.

---

### 5.2 Metode HTTP Dasar

* GET → Mengambil data
* POST → Mengirim data

---

### 5.3 Status Code HTTP

* 200 OK → Permintaan berhasil
* 404 Not Found → Halaman tidak ditemukan
* 500 Internal Server Error → Kesalahan server
* 301 Redirect → Pengalihan halaman

Pemahaman status code penting dalam proses debugging. Kode status HTTP lainnya dapat dilihat di web [http.cat](https://http.cat/).

---

## 6. Pengenalan HTML

HTML (HyperText Markup Language) adalah bahasa markup yang digunakan untuk menyusun struktur halaman web.

HTML:

* Bukan bahasa pemrograman
* Tidak memiliki logika komputasi
* Berfungsi untuk menyusun struktur dokumen

---

## 7. Konsep Tag, Elemen, dan Atribut

### 7.1 Tag

Ditulis menggunakan tanda kurung siku:

```html
<p>
```

---

### 7.2 Elemen

Kombinasi tag pembuka, isi, dan tag penutup:

```html
<p>Contoh paragraf</p>
```

---

### 7.3 Atribut

Memberikan informasi tambahan pada elemen.

```html
<a href="https://example.com">Link</a>
```

---

## 8. Struktur Dasar Dokumen HTML5

Struktur standar dokumen HTML:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
</head>
<body>
    <h1>Selamat Datang</h1>
    <p>Ini adalah halaman pertama saya.</p>
</body>
</html>
```

---

### 8.1 Penjelasan Struktur

#### a. `<!DOCTYPE html>`

Menunjukkan bahwa dokumen menggunakan HTML5.

#### b. `<html>`

Elemen root dari seluruh dokumen.

#### c. `<head>`

Berisi metadata seperti judul, encoding, dan pengaturan tampilan.

#### d. `<meta charset="UTF-8">`

Mengatur standar encoding karakter.

#### e. `<meta name="viewport">`

Mendukung desain responsif.

#### f. `<title>`

Judul halaman pada tab browser.

#### g. `<body>`

Konten utama yang ditampilkan kepada pengguna.

---

## 9. Elemen Dasar HTML

### 9.1 Heading

```html
<h1>Judul</h1>
<h2>Subjudul</h2>
```

Digunakan untuk struktur hierarki informasi.

---

### 9.2 Paragraf

```html
<p>Isi paragraf.</p>
```

---

### 9.3 Horizontal Rule

```html
<hr>
```

---

## 9.4 Line Break

```html
<br>
```

---

### 9.5 Elemen Semantik Dasar

Lebih disarankan menggunakan:

```html
<strong>Teks penting</strong>
<em>Teks penekanan</em>
```

Karena memiliki makna semantik.

---

## 10. Struktur Folder Proyek

Untuk praktik profesional sejak awal, gunakan struktur berikut:

```
project-web/
│
├── index.html
└── assets/
    ├── css/
    └── js/
```

Struktur ini memudahkan pengembangan lanjutan.

---

## Rangkuman

Pada pertemuan ini telah dibahas:

1. Sejarah dan evolusi web
2. Konsep dasar website
3. Arsitektur client–server
4. Mekanisme HTTP
5. Pengenalan HTML
6. Struktur dokumen HTML5
7. Praktik penulisan kode yang baik

Materi ini menjadi fondasi untuk pertemuan selanjutnya yang akan membahas elemen HTML lanjutan dan navigasi antar halaman.

---

## Referensi

* Duckett, J. (2011). *HTML and CSS: Design and Build Websites*.
* [MDN Web Docs.](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [W3Schools HTML Tutorial.](https://www.w3schools.com/html/)
