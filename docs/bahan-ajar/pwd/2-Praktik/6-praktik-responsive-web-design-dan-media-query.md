---
title: "6. Praktik Responsive Web Design dan Media Query"
---

# Praktik Responsive Web Design dan Media Query

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Menerapkan konsep Responsive Web Design (RWD).
2. Menggunakan media query untuk menyesuaikan tampilan website.
3. Mengimplementasikan pendekatan mobile-first.
4. Menyesuaikan layout Flexbox agar responsif.
5. Mengoptimalkan tampilan website pada berbagai ukuran layar.

---

## B. Deskripsi Proyek Semester

Mahasiswa mengembangkan:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 6**, proyek dikembangkan dengan menambahkan:

* Desain responsif berbasis media query
* Penyesuaian layout untuk mobile, tablet, dan desktop
* Perbaikan tampilan navigasi pada layar kecil
* Optimalisasi gambar dan elemen konten

Output tahap ini adalah **website yang dapat ditampilkan dengan baik di berbagai perangkat**.

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

3. Fitur Developer Tools (Inspect Element)

4. Proyek dari **Praktikum Tahap 5**

    Pastikan struktur proyek tetap:

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

### LANGKAH 1 – Menambahkan Meta Viewport

Buka semua file HTML, tambahkan pada `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

### LANGKAH 2 – Mengatur Layout Default (Mobile-First)

Buka `style.css`, ubah `.container` menjadi:

```css
.container {
    display: flex;
    flex-direction: column;
}
```

👉 Default ditujukan untuk tampilan mobile.

---

### LANGKAH 3 – Menambahkan Media Query untuk Tablet

Tambahkan:

```css
@media (min-width: 768px) {
    .container {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .box {
        width: 48%;
    }
}
```

---

### LANGKAH 4 – Menambahkan Media Query untuk Desktop

Tambahkan:

```css
@media (min-width: 992px) {
    .box {
        width: 30%;
    }
}
```

---

### LANGKAH 5 – Membuat Gambar Responsif

Tambahkan pada CSS:

```css
img {
    max-width: 100%;
    height: auto;
}
```

---

### LANGKAH 6 – Mengatur Navigasi Responsif

Tambahkan:

```css
nav {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    nav {
        flex-direction: row;
        justify-content: center;
    }
}
```

---

### LANGKAH 7 – Menyesuaikan Form Responsif

Tambahkan:

```css
input, textarea, select {
    width: 100%;
    box-sizing: border-box;
}
```

---

### LANGKAH 8 – Pengujian Responsive Design

Gunakan fitur Inspect pada browser:

1. Ubah ke mode mobile
2. Ubah ukuran layar (responsive mode)
3. Periksa:

   * Layout berubah sesuai ukuran
   * Tidak ada elemen terpotong
   * Navigasi tetap usable
   * Form tetap rapi

---

## E. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

- Menggunakan meta viewport
- Menggunakan minimal 2 media query
- Menggunakan pendekatan mobile-first
- Layout fleksibel (tidak fixed width)
- Gambar responsif
- Tampilan konsisten di semua halaman

---

## F. Tugas

Tambahkan:

1. Menu mobile sederhana:

    ```css
    nav a {
        display: block;
        padding: 10px;
    }
    ```

2. Efek hover responsif:

    ```css
    @media (min-width: 768px) {
        nav a:hover {
            background-color: #555;
        }
    }
    ```

3. Tambahkan breakpoint tambahan (576px)

---

## G. Refleksi Praktikum

Jawab pertanyaan berikut:

1. Apa fungsi media query dalam CSS?
2. Apa itu mobile-first design?
3. Mengapa responsive design penting dalam web modern?

---

## H. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `style.css` yang telah diperbarui.
2. Screenshot tampilan halaman web ketika diakses di web browser desktop/mobile.
3. Penjelasan mengenai praktikum yang telah dikerjakan.
4. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan menambahkan JavaScript.