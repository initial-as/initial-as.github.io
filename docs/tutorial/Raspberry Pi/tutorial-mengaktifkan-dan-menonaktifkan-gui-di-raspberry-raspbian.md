---
title: Mengaktifkan dan Menonaktifkan GUI pada Raspberry Pi OS (Raspbian)
tags: [raspberry pi] # TAG names should always be lowercase
---

Raspberry Pi secara default menggunakan antarmuka baris perintah (_Command Line Interface_ atau CLI), tetapi juga mendukung antarmuka grafis (_Graphical User Interface_ atau GUI) melalui desktop Raspbian (Raspberry Pi OS). Ada kalanya Anda mungkin perlu beralih antara GUI dan CLI tergantung pada kebutuhan, seperti untuk menghemat sumber daya atau memudahkan konfigurasi. Berikut adalah langkah-langkah untuk mengaktifkan dan menonaktifkan GUI di Raspberry Pi.

## Persiapan Awal
- Raspberry Pi dengan sistem operasi Raspberry Pi OS (Raspbian).
- Koneksi keyboard dan monitor, atau akses melalui SSH jika Anda menggunakan Raspberry Pi secara remote.
- Login ke Raspberry Pi Anda.

## 1. Mengaktifkan GUI (Masuk ke Desktop Raspbian)
Jika Anda ingin mengaktifkan GUI dan beralih dari CLI (_command line interface_) ke desktop, ikuti langkah berikut:
### Metode 1: Menggunakan Perintah raspi-config
Masuk ke Raspberry Pi melalui terminal (SSH atau CLI langsung).
1. Jalankan perintah konfigurasi Raspberry Pi:
```bash
sudo raspi-config
```
2. Menu konfigurasi akan terbuka. Pilih opsi System Options lalu Boot / Auto Login (pilihan menu bisa saja berbeda tergantung versi Raspbian yang Anda gunakan).
3. Pilih Desktop atau Desktop Autologin.
4. Simpan perubahan lalu _restart_ Raspberry Pi dengan perintah:
```bash
sudo reboot
```
Setelah restart, Raspberry Pi akan langsung masuk ke antarmuka GUI.

### Metode 2: Langsung Masuk GUI Tanpa Reboot
Jika Anda sudah berada di terminal dan ingin langsung masuk ke GUI tanpa perlu restart, gunakan perintah:
```bash
startx
```
Perintah ini akan langsung memulai GUI pada sesi aktif.

## 2. Menonaktifkan GUI (Kembali ke CLI)
Jika Anda ingin menonaktifkan GUI dan kembali menggunakan mode terminal, ikuti salah satu dari dua metode berikut:

### Metode 1: Menggunakan Perintah raspi-config
1. Buka terminal dan jalankan perintah konfigurasi:
```bash
sudo raspi-config
```
2. Menu konfigurasi akan terbuka. Pilih opsi System Options lalu Boot / Auto Login (pilihan menu bisa saja berbeda tergantung versi Raspbian yang Anda gunakan).
3. Pilih Console atau Console Autologin.
4. Simpan perubahan lalu _restart_ Raspberry Pi dengan perintah:
```bash
sudo reboot
```
Setelah restart, Raspberry Pi akan langsung masuk ke antarmuka CLI.

### Metode 2: Menonaktifkan GUI tanpa Reboot
Jika Anda hanya ingin keluar dari GUI saat ini dan kembali ke CLI tanpa merestart, Anda bisa menggunakan perintah:
```bash
sudo systemctl stop lightdm
```
`lightdm` adalah display manager yang mengelola GUI di Raspberry Pi. Perintah di atas akan menghentikan GUI dan membawa Anda kembali ke terminal. Untuk mengaktifkan kembali GUI, Anda cukup menjalankan perintah:
```bash
sudo systemctl start lightdm
```

## 3. Menyeting Boot ke CLI atau GUI
Jika Anda ingin mengatur Raspberry Pi agar otomatis masuk ke GUI atau CLI setiap kali dihidupkan, Anda bisa melakukannya melalui `raspi-config` dengan langkah-langkah di atas. Pilihan boot ke GUI atau CLI akan diterapkan setiap kali Raspberry Pi direstart.

## Kesimpulan
Mengaktifkan dan menonaktifkan GUI di Raspberry Pi dapat dilakukan dengan mudah bergantung pada kebutuhan Anda. Jika Anda menggunakan Raspberry Pi sebagai server atau aplikasi ringan, CLI bisa lebih menghemat sumber daya. Sebaliknya, untuk penggunaan yang memerlukan antarmuka grafis, GUI akan memberikan pengalaman yang lebih intuitif.

Dengan mengikuti langkah-langkah di atas, Anda bisa dengan mudah beralih antara mode CLI dan GUI kapan saja!

## Referensi
1. [Raspberry Pi Documentation - Configuration](https://www.raspberrypi.com/documentation/computers/configuration.html)