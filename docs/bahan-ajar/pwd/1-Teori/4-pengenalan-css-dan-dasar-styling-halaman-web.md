---
title: "4. Pengenalan CSS dan Dasar Styling Halaman Web"
---

# Pengenalan CSS dan Dasar Styling Halaman Web

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan konsep dasar CSS dalam pengembangan web.
2. Mengidentifikasi cara penerapan CSS pada HTML.
3. Menggunakan selector CSS untuk menargetkan elemen HTML.
4. Menerapkan styling dasar seperti warna, font, dan teks.
5. Memahami konsep box model dalam CSS.

---

## 1. Pendahuluan

Pada pertemuan sebelumnya, mahasiswa telah mempelajari bagaimana membuat struktur halaman web menggunakan HTML serta bagaimana mengumpulkan data pengguna melalui form.

Namun, HTML hanya berfungsi untuk menyusun struktur konten. Tanpa adanya pengaturan tampilan, halaman web akan terlihat sederhana dan kurang menarik.

Untuk mengatasi hal tersebut, digunakan CSS (Cascading Style Sheets), yaitu bahasa yang digunakan untuk mengatur tampilan dan desain halaman web.

![Ilustrasi CSS](https://miro.medium.com/1*KRq7jQOUdQsHNsZa72XcDw.jpeg "Ilustrasi CSS")

---

## 2. Konsep Dasar CSS

CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan elemen HTML.

Dengan CSS, kita dapat:

* Mengatur warna teks dan background
* Mengatur jenis dan ukuran font
* Mengatur jarak antar elemen
* Membuat layout halaman

---

### 2.1 Hubungan HTML dan CSS

HTML → Struktur konten
CSS → Tampilan visual

Keduanya bekerja bersama untuk menghasilkan halaman web yang baik.

---

## 3. Cara Menambahkan CSS ke HTML

Terdapat tiga cara utama untuk menerapkan CSS.

---

### 3.1 Inline CSS

CSS ditulis langsung pada elemen HTML.

Contoh:

```html
<p style="color: red;">Teks berwarna merah</p>
```

Kelebihan:

* Mudah digunakan

Kekurangan:

* Tidak efisien
* Sulit dikelola

---

### 3.2 Internal CSS

CSS ditulis di dalam tag `<style>` pada bagian `<head>`.

Contoh:

```html
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
```

---

### 3.3 External CSS (Direkomendasikan)

CSS ditulis pada file terpisah.

Contoh:

```html
<link rel="stylesheet" href="assets/css/style.css">
```

Isi file `style.css`:

```css
p {
    color: green;
}
```

Kelebihan:

* Lebih rapi
* Mudah dikelola
* Digunakan ulang pada banyak halaman

---

## 4. Sintaks Dasar CSS

Struktur dasar CSS:

```css
selector {
    property: value;
}
```

Contoh:

```css
h1 {
    color: blue;
}
```

Penjelasan:

* `h1` → selector
* `color` → property
* `blue` → value

---

## 5. Selector CSS

Selector digunakan untuk memilih elemen HTML yang akan diberi style.

---

### 5.1 Selector Tag

```css
p {
    color: black;
}
```

---

### 5.2 Selector Class

```css
.judul {
    color: red;
}
```

Digunakan dengan:

```html
<h1 class="judul">Judul</h1>
```

---

### 5.3 Selector ID

```css
#header {
    background-color: gray;
}
```

Digunakan dengan:

```html
<div id="header"></div>
```

---

### 5.4 Perbedaan Class dan ID

| Class                       | ID                 |
| --------------------------- | ------------------ |
| Bisa digunakan berkali-kali | Hanya satu elemen  |
| Ditulis dengan `.`          | Ditulis dengan `#` |

---

## 6. Styling Dasar

---

### 6.1 Warna

```css
p {
    color: red;
}
```

Jenis warna:

* Nama warna: red, blue
* HEX: #ff0000
* RGB: rgb(255,0,0)

---

### 6.2 Background

```css
body {
    background-color: lightgray;
}
```

---

### 6.3 Font

```css
p {
    font-family: Arial;
    font-size: 16px;
}
```

---

### 6.4 Text Alignment

```css
h1 {
    text-align: center;
}
```

---

## 7. Box Model

Box model adalah konsep penting dalam CSS yang menjelaskan bagaimana elemen ditampilkan.

---

### 7.1 Komponen Box Model

Elemen HTML dianggap sebagai sebuah kotak dengan beberapa elemen:

1. Content → Isi konten, bisa berupa teks, gambar, atau elemen lainnya.
2. Padding → Jarak dalam (dari border ke konten)
3. Border → Garis pembatas (terletak di antara padding dan margin).
4. Margin → Jarak luar sampai ke elemen lain.

![Ilustrasi Konsep Box Model](https://user-images.githubusercontent.com/2182637/46847224-f8a23e80-ce2e-11e8-80d6-0ca62a1871a7.png "Ilustrasi Konsep Box Model")

---

### 7.2 Contoh

```css
div {
    margin: 50px 30px;
    padding: 50px 20px;
    border: 5px solid black;
}
```

Kode di atas akan menampilkan elemen div dengan:
- margin atas dan bawah 50px
- margin kiri dan kanan 20px
- padding atas dan bawah 50px
- padding kiri dan kanan 20px
- border setebal 5px berwarna hitam solid

![Contoh Box Model](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/18sfy7anxl7uj5soub2i.png "Contoh Box Model")

Cara penulissan lain menggunakan selector yang lebih spesifik:

```css
div {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 30px;
    margin-right: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    border: 5px solid black;
}
```

---

## 8. Best Practice CSS

1. Gunakan external CSS
2. Gunakan nama class yang jelas
3. Hindari inline CSS
4. Gunakan indentasi yang rapi
5. Pisahkan struktur (HTML) dan tampilan (CSS)

---

## 9. Kesalahan Umum

- Salah penulisan selector
- Tidak menghubungkan file CSS
- Penggunaan ID berulang
- Tidak memahami box model
- Inline CSS berlebihan

---

## Rangkuman

Pada pertemuan ini telah dipelajari:

1. Konsep dasar CSS
2. Cara menghubungkan CSS ke HTML
3. Sintaks dasar CSS
4. Selector CSS
5. Styling dasar (warna, font, background)
6. Konsep box model

CSS merupakan komponen penting dalam pengembangan web karena menentukan tampilan dan pengalaman pengguna.

---

## Referensi

* Duckett, J. (2011). *HTML and CSS: Design and Build Websites*.
* [Mozilla Developer Network (MDN) Web Docs. CSS Guide.](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [W3Schools. CSS Tutorial.](https://www.w3schools.com/css/)