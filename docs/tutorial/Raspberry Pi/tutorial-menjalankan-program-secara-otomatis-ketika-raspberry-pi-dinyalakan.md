---
title: Menjalankan Program/Aplikasi GUI secara Otomatis di Raspberry Pi (Auto Start-up)
tags: [raspberry pi] # TAG names should always be lowercase
---

Raspberry Pi adalah komputer kecil (_single board computer_) dengan harga terjangkau yang sering digunakan untuk berbagai proyek DIY dan pengembangan perangkat lunak. Biasanya, ada aplikasi tertentu yang sering kita gunakan untuk keperluan sehari-hari. Aplikasi tersebut dapat kita atur agar dijalankan secara otomatis ketika Raspbian melakukan _booting_, tutorial ini akan membahas cara untuk melakukannya.

## Langkah 1: Persiapan Awal
Sebelum memulai, pastikan Raspberry Pi Anda telah dikonfigurasi dengan benar dan aplikasi GUI yang ingin dijalankan sudah dapat diakses di desktop Raspberry Pi.
Yang Anda butuhkan:
- Raspberry Pi yang terinstal Raspberry Pi OS / Raspbian (saat tulisan ini dibuat, saya menggunakan Raspbian berbasis Debian 11).
- Aplikasi GUI yang akan dijalankan otomatis.
- Akses ke terminal Raspberry Pi.

## Langkah 2: Menambahkan Skrip Startup
Dalam tutorial ini kita akan menggunakan metode autostart karena ini adalah metode yang paling sederhana untuk menjalankan aplikasi GUI saat startup. Berikut langkah-langkah yang perlu dilakukan:
1. Buka file autostart dengan nano
```bash
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```
2. Tambahkan instruksi untuk menjalankan program yang diinginkan. Misalnya saya ingin Epiphany Browser otomatis dijalankan ketika komputer baru menyala, maka saya perlu menambahkan sintaks `@epiphany-browser` di akhir file autostart tersebut.
```bash
@epiphany-browser
```

## Kesimpulan
Dengan mengikuti langkah-langkah di atas, Anda dapat mengatur aplikasi GUI agar otomatis dijalankan saat Raspberry Pi dihidupkan. Metode ini berguna untuk proyek yang memerlukan _interface_ langsung tanpa perlu pengguna menjalankan aplikasi secara manual setelah _booting_.

Jika Anda mengalami kendala atau ingin menambahkan fitur lain, Anda bisa mengeksplorasi lebih lanjut dengan menyesuaikan skrip atau menggunakan metode lain seperti `rc.local` ataupun `systemd` untuk kontrol yang lebih mendalam.

## Referensi
1. [How to use Autostart - Raspberry Pi OS (Desktop)](https://forums.raspberrypi.com/viewtopic.php?p=1775783#p1775783)