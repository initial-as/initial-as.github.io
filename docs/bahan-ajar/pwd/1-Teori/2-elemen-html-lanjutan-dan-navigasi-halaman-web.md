---
title: "2. Elemen HTML Lanjutan dan Navigasi Halaman Web"
---

# Elemen HTML Lanjutan dan Navigasi Halaman Web

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan fungsi elemen HTML lanjutan dalam membangun halaman web.
2. Menggunakan elemen daftar (list) untuk menyajikan informasi secara terstruktur.
3. Mengimplementasikan hyperlink untuk navigasi antar halaman web.
4. Menampilkan gambar pada halaman web menggunakan elemen HTML yang sesuai.
5. Menyusun navigasi sederhana pada website multi-halaman.

---

## 1. Pendahuluan

Pada pertemuan sebelumnya mahasiswa telah mempelajari konsep dasar HTML serta struktur dokumen HTML5. Struktur tersebut menjadi fondasi dalam membangun halaman web.

Namun, sebuah website tidak hanya terdiri dari teks sederhana. Dalam praktiknya, halaman web memerlukan berbagai elemen tambahan seperti daftar informasi, tautan antar halaman, gambar, serta navigasi yang memungkinkan pengguna berpindah dari satu halaman ke halaman lainnya.

Elemen-elemen tersebut merupakan bagian penting dalam pengembangan website karena berperan dalam meningkatkan keterbacaan informasi serta kemudahan navigasi bagi pengguna.

Pada pertemuan ini akan dibahas beberapa elemen HTML lanjutan yang sering digunakan dalam pengembangan website, yaitu list (daftar), hyperlink, dan gambar.

---

## 2. Elemen Daftar (List)

Daftar atau list merupakan elemen HTML yang digunakan untuk menampilkan informasi dalam bentuk poin-poin yang terstruktur. Penggunaan list sangat membantu dalam menyajikan informasi secara sistematis dan mudah dipahami.

HTML menyediakan tiga jenis list utama.

---

### 2.1 Ordered List

Ordered list adalah daftar yang memiliki urutan tertentu dan biasanya ditandai dengan angka.

Contoh:

```html
<ol>
    <li>Analisis kebutuhan sistem</li>
    <li>Perancangan sistem</li>
    <li>Implementasi program</li>
    <li>Pengujian sistem</li>
</ol>
```

Hasil yang ditampilkan pada browser:

1. Analisis kebutuhan sistem
2. Perancangan sistem
3. Implementasi program
4. Pengujian sistem

Ordered list cocok digunakan untuk langkah-langkah prosedural atau tahapan proses.

---

### 2.2 Unordered List

Unordered list adalah daftar yang tidak memiliki urutan tertentu dan biasanya ditandai dengan simbol bullet.

Contoh:

```html
<ul>
    <li>Pengembangan Website</li>
    <li>Pengembangan Aplikasi Mobile</li>
    <li>Konsultasi Teknologi</li>
</ul>
```

Hasil tampilan:

• Pengembangan Website
• Pengembangan Aplikasi Mobile
• Konsultasi Teknologi

Jenis list ini umumnya digunakan untuk menampilkan daftar layanan atau fitur.

---

### 2.3 Description List

Description list digunakan untuk menampilkan daftar istilah beserta penjelasannya.

Contoh:

```html
<dl>
    <dt>HTML</dt>
    <dd>Bahasa markup untuk membuat struktur halaman web.</dd>

    <dt>CSS</dt>
    <dd>Bahasa untuk mengatur tampilan halaman web.</dd>
</dl>
```

Elemen yang digunakan:

* `<dl>` → Description list
* `<dt>` → Description term
* `<dd>` → Description detail

---

## 3. Hyperlink (Tautan)

Hyperlink merupakan elemen HTML yang memungkinkan pengguna berpindah dari satu halaman ke halaman lain.

Hyperlink dibuat menggunakan elemen `<a>` (anchor).

---

### 3.1 Struktur Dasar Hyperlink

Contoh:

```html
<a href="https://www.google.com">Kunjungi Google</a>
```

Penjelasan:

* `<a>` adalah elemen anchor
* `href` adalah atribut yang menentukan alamat tujuan

---

### 3.2 Hyperlink ke Halaman Internal

Hyperlink juga dapat digunakan untuk menghubungkan halaman dalam satu website.

Contoh:

```html
<a href="profil.html">Halaman Profil</a>
```

Jika pengguna mengklik link tersebut, browser akan membuka halaman `profil.html`.

---

### 3.3 Hyperlink Membuka Tab Baru

Untuk membuka link di tab baru, gunakan atribut `target`.

Contoh:

```html
<a href="https://www.example.com" target="_blank">
Kunjungi Website
</a>
```

Nilai `_blank` berarti membuka halaman pada tab baru.

---

## 4. Menampilkan Gambar pada Halaman Web

Gambar merupakan elemen penting dalam desain web karena dapat memperjelas informasi serta meningkatkan daya tarik visual halaman.

Dalam HTML, gambar ditampilkan menggunakan elemen `<img>`.

---

### 4.1 Struktur Dasar Elemen Gambar

Contoh:

```html
<img src="gambar.jpg" alt="Gambar Ilustrasi">
```

Penjelasan atribut:

* `src` → sumber file gambar
* `alt` → teks alternatif jika gambar tidak dapat ditampilkan

---

### 4.2 Mengatur Ukuran Gambar

Ukuran gambar dapat diatur menggunakan atribut `width` dan `height`.

Contoh:

```html
<img src="logo.png" alt="Logo Perusahaan" width="200">
```

Namun dalam praktik modern, pengaturan ukuran biasanya dilakukan menggunakan CSS.

---

### 4.3 Praktik Pengelolaan Gambar

Untuk menjaga kerapian proyek, gambar sebaiknya disimpan dalam folder khusus.

Contoh struktur proyek:

```
project-web/
│
├── index.html
├── profil.html
│
└── assets/
    ├── images/
    ├── css/
    └── js/
```

---

## 5. Konsep Navigasi Website

Navigasi adalah sistem yang memungkinkan pengguna berpindah dari satu halaman ke halaman lainnya.

Navigasi yang baik akan meningkatkan pengalaman pengguna (user experience).

---

### 5.1 Navigasi Sederhana

Navigasi biasanya ditempatkan di bagian atas halaman.

Contoh:

```html
<nav>
    <a href="index.html">Beranda</a> |
    <a href="profil.html">Profil</a> |
    <a href="layanan.html">Layanan</a> |
    <a href="kontak.html">Kontak</a>
</nav>
```

Elemen `<nav>` digunakan untuk menandai bagian navigasi dalam halaman web.

---

### 5.2 Prinsip Navigasi yang Baik

Navigasi website harus memenuhi beberapa prinsip berikut:

1. Konsisten di setiap halaman
2. Mudah dipahami pengguna
3. Tidak terlalu banyak menu
4. Terletak pada posisi yang mudah terlihat

Navigasi yang baik merupakan bagian penting dari desain antarmuka pengguna.

---

## 6. Contoh Implementasi Halaman Web Sederhana

Berikut contoh kode HTML yang menggabungkan beberapa elemen yang telah dipelajari.

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Company Profile</title>
</head>
<body>

<h1>PT Teknologi Masa Depan</h1>

<nav>
    <a href="index.html">Beranda</a> |
    <a href="profil.html">Profil</a>
</nav>

<hr>

<h2>Layanan Kami</h2>

<ul>
    <li>Pengembangan Website</li>
    <li>Pengembangan Aplikasi Mobile</li>
    <li>Konsultasi IT</li>
</ul>

<h2>Logo Perusahaan</h2>

<img src="logo.png" alt="Logo Perusahaan" width="200">

</body>
</html>
```

Contoh ini menunjukkan bagaimana elemen HTML dapat digunakan secara terintegrasi dalam satu halaman web.

---

## Rangkuman

Pada pertemuan ini telah dipelajari beberapa elemen HTML lanjutan yang penting dalam pengembangan web, yaitu:

1. Elemen daftar (ordered list, unordered list, description list)
2. Hyperlink untuk navigasi antar halaman
3. Elemen gambar dalam HTML
4. Konsep navigasi website
5. Struktur proyek untuk pengelolaan file web

Pemahaman terhadap elemen-elemen ini sangat penting karena akan digunakan dalam hampir seluruh pengembangan website.

---

## Referensi

* Duckett, J. (2011). *HTML and CSS: Design and Build Websites*.
* [Mozilla Developer Network (MDN) Web Docs. HTML Guide.](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [W3Schools. HTML Tutorial.](https://www.w3schools.com/html/)
