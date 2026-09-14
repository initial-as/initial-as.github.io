---
title: "6. Responsive Web Design dan Media Query"
---

# Responsive Web Design dan Media Query

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan konsep Responsive Web Design (RWD).
2. Memahami pentingnya desain responsif dalam pengembangan web modern.
3. Menggunakan media query untuk menyesuaikan tampilan pada berbagai perangkat.
4. Menerapkan prinsip mobile-first design.
5. Mendesain halaman web yang adaptif terhadap ukuran layar.

---

## 1. Pendahuluan

Pada pertemuan sebelumnya, mahasiswa telah mempelajari bagaimana membuat layout menggunakan Flexbox. Layout tersebut sudah cukup baik untuk tampilan desktop.

Namun, saat ini pengguna mengakses website melalui berbagai perangkat seperti:

* Smartphone
* Tablet
* Laptop
* Desktop

Jika website tidak menyesuaikan tampilan terhadap ukuran layar, maka:

* Teks sulit dibaca
* Navigasi tidak nyaman
* Pengalaman pengguna menjadi buruk

Oleh karena itu, diperlukan pendekatan **Responsive Web Design (RWD)**.

---

## 2. Konsep Responsive Web Design (RWD)

Responsive Web Design adalah teknik desain web yang membuat tampilan website dapat menyesuaikan diri dengan berbagai ukuran layar.

---

### 2.1 Tujuan RWD

1. Meningkatkan pengalaman pengguna (UX)
2. Membuat website fleksibel di berbagai perangkat
3. Mengurangi kebutuhan membuat versi website terpisah

---

### 2.2 Karakteristik Website Responsif

* Layout fleksibel
* Gambar menyesuaikan ukuran layar
* Teks tetap terbaca
* Navigasi mudah digunakan

---

## 3. Viewport

Viewport adalah area tampilan halaman web pada perangkat pengguna.

Untuk mengaktifkan tampilan responsif, gunakan meta tag berikut:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Tanpa meta tag ini, tampilan website di perangkat mobile tidak akan optimal.

---

## 4. Media Query

Media query adalah fitur CSS yang digunakan untuk menerapkan style berdasarkan kondisi tertentu, seperti ukuran layar.

---

### 4.1 Sintaks Dasar

```css
@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}
```

Artinya:

* Style akan diterapkan jika lebar layar ≤ 768px

---

### 4.2 Breakpoint Umum

| Perangkat | Ukuran  |
| --------- | ------- |
| Mobile    | ≤ 576px |
| Tablet    | ≤ 768px |
| Laptop    | ≤ 992px |
| Desktop   | > 992px |

---

## 5. Mobile-First Design

Mobile-first adalah pendekatan desain yang dimulai dari layar kecil (mobile), kemudian dikembangkan ke layar yang lebih besar.

---

### 5.1 Contoh Mobile-First

```css
/* Default (mobile) */
.container {
    flex-direction: column;
}

/* Tablet ke atas */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}
```

---

### 5.2 Keuntungan Mobile-First

* Lebih ringan
* Lebih fokus pada konten utama
* Lebih mudah dikembangkan

---

## 6. Layout Responsif dengan Flexbox

Flexbox sangat cocok digunakan untuk desain responsif.

---

### 6.1 Contoh Layout Responsif

```css
.container {
    display: flex;
    flex-wrap: wrap;
}

.box {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .box {
        width: 50%;
    }
}

/* Desktop */
@media (min-width: 992px) {
    .box {
        width: 30%;
    }
}
```

---

## 7. Gambar Responsif

Gunakan CSS agar gambar menyesuaikan ukuran layar.

```css
img {
    max-width: 100%;
    height: auto;
}
```

---

## 8. Navigasi Responsif

Navigasi pada mobile biasanya diubah menjadi:

* Menu vertikal
* Hamburger menu (opsional untuk tingkat lanjut)

Contoh sederhana:

```css
nav {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    nav {
        flex-direction: row;
    }
}
```

---

## 9. Best Practice Responsive Design

1. Gunakan mobile-first approach
2. Gunakan media query secara efisien
3. Gunakan unit fleksibel (% atau rem)
4. Hindari ukuran tetap (fixed width)
5. Uji di berbagai ukuran layar

---

## 10. Kesalahan Umum

- Tidak menggunakan meta viewport
- Layout tidak fleksibel
- Penggunaan pixel berlebihan
- Media query tidak konsisten
- Tidak melakukan pengujian

---

## Rangkuman

Pada pertemuan ini telah dipelajari:

1. Konsep Responsive Web Design
2. Pentingnya desain responsif
3. Penggunaan media query
4. Mobile-first design
5. Layout responsif dengan Flexbox
6. Pengaturan gambar dan navigasi responsif

Responsive design merupakan keterampilan penting dalam pengembangan web modern karena mayoritas pengguna mengakses web melalui perangkat mobile.

---

## Referensi

* Duckett, J. (2011). *HTML and CSS: Design and Build Websites*.
* [Mozilla Developer Network (MDN) Web Docs. CSS Guide.](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [W3Schools. CSS Tutorial.](https://www.w3schools.com/css/)
