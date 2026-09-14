---
title: "5. Layout Halaman Web dengan CSS"
---

# Layout Halaman Web dengan CSS

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan konsep layout dalam desain web.
2. Menggunakan properti `display` untuk mengatur elemen HTML.
3. Menerapkan Flexbox untuk membuat layout modern.
4. Menggunakan properti `position` dalam CSS.
5. Mendesain tata letak halaman web secara sederhana dan terstruktur.

---

## 1. Pendahuluan

Pada pertemuan sebelumnya, mahasiswa telah mempelajari dasar-dasar CSS untuk mengatur tampilan halaman web, seperti warna, font, dan jarak antar elemen.

Namun, untuk membangun website yang profesional, tidak cukup hanya mengatur tampilan. Diperlukan kemampuan untuk mengatur **tata letak (layout)** elemen secara sistematis.

Layout menentukan bagaimana elemen:

* Disusun secara horizontal atau vertikal
* Disejajarkan (alignment)
* Mengisi ruang pada halaman

Pada pertemuan ini akan dibahas teknik layout modern menggunakan **Flexbox** serta pengaturan posisi elemen menggunakan CSS positioning.

---

## 2. Konsep Layout dalam Web

Layout adalah cara menyusun elemen-elemen HTML dalam suatu halaman agar terlihat terstruktur dan mudah dipahami.

Contoh layout umum:

* Header
* Navigation
* Content
* Sidebar
* Footer

---

## 3. Properti Display

Properti `display` menentukan bagaimana elemen ditampilkan.

---

### 3.1 Block

```css
div {
    display: block;
}
```

Ciri:

* Mengambil satu baris penuh

Contoh elemen block:

* `<div>`
* `<p>`
* `<h1>`

---

### 3.2 Inline

```css
span {
    display: inline;
}
```

Ciri:

* Tidak memulai baris baru
* Lebar mengikuti konten

---

### 3.3 Inline-block

```css
div {
    display: inline-block;
}
```

Ciri:

* Sejajar seperti inline
* Bisa diatur ukuran

---

### 3.4 None

```css
div {
    display: none;
}
```

Elemen tidak ditampilkan.

---

## 4. Pengenalan Flexbox

Flexbox (Flexible Box Layout) adalah teknik layout modern yang digunakan untuk menyusun elemen dalam satu dimensi (horizontal atau vertikal).

---

### 4.1 Konsep Dasar Flexbox

Flexbox terdiri dari:

* Container (induk)
* Item (anak)

---

### 4.2 Mengaktifkan Flexbox

```css
.container {
    display: flex;
}
```

---

### 4.3 Arah Flex (flex-direction)

```css
.container {
    flex-direction: row;
}
```

Pilihan:

* `row` → horizontal
* `column` → vertikal

---

### 4.4 Alignment Horizontal (justify-content)

```css
.container {
    justify-content: center;
}
```

Pilihan:

* flex-start
* center
* space-between
* space-around

---

### 4.5 Alignment Vertikal (align-items)

```css
.container {
    align-items: center;
}
```

---

### 4.6 Contoh Flexbox

```html
<div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
</div>
```

```css
.container {
    display: flex;
    justify-content: space-between;
}

.box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
}
```

---

## 5. CSS Positioning

CSS positioning digunakan untuk mengatur posisi elemen secara lebih spesifik.

---

### 5.1 Static (Default)

```css
div {
    position: static;
}
```

---

### 5.2 Relative

```css
div {
    position: relative;
    top: 10px;
}
```

Posisi relatif terhadap posisi awal.

---

### 5.3 Absolute

```css
div {
    position: absolute;
    top: 0;
    left: 0;
}
```

Posisi relatif terhadap parent yang memiliki posisi.

---

### 5.4 Fixed

```css
div {
    position: fixed;
    top: 0;
}
```

Tetap di posisi tertentu meskipun halaman di-scroll.

---

## 6. Kombinasi Layout Sederhana

Contoh layout sederhana:

```html
<header>Header</header>
<nav>Menu</nav>
<main>Konten</main>
<footer>Footer</footer>
```

Dengan CSS:

```css
header, nav, main, footer {
    padding: 20px;
    margin: 10px;
}
```

---

## 7. Best Practice Layout

1. Gunakan Flexbox untuk layout modern
2. Hindari penggunaan positioning berlebihan
3. Gunakan struktur HTML yang jelas
4. Gunakan class untuk styling layout
5. Uji tampilan di berbagai ukuran layar

---

## 8. Kesalahan Umum

- Tidak memahami perbedaan display
- Salah penggunaan Flexbox
- Overlapping karena positioning
- Layout tidak responsif
- Tidak menggunakan container

---

## Rangkuman

Pada pertemuan ini telah dipelajari:

1. Konsep layout dalam web
2. Properti `display`
3. Flexbox sebagai teknik layout modern
4. CSS positioning
5. Penyusunan layout sederhana

Kemampuan membuat layout merupakan keterampilan penting dalam pengembangan web modern.

---

## Referensi

* Duckett, J. (2011). *HTML and CSS: Design and Build Websites*.
* [Mozilla Developer Network (MDN) Web Docs. CSS Guide.](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [W3Schools. CSS Tutorial.](https://www.w3schools.com/css/)
