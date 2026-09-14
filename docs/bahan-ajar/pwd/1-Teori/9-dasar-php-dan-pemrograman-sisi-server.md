---
title: "9. Dasar PHP dan Pemrograman Sisi Server"
---

# Dasar PHP dan Pemrograman Sisi Server

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan konsep pemrograman sisi server (server-side programming).
2. Memahami fungsi PHP dalam pengembangan web dinamis.
3. Menjalankan file PHP menggunakan web server lokal.
4. Menuliskan sintaks dasar PHP dengan benar.
5. Menggunakan variabel, operator, percabangan, dan perulangan dalam PHP.
6. Memproses data sederhana dari form HTML menggunakan PHP.

---

## 1. Pendahuluan

Pada pertemuan sebelumnya, mahasiswa telah mempelajari JavaScript untuk membuat website menjadi interaktif di sisi client (browser).

Namun, terdapat beberapa proses yang tidak dapat dilakukan hanya dengan JavaScript frontend, seperti:

* Menyimpan data pengguna
* Memproses login
* Menghubungkan database
* Mengelola file pada server
* Memvalidasi data di server

Untuk kebutuhan tersebut digunakan bahasa pemrograman sisi server, salah satunya adalah **PHP**.

PHP merupakan bahasa pemrograman web yang sangat populer dan banyak digunakan untuk membangun website dinamis.

---

## 2. Pengertian PHP

PHP adalah singkatan dari:

> PHP: Hypertext Preprocessor

PHP adalah bahasa pemrograman server-side yang dijalankan di web server.

Artinya:

* Kode PHP diproses di server
* Browser hanya menerima hasil akhirnya berupa HTML

---

## 3. Client-Side vs Server-Side

| Client-Side                       | Server-Side              |
| --------------------------------- | ------------------------ |
| Berjalan di browser               | Berjalan di server       |
| Contoh: JavaScript                | Contoh: PHP              |
| Mengatur interaktivitas           | Mengolah data            |
| Tidak langsung mengakses database | Dapat mengakses database |

---

## 4. Cara Kerja PHP

Alur kerja sederhana PHP:

1. Browser meminta halaman `.php`
2. Server menjalankan kode PHP
3. PHP menghasilkan HTML
4. HTML dikirim ke browser

---

## 5. Persiapan Lingkungan PHP

PHP membutuhkan web server.

Software yang umum digunakan:

* XAMPP
* Laragon
* WAMP
* MAMP

Dalam praktikum biasanya digunakan:

> XAMPP

---

### 5.1 Struktur Folder XAMPP

Folder project disimpan di:

```text
htdocs/
```

Contoh:

```text
htdocs/web-company-profile/
```

---

### 5.2 Menjalankan Server

Langkah:

1. Buka XAMPP
2. Jalankan Apache
3. Akses browser:

```text
http://localhost/
```

---

## 6. Struktur Dasar PHP

Kode PHP ditulis di dalam tag:

```php
<?php
    // kode PHP
?>
```

Contoh:

```php
<?php
    echo "Halo Dunia";
?>
```

---

## 7. File PHP

File PHP disimpan dengan ekstensi:

```text
.php
```

Contoh:

* index.php
* proses.php

---

## 8. Menampilkan Output

PHP menggunakan:

```php
echo
```

Contoh:

```php
<?php
echo "Belajar PHP";
?>
```

Contoh lain:

```php
<?php
echo "<h1>Selamat Datang</h1>";
?>
```

---

## 9. Variabel pada PHP

Variabel diawali simbol `$`.

Contoh:

```php
<?php
$nama = "Andi";
$umur = 20;
?>
```

---

### 9.1 Aturan Penamaan Variabel

* Diawali `$`
* Tidak boleh diawali angka
* Tidak boleh mengandung spasi
* Bersifat case-sensitive

Benar:

```php
$namaMahasiswa
```

Salah:

```php
$1nama
```

---

## 10. Tipe Data Dasar PHP

---

### 10.1 String

```php
$nama = "Budi";
```

---

### 10.2 Integer

```php
$umur = 20;
```

---

### 10.3 Float

```php
$nilai = 89.5;
```

---

### 10.4 Boolean

```php
$aktif = true;
```

---

## 11. Operator pada PHP

---

### 11.1 Operator Aritmatika

```php
$a = 10;
$b = 5;

$hasil = $a + $b;
```

Operator:

* `+`
* `-`
* `*`
* `/`
* `%`

---

### 11.2 Operator Perbandingan

```php
$a == $b
```

Jenis:

* `==`
* `!=`
* `>`
* `<`
* `>=`
* `<=`

---

## 12. Percabangan pada PHP

---

### 12.1 if

```php
<?php

$nilai = 80;

if($nilai >= 75) {
    echo "Lulus";
}

?>
```

---

### 12.2 if else

```php
<?php

if($nilai >= 75) {
    echo "Lulus";
} else {
    echo "Tidak Lulus";
}

?>
```

---

## 13. Perulangan pada PHP

---

### 13.1 for

```php
<?php

for($i = 1; $i <= 5; $i++) {
    echo $i;
}

?>
```

---

### 13.2 while

```php
<?php

$i = 1;

while($i <= 5) {
    echo $i;
    $i++;
}

?>
```

---

## 14. Form HTML dan PHP

PHP sering digunakan untuk memproses data form.

---

### 14.1 Form HTML

```html
<form action="proses.php" method="POST">

    <input type="text" name="nama">

    <button type="submit">
        Kirim
    </button>

</form>
```

---

### 14.2 Mengambil Data Form

File `proses.php`:

```php
<?php

$nama = $_POST['nama'];

echo "Halo " . $nama;

?>
```

---

## 15. Metode GET dan POST

| GET                   | POST                     |
| --------------------- | ------------------------ |
| Data terlihat di URL  | Data tidak terlihat      |
| Cocok untuk pencarian | Cocok untuk form penting |
| Kapasitas terbatas    | Kapasitas lebih besar    |

---

## 16. Komentar pada PHP

Komentar satu baris:

```php
// komentar
```

Komentar banyak baris:

```php
/*
Komentar panjang
*/
```

---

## 17. Best Practice Dasar PHP

1. Gunakan nama variabel yang jelas
2. Pisahkan file proses dan tampilan
3. Gunakan indentasi rapi
4. Gunakan metode POST untuk form penting
5. Validasi data input pengguna

---

## 18. Kesalahan Umum

- Lupa tanda `;`
- Salah penulisan `$` pada variabel
- File tidak disimpan sebagai `.php`
- Apache belum dijalankan
- Salah penulisan `$_POST`

---

## Rangkuman

Pada pertemuan ini telah dipelajari:

1. Konsep server-side programming
2. Fungsi PHP dalam pengembangan web
3. Struktur dasar PHP
4. Variabel dan operator PHP
5. Percabangan dan perulangan
6. Pemrosesan form menggunakan PHP
7. Metode GET dan POST

PHP merupakan fondasi penting untuk membangun website dinamis yang dapat memproses data pengguna dan terhubung dengan database.

---

## Referensi

* Duckett, J. (2022). *PHP & MySQL: Server-Side Web Development*.
* [PHP Documentation](https://www.php.net/manual/en/)
* [W3Schools. PHP Tutorial.](https://www.w3schools.com/php/)
