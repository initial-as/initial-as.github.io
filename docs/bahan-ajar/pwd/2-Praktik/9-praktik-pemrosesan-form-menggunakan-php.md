---
title: "9. Praktik Pemrosesan Form Menggunakan PHP"
---

# Praktik Pemrosesan Form Menggunakan PHP

## A. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Menjalankan file PHP menggunakan web server lokal.
2. Menghubungkan form HTML dengan file PHP.
3. Mengambil data form menggunakan metode `POST`.
4. Menampilkan hasil input pengguna menggunakan PHP.
5. Mengintegrasikan PHP ke dalam proyek website semester.

---

## B. Deskripsi Proyek Semester

Mahasiswa mengembangkan:

> **Website Company Profile & Sistem Pendaftaran Online Sederhana**

Pada **Tahap 9**, proyek dikembangkan dengan menambahkan:

* Pemrosesan form menggunakan PHP
* Halaman hasil pendaftaran
* Pengiriman data form dari HTML ke PHP
* Tampilan data pengguna secara dinamis

Output tahap ini adalah **website yang sudah mampu memproses input pengguna menggunakan server-side programming**.

---

## C. Persiapan Alat dan Software

Mahasiswa wajib menyiapkan:

1. XAMPP / Laragon
2. Apache aktif
3. Text Editor
   * Visual Studio Code
   * Notepad++
4. Browser
   * Google Chrome
   * Mozilla Firefox
5. Proyek dari **Praktikum Tahap 8**

    Pastikan struktur proyek:

    ```text
    xampp
    │
    └──htdocs/
        │
        └── web-company-profile/
            │
            ├── index.html
            ├── profil.html
            ├── layanan.html
            ├── daftar.php
            ├── proses.php
            │
            └── assets/
                ├── css/
                ├── js/
                └── images/
    ```

---

## D. Langkah-Langkah Praktikum

---

### LANGKAH 1 – Menjalankan Apache

1. Buka XAMPP

2. Jalankan:

   * Apache

3. Buka browser:

    ```text
    http://localhost/
    ```

---

### LANGKAH 2 – Mengubah File Form Menjadi PHP

Ubah:

```text
daftar.html
```

menjadi:

```text
daftar.php
```

---

### LANGKAH 3 – Membuat Form Pendaftaran

Isi `daftar.php`:

```html
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
    </select><br><br>

    <button type="submit">
        Daftar
    </button>

</form>
```

---

### LANGKAH 4 – Membuat File Proses PHP

Buat file baru:

```text
proses.php
```

---

### LANGKAH 5 – Mengambil Data dari Form

Isi `proses.php`:

```php
<?php

$nama = $_POST['nama'];
$email = $_POST['email'];
$program = $_POST['program'];

?>
```

---

### LANGKAH 6 – Menampilkan Data Pengguna

Tambahkan:

```php
<?php

echo "<h2>Data Pendaftaran</h2>";

echo "Nama: " . $nama . "<br>";
echo "Email: " . $email . "<br>";
echo "Program: " . $program . "<br>";

?>
```

---

### LANGKAH 7 – Menambahkan Tampilan HTML

Gabungkan PHP dan HTML:

```php
<!DOCTYPE html>
<html>

<head>
    <title>Hasil Pendaftaran</title>
</head>

<body>

<?php

$nama = $_POST['nama'];
$email = $_POST['email'];
$program = $_POST['program'];

echo "<h2>Data Pendaftaran</h2>";

echo "Nama: " . $nama . "<br>";
echo "Email: " . $email . "<br>";
echo "Program: " . $program . "<br>";

?>

</body>
</html>
```

---

### LANGKAH 8 – Menambahkan Validasi Sederhana

Tambahkan:

```php
<?php

if($nama == "") {

    echo "Nama wajib diisi";

}

?>
```

Contoh lengkap:

```php
<?php

$nama = $_POST['nama'];

if($nama == "") {

    echo "Nama wajib diisi";

} else {

    echo "Halo " . $nama;

}

?>
```

---

### LANGKAH 9 – Menambahkan CSS ke Halaman PHP

Tambahkan pada `<head>`:

```html
<link rel="stylesheet" href="assets/css/style.css">
```

---

### LANGKAH 10 – Pengujian Program

Lakukan pengujian:

| Skenario            | Hasil                |
| ------------------- | -------------------- |
| Semua field diisi   | Data tampil          |
| Nama kosong         | Pesan error          |
| Submit form         | Data diproses        |
| URL localhost aktif | Halaman PHP berjalan |

---

## E. Contoh Kode Lengkap

---

### daftar.php

```php
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

    <button type="submit">
        Daftar
    </button>

</form>

</body>
</html>
```

---

### proses.php

```php
<?php

$nama = $_POST['nama'];
$email = $_POST['email'];

?>

<!DOCTYPE html>
<html>

<head>
    <title>Hasil</title>
</head>

<body>

<?php

if($nama == "") {

    echo "Nama wajib diisi";

}

else {

    echo "<h2>Data Pendaftaran</h2>";

    echo "Nama: " . $nama . "<br>";
    echo "Email: " . $email;

}

?>

</body>
</html>
```

---

## F. Standar Kode yang Wajib Dipenuhi

Mahasiswa wajib memastikan:

- File menggunakan ekstensi `.php`
- Apache berjalan normal
- Menggunakan metode `POST`
- Data form berhasil diproses
- Kode PHP rapi dan terstruktur

---

## G. Tugas

Tambahkan salah satu fitur berikut:

1. Menampilkan Tanggal Pendaftaran

    ```php
    <?php
    echo date("d-m-Y");
    ?>
    ```

2. Menampilkan Salam Dinamis

    ```php
    <?php
    echo "Selamat datang, " . $nama;
    ?>
    ```

3. Validasi Panjang Nama

    ```php
    <?php

    if(strlen($nama) < 3) {
        echo "Nama terlalu pendek";
    }

    ?>
    ```

---

## H. Refleksi Praktikum

Jawab pertanyaan berikut:

1. Apa fungsi PHP dalam website?
2. Mengapa PHP membutuhkan Apache/XAMPP?
3. Apa perbedaan GET dan POST?
4. Mengapa validasi form penting?

---

## I. Output yang Harus Dikumpulkan

Mahasiswa mengumpulkan laporan praktikum yang menampilkan:

1. Kode file `daftar.html` dan `proses.php` yang telah dibuat.
2. Screenshot:
   * Form pendaftaran
   * Hasil proses data
   * Apache berjalan
3. Penjelasan mengenai praktikum yang telah dikerjakan.
4. Jawaban dari soal refleksi di atas.

Format pengumpulan: PDF, Microsoft Word, atau Google Docs

---

Tahap berikutnya akan menambahkan database.