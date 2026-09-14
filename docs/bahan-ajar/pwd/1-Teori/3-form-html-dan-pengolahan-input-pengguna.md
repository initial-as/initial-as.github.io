---
title: "3. Form HTML dan Pengolahan Input Pengguna"
---

# Form HTML dan Pengolahan Input Pengguna

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan konsep form dalam pengembangan web.
2. Mengidentifikasi berbagai elemen input pada HTML.
3. Menggunakan elemen form untuk mengumpulkan data pengguna.
4. Menerapkan validasi dasar menggunakan fitur HTML5.
5. Mendesain form sederhana yang terstruktur dan mudah digunakan.

---

## 1. Pendahuluan

Dalam pengembangan website modern, interaksi antara pengguna dan sistem merupakan hal yang sangat penting. Salah satu mekanisme utama untuk memungkinkan interaksi tersebut adalah melalui **form (formulir)**.

Form digunakan untuk:

* Mengumpulkan data dari pengguna
* Mengirim data ke server
* Mendukung berbagai proses seperti pendaftaran, login, pencarian, dan input data lainnya

Pada pertemuan ini, mahasiswa akan mempelajari konsep form dalam HTML serta berbagai elemen yang digunakan untuk menangani input pengguna.

---

## 2. Konsep Dasar Form HTML

Form dalam HTML direpresentasikan menggunakan elemen `<form>`.

---

### 2.1 Struktur Dasar Form

```html
<form action="proses.php" method="POST">
    <!-- Elemen input -->
</form>
```

Penjelasan:

* `action` → menentukan tujuan pengiriman data
* `method` → metode pengiriman data (GET atau POST)

---

### 2.2 Metode Pengiriman Data

#### a. GET

* Data dikirim melalui URL
* Data terlihat di address bar
* Cocok untuk pencarian

Contoh:

```
example.com?nama=andi
```

---

#### b. POST

* Data dikirim melalui body HTTP
* Tidak terlihat di URL
* Lebih aman untuk data sensitif

---

## 3. Elemen Input pada Form

HTML menyediakan berbagai jenis input untuk mengakomodasi kebutuhan pengguna.

---

### 3.1 Input Teks

```html
<input type="text" name="nama">
```

Digunakan untuk input teks pendek.

---

### 3.2 Input Email

```html
<input type="email" name="email">
```

Memiliki validasi otomatis format email.

---

### 3.3 Input Password

```html
<input type="password" name="password">
```

Menyembunyikan karakter yang diketik.

---

### 3.4 Input Number

```html
<input type="number" name="umur">
```

Hanya menerima angka.

---

### 3.5 Radio Button

```html
<input type="radio" name="gender" value="L"> Laki-laki
<input type="radio" name="gender" value="P"> Perempuan
```

Memilih satu dari beberapa opsi.

---

### 3.6 Checkbox

```html
<input type="checkbox" name="hobi"> Membaca
```

Memilih lebih dari satu opsi.

---

### 3.7 Textarea

```html
<textarea name="alamat"></textarea>
```

Digunakan untuk input teks panjang.

---

### 3.8 Select (Dropdown)

```html
<select name="jurusan">
    <option value="TI">Teknologi Informasi</option>
    <option value="SI">Sistem Informasi</option>
</select>
```

---

### 3.9 Tombol Submit

```html
<button type="submit">Kirim</button>
```

Digunakan untuk mengirim data form.

---

## 4. Elemen Label

Label digunakan untuk memberikan keterangan pada input.

Contoh:

```html
<label>Nama:</label>
<input type="text" name="nama">
```

---

### 4.1 Label dengan Atribut for

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

Keuntungan:

* Meningkatkan aksesibilitas
* Memudahkan klik pada label

---

## 5. Validasi Form HTML5

HTML5 menyediakan validasi otomatis tanpa JavaScript.

---

### 5.1 Required

```html
<input type="text" name="nama" required>
```

Field wajib diisi.

---

### 5.2 Placeholder

```html
<input type="text" placeholder="Masukkan nama">
```

Memberikan petunjuk input.

---

### 5.3 Min dan Max

```html
<input type="number" min="1" max="100">
```

---

### 5.4 Pattern

```html
<input type="text" pattern="[A-Za-z]+">
```

Mengatur pola input.

---

## 6. Struktur Form yang Baik

Form yang baik harus:

1. Terstruktur dan rapi
2. Mudah dipahami pengguna
3. Memiliki label yang jelas
4. Menghindari input yang tidak perlu
5. Menggunakan validasi

---

## 7. Contoh Form Lengkap

```html
<form action="proses.php" method="POST">

    <label>Nama:</label><br>
    <input type="text" name="nama" required><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Password:</label><br>
    <input type="password" name="password"><br><br>

    <label>Jenis Kelamin:</label><br>
    <input type="radio" name="jk" value="L"> Laki-laki
    <input type="radio" name="jk" value="P"> Perempuan<br><br>

    <label>Hobi:</label><br>
    <input type="checkbox" name="hobi"> Membaca
    <input type="checkbox" name="hobi"> Olahraga<br><br>

    <label>Alamat:</label><br>
    <textarea name="alamat"></textarea><br><br>

    <button type="submit">Kirim</button>

</form>
```

---

## Rangkuman

Pada pertemuan ini telah dipelajari:

1. Konsep form dalam HTML
2. Struktur dasar elemen `<form>`
3. Berbagai jenis input
4. Penggunaan label
5. Validasi HTML5
6. Desain form yang baik

Form merupakan komponen penting dalam pengembangan web karena menjadi dasar interaksi antara pengguna dan sistem.

---

## Referensi

* Duckett, J. (2011). *HTML and CSS: Design and Build Websites*.
* [Mozilla Developer Network (MDN) Web Docs. HTML Guide.](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [W3Schools. HTML Tutorial.](https://www.w3schools.com/html/)
