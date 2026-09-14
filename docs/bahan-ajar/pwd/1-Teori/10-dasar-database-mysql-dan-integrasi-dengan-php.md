---
title: "10. Dasar Database MySQL dan Integrasi dengan PHP"
---

# Dasar Database MySQL dan Integrasi dengan PHP

## Capaian Pembelajaran Pertemuan (Sub-CPMK)

Setelah mengikuti perkuliahan ini, mahasiswa mampu:

1. Menjelaskan konsep dasar database dan DBMS.
2. Memahami fungsi MySQL dalam pengembangan web.
3. Membuat database dan tabel sederhana menggunakan MySQL.
4. Memahami konsep tabel, field, record, dan primary key.
5. Menggunakan perintah SQL dasar.
6. Memahami cara menghubungkan PHP dengan database MySQL.

---

## 1. Pendahuluan

Pada pertemuan sebelumnya, mahasiswa telah mempelajari bagaimana PHP memproses data dari form HTML. Namun, data yang diproses masih bersifat sementara karena belum disimpan secara permanen. Agar data dapat disimpan, dicari, diperbarui, dan dihapus, maka diperlukan **database**.

Dalam pengembangan web, database digunakan untuk menyimpan berbagai data seperti:

* akun pengguna,
* data mahasiswa,
* artikel,
* transaksi,
* dan data pendaftaran.

Salah satu database yang paling populer digunakan bersama PHP adalah MySQL.

---

## 2. Pengertian Database

Database adalah kumpulan data yang terorganisir dan dapat diakses, dikelola, serta diperbarui dengan mudah. Contoh penggunaan database:

* Sistem akademik
* E-commerce
* Media sosial
* Website sekolah
* Sistem pendaftaran online

---

## 3. Pengertian DBMS

DBMS (Database Management System) adalah software yang digunakan untuk mengelola database. Contoh DBMS:

* MySQL
* PostgreSQL
* Oracle
* SQL Server
* MariaDB

Pada mata kuliah ini digunakan MySQL.

---

## 4. Pengertian MySQL

MySQL adalah sistem manajemen database relasional (RDBMS) yang menggunakan bahasa SQL. Kelebihan MySQL:

* Gratis dan open source
* Cepat dan ringan
* Mudah digunakan
* Banyak digunakan dalam web development
* Terintegrasi baik dengan PHP

---

## 5. Konsep Dasar Database

---

### 5.1 Database

Kumpulan tabel.

Contoh:

* database_kampus

---

### 5.2 Tabel

Tempat menyimpan data.

Contoh:

* mahasiswa
* dosen
* pendaftaran

---

### 5.3 Field (Kolom)

Atribut data.

Contoh:

* nama
* email
* jurusan

---

### 5.4 Record (Baris)

Isi data pada tabel.

Contoh:

| id | nama | email         |
| -- | ---- | ------------- |
| 1  | Andi | andi@mail.com |

---

## 6. Primary Key

Primary key adalah field unik yang membedakan setiap data.

Contoh: `id` atau `nim`

Karakteristik:

* Tidak boleh sama
* Tidak boleh kosong
* Bersifat unik

---

## 7. Struktur Relasi Sederhana

Contoh tabel:

| id | nama | email         | program |
| -- | ---- | ------------- | ------- |
| 1  | Andi | andi@mail.com | Web     |

---

## 8. SQL (Structured Query Language)

SQL adalah bahasa untuk mengelola database. SQL Digunakan untuk:

* membuat database,
* membuat tabel,
* menambah data,
* mengubah data,
* menghapus data,
* menampilkan data.

---

## 9. Perintah SQL Dasar

---

### 9.1 Membuat Database

```sql
CREATE DATABASE db_pendaftaran;
```

---

### 9.2 Menggunakan Database

```sql
USE db_pendaftaran;
```

---

### 9.3 Membuat Tabel

```sql
CREATE TABLE pendaftaran (

    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    email VARCHAR(100),
    program VARCHAR(50)

);
```

---

## 10. Tipe Data pada MySQL

| Tipe Data | Fungsi        |
| --------- | ------------- |
| INT       | Angka bulat   |
| VARCHAR   | Teks pendek   |
| TEXT      | Teks panjang  |
| DATE      | Tanggal       |
| FLOAT     | Angka desimal |

---

## 11. Menambahkan Data

```sql
INSERT INTO pendaftaran
(nama, email, program)

VALUES
('Andi', 'andi@mail.com', 'Web');
```

---

## 12. Menampilkan Data

```sql
SELECT * FROM pendaftaran;
```

---

## 13. Mengubah Data

```sql
UPDATE pendaftaran

SET program = 'UI/UX'

WHERE id = 1;
```

---

## 14. Menghapus Data

```sql
DELETE FROM pendaftaran

WHERE id = 1;
```

---

## 15. phpMyAdmin

phpMyAdmin adalah aplikasi berbasis web untuk mengelola MySQL secara visual.

Biasanya tersedia di XAMPP.

Akses:

```text
http://localhost/phpmyadmin
```

---

## 16. Langkah Membuat Database di phpMyAdmin

1. Jalankan Apache dan MySQL
2. Buka phpMyAdmin
3. Klik “New”
4. Masukkan nama database
5. Klik “Create”

---

## 17. Menghubungkan PHP dengan MySQL

PHP menggunakan:

```php
mysqli_connect()
```

Contoh:

```php
<?php

$koneksi = mysqli_connect(
    "localhost",
    "root",
    "",
    "db_pendaftaran"
);

?>
```

Parameter:

1. host
2. username
3. password
4. database

---

## 18. Mengecek Koneksi Database

```php
<?php

if(!$koneksi) {

    die("Koneksi gagal");

}

echo "Koneksi berhasil";

?>
```

---

## 19. Alur Integrasi PHP dan MySQL

Alur kerja:

1. User mengisi form
2. PHP menerima data
3. PHP mengirim data ke MySQL
4. MySQL menyimpan data
5. PHP menampilkan hasil

---

## 20. Best Practice Database Dasar

1. Gunakan nama tabel yang jelas
2. Gunakan primary key
3. Gunakan tipe data sesuai kebutuhan
4. Hindari data duplikat
5. Validasi input pengguna

---

## 21. Kesalahan Umum

- Salah nama database
- MySQL belum dijalankan
- Salah penulisan query SQL
- Lupa primary key
- Salah nama field

---

## D. Rangkuman

Pada pertemuan ini telah dipelajari:

1. Konsep database dan DBMS
2. Pengertian MySQL
3. Struktur tabel database
4. Field, record, dan primary key
5. Perintah SQL dasar
6. phpMyAdmin
7. Koneksi PHP dengan MySQL

Database merupakan komponen penting dalam pengembangan website dinamis karena memungkinkan data disimpan dan dikelola secara permanen.

---

## Referensi

* Elmasri, R. & Navathe, S. *Fundamentals of Database Systems*.
* [PHP Documentation: MySQL Improved Extension](https://www.php.net/mysqli)
* [W3Schools. SQL Tutorial.](https://www.w3schools.com/sql/default.asp)
