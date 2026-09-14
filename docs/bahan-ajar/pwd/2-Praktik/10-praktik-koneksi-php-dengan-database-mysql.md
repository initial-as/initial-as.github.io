---
title: "10. Praktik Koneksi PHP dengan Database MySQL"
---

# Praktik Koneksi PHP dengan Database MySQL

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Membuat database dan tabel menggunakan phpMyAdmin.
2. Menghubungkan PHP dengan database MySQL.
3. Menyimpan data form ke database.
4. Menjalankan query SQL menggunakan PHP.
5. Mengintegrasikan database ke dalam proyek website semester.

---

## B. Deskripsi Proyek Semester

Mahasiswa mengembangkan:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 10**, proyek dikembangkan dengan menambahkan:

* Database MySQL
* Koneksi PHP ke database
* Penyimpanan data pendaftaran ke database
* Integrasi form HTML + PHP + MySQL

Output tahap ini adalah **website yang dapat menyimpan data pengguna secara permanen ke database**.

---

## C. Persiapan Alat dan Software

Mahasiswa wajib menyiapkan:

1. XAMPP / Laragon
2. Apache dan MySQL aktif
3. phpMyAdmin
4. Visual Studio Code
5. Browser
6. Proyek dari **Praktikum Tahap 9**
    Pastikan struktur proyek:

    ```text
    htdocs/
    │
    └── web-company-profile/
        │
        ├── index.html
        ├── profil.php
        ├── daftar.php
        ├── proses.php
        ├── koneksi.php
        │
        └── assets/
            ├── css/
            ├── js/
            └── images/
    ```

---

## D. Langkah-Langkah Praktikum

---

### LANGKAH 1 – Menjalankan Apache dan MySQL

1. Buka XAMPP/Laragon
2. Jalankan:

   * Apache
   * MySQL

---

### LANGKAH 2 – Membuka phpMyAdmin

Buka browser:

```text
http://localhost/phpmyadmin
```

---

### LANGKAH 3 – Membuat Database

Klik:

```text
New
```

Buat database:

```text
db_pendaftaran
```

Klik:

```text
Create
```

---

### LANGKAH 4 – Membuat Tabel

Pilih database:

```text
db_pendaftaran
```

Buat tabel:

```text
pendaftaran
```

Jumlah field:

```text
4
```

---

### LANGKAH 5 – Menambahkan Struktur Field

Isi tabel berikut:

| Field   | Type    | Length | Extra          |
| ------- | ------- | ------ | -------------- |
| id      | INT     | 11     | AUTO_INCREMENT |
| nama    | VARCHAR | 100    | -              |
| email   | VARCHAR | 100    | -              |
| program | VARCHAR | 50     | -              |

Atur:

* `id` sebagai PRIMARY KEY

---

### LANGKAH 6 – Membuat File Koneksi

Buat file:

```text
koneksi.php
```

Isi:

```php
<?php

$koneksi = mysqli_connect(
    "localhost",
    "root",
    "",
    "db_pendaftaran"
);

if(!$koneksi) {

    die("Koneksi gagal");

}

?>
```

---

### LANGKAH 7 – Membuat Form Pendaftaran

Buka `daftar.php`.

Isi:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Pendaftaran</title>
</head>

<body>

<h2>Form Pendaftaran</h2>

<form action="proses.php" method="POST">

    <label>Nama:</label><br>
    <input type="text" name="nama"><br><br>

    <label>Email:</label><br>
    <input type="email" name="email"><br><br>

    <label>Program:</label><br>

    <select name="program">

        <option>Web Development</option>
        <option>UI/UX Design</option>

    </select>

    <br><br>

    <button type="submit">
        Daftar
    </button>

</form>

</body>
</html>
```

---

### LANGKAH 8 – Menghubungkan PHP dengan Database

Buka `proses.php`.

Tambahkan:

```php
<?php

include "koneksi.php";

?>
```

---

### LANGKAH 9 – Mengambil Data Form

Tambahkan:

```php
<?php

$nama = $_POST['nama'];
$email = $_POST['email'];
$program = $_POST['program'];

?>
```

---

### LANGKAH 10 – Menyimpan Data ke Database

Tambahkan query:

```php
<?php

$query = "INSERT INTO pendaftaran
(nama, email, program)

VALUES
('$nama', '$email', '$program')";

mysqli_query($koneksi, $query);

?>
```

---

### LANGKAH 11 – Menampilkan Pesan Berhasil

Tambahkan:

```php
<?php

echo "Data berhasil disimpan";

?>
```

---

### LANGKAH 12 – Contoh Kode Lengkap proses.php

```php
<?php

include "koneksi.php";

$nama = $_POST['nama'];
$email = $_POST['email'];
$program = $_POST['program'];

$query = "INSERT INTO pendaftaran
(nama, email, program)

VALUES
('$nama', '$email', '$program')";

mysqli_query($koneksi, $query);

echo "Data berhasil disimpan";

?>
```

---

### LANGKAH 13 – Pengujian Program

Lakukan pengujian:

| Skenario       | Hasil                 |
| -------------- | --------------------- |
| MySQL aktif    | Koneksi berhasil      |
| Form diisi     | Data tersimpan        |
| Submit form    | Muncul pesan berhasil |
| Cek phpMyAdmin | Data muncul           |

---

## E. Verifikasi Database

Buka:

```text
phpMyAdmin
```

Pilih:

```text
db_pendaftaran
```

Klik tabel:

```text
pendaftaran
```

Pilih:

```text
Browse
```

Pastikan data tersimpan.

---

## F. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

- Database berhasil dibuat
- Tabel sesuai struktur
- PHP berhasil terkoneksi
- Data berhasil tersimpan
- Query SQL berjalan normal

---

## G. Tugas

Tambahkan salah satu fitur berikut:

---

1. Validasi Input Kosong

    ```php
    <?php

    if($nama == "") {

        echo "Nama wajib diisi";

    }

    ?>
    ```


2. Menampilkan Data yang Baru Disimpan

    ```php
    <?php

    echo "Halo, " . $nama;

    ?>
    ```

---

3. Menambahkan Field Nomor HP

    Tambahkan field:

    * no_hp

    Pada:

    * form
    * database
    * query SQL

---

## H. Refleksi Praktikum

Jawab pertanyaan berikut:

1. Apa fungsi database dalam website?
2. Mengapa PHP perlu koneksi ke MySQL?
3. Apa fungsi query INSERT?
4. Mengapa primary key penting?

---

## I. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `koneksi.php`, `daftar.php`, dan `proses.php` yang telah dibuat.
2. Screenshot:
   * Database phpMyAdmin
   * Struktur tabel
   * Data tersimpan
   * Form pendaftaran
3. Penjelasan mengenai praktikum yang telah dikerjakan.
4. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs


