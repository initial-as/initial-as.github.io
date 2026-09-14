---
title: "5. Praktik Layout Halaman Web dengan CSS"
---

# Praktik Layout Halaman Web dengan CSS

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Menggunakan Flexbox untuk mengatur layout halaman web.
2. Mengatur posisi elemen secara horizontal dan vertikal.
3. Membuat layout multi-kolom menggunakan CSS.
4. Mengatur alignment menggunakan `justify-content` dan `align-items`.
5. Meningkatkan struktur visual website menjadi lebih profesional.

---

## B. Deskripsi Proyek Semester

Mahasiswa mengembangkan:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 5**, proyek dikembangkan dengan menambahkan:

* Layout halaman berbasis Flexbox
* Tampilan multi-kolom pada halaman layanan
* Penataan ulang struktur konten
* Penyempurnaan tampilan website

Output tahap ini adalah **website dengan layout modern dan lebih profesional**.

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

3. Proyek dari **Praktikum Tahap 4**

    Struktur proyek:

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
        │   └── style.css
        └── js/
    ```

---

## D. Langkah-Langkah Praktikum

---

### LANGKAH 1 – Membuat Container Layout

Buka file `index.html`, lalu ubah struktur menjadi:

```html
<body>

<nav>
    <a href="index.html">Beranda</a>
    <a href="profil.html">Profil</a>
    <a href="layanan.html">Layanan</a>
    <a href="daftar.html">Daftar</a>
</nav>

<div class="container">
    <div class="box">Konten 1</div>
    <div class="box">Konten 2</div>
    <div class="box">Konten 3</div>
</div>

</body>
```

---

### LANGKAH 2 – Mengaktifkan Flexbox

Buka `style.css`, tambahkan:

```css
.container {
    display: flex;
}
```

---

### LANGKAH 3 – Mengatur Arah Layout

Tambahkan:

```css
.container {
    display: flex;
    flex-direction: row;
}
```

---

### LANGKAH 4 – Mengatur Jarak dan Alignment

Tambahkan:

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

### LANGKAH 5 – Styling Box

Tambahkan:

```css
.box {
    width: 30%;
    padding: 20px;
    background-color: #ddd;
    text-align: center;
    border-radius: 5px;
}
```

---

### LANGKAH 6 – Implementasi pada Halaman Layanan

Buka `layanan.html`, ubah bagian layanan menjadi:

```html
<h2>Layanan Kami</h2>

<div class="container">
    <div class="box">Website Development</div>
    <div class="box">Mobile App</div>
    <div class="box">IT Consulting</div>
</div>
```

---

### LANGKAH 7 – Menggunakan Flex Wrap

Tambahkan di CSS:

```css
.container {
    flex-wrap: wrap;
}
```

---

### LANGKAH 8 – Menambahkan Spasi Antar Elemen

Tambahkan:

```css
.box {
    margin: 10px;
}
```

---

### LANGKAH 9 – Pengujian Layout

Lakukan pengujian:

1. Buka semua halaman
2. Pastikan:

   * Elemen sejajar
   * Tidak saling bertumpuk
   * Layout terlihat rapi
   * Tampilan konsisten

---

## E. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

- Menggunakan Flexbox (`display: flex`)
- Layout rapi dan tidak bertumpuk
- Struktur HTML jelas
- CSS terorganisir
- Konsistensi antar halaman

---

## F. Tugas

Tambahkan:

1. Layout vertikal:

    ```css
    .container {
        flex-direction: column;
    }
    ```

2. Efek hover pada box:

    ```css
    .box:hover {
        background-color: #bbb;
    }
    ```

3. Tambahkan ikon atau gambar pada box

---

## G. Refleksi Praktikum

Jawab pertanyaan berikut:

1. Apa fungsi `display: flex`?
2. Apa perbedaan `justify-content` dan `align-items`?
3. Mengapa Flexbox lebih baik dibanding layout lama?

---

# K. Target Akhir Tahap 5

Setelah praktikum ini, mahasiswa memiliki:

- Layout website modern
- Tampilan multi-kolom
- Penguasaan dasar Flexbox
- Fondasi untuk responsive design

---

## H. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `style.css` yang telah diperbarui.
2. Screenshot tampilan halaman beranda/layanan ketika diakses di web browser.
3. Penjelasan mengenai praktikum yang telah dikerjakan.
4. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan menambahkan _responsive design_.