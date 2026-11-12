---
title: Membangun VPN Gateway dengan ZeroTier dan Auto-Failover di Raspberry Pi (Debian 11)
tags: ["networking", "raspberry pi", "debian 11", "zerotier", "linux", "vpn"] # TAG names should always be lowercase
---

# Membangun VPN Gateway dengan ZeroTier dan Auto-Failover di Raspberry Pi (Debian 11)

**Virtual Private Network (VPN)** adalah teknologi yang menciptakan jalur koneksi terenkripsi (*tunnel*) melalui jaringan publik seperti internet. Dengan VPN, perangkat yang berada di lokasi berjauhan dapat terhubung seolah-olah berada dalam satu jaringan lokal (LAN) yang sama.

Dalam aktivitas sehari-hari, VPN memiliki beberapa fungsi utama:

* **Mengamankan Koneksi di Jaringan Publik:** Melindungi data sensitif dari penyadapan (*sniffing*) saat menggunakan Wi-Fi publik di kafe, bandara, atau hotel.
* **Akses Jarak Jauh (*Remote Access*):** Memungkinkan pengguna mengakses server rumah (*homelab*), perangkat NAS, atau CCTV secara aman dari mana saja tanpa harus membuka *port* langsung ke internet (*port forwarding*).
* **Melewati Pembatasan Jaringan & IP Publik Dinamis:** Mengatasi kendala ISP yang menggunakan CGNAT (tidak memiliki IP Publik) dengan memanfaatkan arsitektur *peer-to-peer* virtual seperti ZeroTier.
* **Rute Keluar Terpusat (*Full-Tunnel / Exit Node*):** Mengarahkan seluruh lalu lintas internet perangkat klien melalui satu gerbang (*gateway*) tertentu agar mendapatkan identitas IP atau kebijakan jaringan dari lokasi gateway tersebut.

---

## Arsitektur Sistem

Pada tutorial ini, kita akan mengubah **Raspberry Pi berbasis Debian 11 (Bullseye)** menjadi **ZeroTier Exit Node (VPN Gateway)** dengan fitur **Auto-Failover** antara jaringan kabel (`eth0`) dan Wi-Fi (`wlan0`).

* **Jalur Utama:** Ethernet (`eth0`) dengan *route metric* rendah (prioritas tinggi).
* **Jalur Cadangan (*Fallback*):** Wi-Fi (`wlan0`) dengan *route metric* lebih tinggi.
* **Subnet Virtual ZeroTier:** `172.29.0.0/16` (sesuaikan dengan *Network ID* Anda).

---

## Langkah 1: Membuat Jaringan Virtual di ZeroTier Central

1. Buka [my.zerotier.com](https://my.zerotier.com/), buat akun gratis, dan login.
2. Klik tombol **Create A Network**. Sistem akan membuat sebuah jaringan baru lengkap dengan 16 digit **Network ID** (contoh: `8056c2e21c000001`).
3. Klik pada jaringan baru tersebut untuk membuka halaman pengaturan, lalu catat **Network ID** dan **Managed IPv4 Subnet** yang digunakan (misalnya `172.29.0.0/16`).

---

## Langkah 2: Instalasi ZeroTier di Raspberry Pi (Debian 11)

### 1. Perbarui Sistem dan Instal Paket Pendukung

Sebelum memasang ZeroTier, pastikan paket sistem Raspberry Pi sudah mutakhir dan memiliki `curl` serta `gnupg` untuk verifikasi kunci repositori:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl gnupg ca-certificates

```

### 2. Instal Paket ZeroTier One

Jalankan skrip instalasi resmi ZeroTier yang akan menambahkan repositori Debian Bullseye, mengimpor GPG key, dan menginstal paket `zerotier-one`:

```bash
curl -s https://install.zerotier.com | sudo bash

```

*(Alternatif manual dengan verifikasi GPG penuh untuk Debian 11 jika tidak ingin langsung mengeksekusi skrip bash):*

```bash
curl -s 'https://raw.githubusercontent.com/zerotier/ZeroTierOne/main/doc/contact%40zerotier.com.gpg' | gpg --dearmor | sudo tee /usr/share/keyrings/zerotierone-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/zerotierone-archive-keyring.gpg] http://download.zerotier.com/debian/bullseye bullseye main" | sudo tee /etc/apt/sources.list.d/zerotier.list
sudo apt update
sudo apt install -y zerotier-one

```

### 3. Jalankan Layanan dan Verifikasi Status ZeroTier

Pastikan layanan `zerotier-one` aktif dan otomatis berjalan setiap kali Raspberry Pi dinyalakan:

```bash
sudo systemctl enable --now zerotier-one
sudo zerotier-cli status

```

Output yang sukses akan menampilkan `200 info <NODE_ID> <VERSI> ONLINE`.

### 4. Bergabung ke Jaringan ZeroTier dan Otorisasi Perangkat

Hubungkan Raspberry Pi ke Network ID yang sudah dibuat pada Langkah 1:

```bash
sudo zerotier-cli join <NETWORK_ID_ANDA>

```

Output terminal akan menampilkan `200 join OK`.

Selanjutnya:

1. Kembali ke dashboard web **ZeroTier Central**, gulir ke bagian **Members**.
2. Temukan perangkat baru yang muncul sesuai `<NODE_ID>` Raspberry Pi Anda, lalu **centang kotak Auth**.
3. Tunggu beberapa detik hingga kolom **Managed IPs** terisi (misalnya `172.29.54.179`).
4. Cek nama interface virtual ZeroTier di terminal Raspberry Pi dengan perintah:

```bash
ip a

```

Perhatikan interface berawalan `zt` (contoh: `ztks5qyut4`) yang sudah memiliki alamat IP ZeroTier.

### 5. Konfigurasi Managed Route (IPv4 & IPv6) di ZeroTier Central

Agar Raspberry Pi bertindak sebagai gerbang keluar internet penuh (*Dual-Stack Exit Node*):

1. Di halaman jaringan **ZeroTier Central**, buka bagian **Advanced -> Managed Routes**.
2. Tambahkan rute default **IPv4**:
    * **Destination:** `0.0.0.0/0`
    * **Via:** `<IPv4 ZeroTier Raspberry Pi>` (contoh: `172.29.54.179`)

3. Tambahkan rute default **IPv6**:
    * **Destination:** `::/0`
    * **Via:** `<IPv6 ZeroTier Raspberry Pi>` (contoh: `fd80:56c2:e21c:...`)

4. Klik **Submit**.

---

## Langkah 3: Mengatur Failover Jaringan (Ethernet ke Wi-Fi)

Pada Debian 11 di Raspberry Pi, manajemen jaringan ditangani oleh `dhcpcd`. Agar koneksi VPN otomatis berpindah ke Wi-Fi saat kabel LAN terputus atau gagal memperoleh DHCP (mencegah IP *link-local* `169.254.x.x`), atur prioritas *routing* pada `/etc/dhcpcd.conf`.

Buka file konfigurasi:

```bash
sudo nano /etc/dhcpcd.conf

```

Tambahkan baris berikut di bagian paling bawah file:

```text
# Mencegah alokasi IP link-local (APIPA) jika DHCP kabel gagal
noipv4ll

# Prioritas utama menggunakan kabel (metric lebih rendah = prioritas lebih tinggi)
interface eth0
metric 100

# Jalur cadangan menggunakan Wi-Fi
interface wlan0
metric 200

```

Simpan file (`Ctrl+O`, `Enter`, lalu `Ctrl+X`), lalu terapkan konfigurasi:

```bash
sudo systemctl restart dhcpcd

```

Verifikasi tabel *routing* dengan perintah `ip route show | grep default` (untuk IPv4) dan `ip -6 route show | grep default` (untuk IPv6). Pastikan rute `eth0` memiliki prioritas metric lebih rendah dibanding `wlan0`.

---

## Langkah 4: Mengaktifkan IP Forwarding dan Rules Firewall (IPv4 & IPv6)

Agar Raspberry Pi dapat meneruskan lalu lintas internet IPv4 maupun IPv6 dari klien ZeroTier melewati `eth0` ataupun `wlan0`, aktifkan *IP Forwarding* di kernel Linux dan konfigurasi `iptables` serta `ip6tables`.

### 1. Aktifkan IPv4 & IPv6 Forwarding di Kernel

Buka file `/etc/sysctl.conf`:

```bash
sudo nano /etc/sysctl.conf

```

Tambahkan atau hilangkan tanda pagar (`#`) pada baris berikut:

```text
# Aktifkan forwarding IPv4
net.ipv4.ip_forward=1

# Aktifkan forwarding IPv6
net.ipv6.conf.all.forwarding=1
net.ipv6.conf.default.forwarding=1

# Pastikan Pi tetap menerima Router Advertisement (SLAAC) dari router/ISP saat forwarding aktif
net.ipv6.conf.all.accept_ra=2

```

Terapkan perubahan:

```bash
sudo sysctl -p

```

### 2. Pasang Rules Firewall IPv4 (`iptables`)

Gunakan aturan berbasis subnet dan *wildcard* interface ZeroTier (`zt+`) agar aturan *forwarding* dan NAT berlaku otomatis pada interface fisik mana pun yang sedang aktif:

```bash
# 1. Izinkan paket balasan IPv4 (established & related) kembali ke klien
sudo iptables -A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT

# 2. Izinkan lalu lintas keluar IPv4 dari interface ZeroTier menuju rute aktif mana pun
sudo iptables -A FORWARD -i zt+ -j ACCEPT

# 3. Lakukan NAT (Masquerade) untuk paket IPv4 dari subnet ZeroTier menuju internet
sudo iptables -t nat -A POSTROUTING -s 172.29.0.0/16 ! -d 172.29.0.0/16 -j MASQUERADE

```

*(Catatan: Ganti `172.29.0.0/16` sesuai dengan subnet IPv4 jaringan ZeroTier Anda).*

### 3. Pasang Rules Firewall IPv6 (`ip6tables` / NAT66)

Lakukan konfigurasi serupa untuk lalu lintas IPv6 dari rentang alamat ZeroTier RFC4193 (`fd00::/8`):

```bash
# 1. Izinkan paket balasan IPv6 (established & related) kembali ke klien
sudo ip6tables -A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT

# 2. Izinkan lalu lintas keluar IPv6 dari interface ZeroTier menuju rute aktif mana pun
sudo ip6tables -A FORWARD -i zt+ -j ACCEPT

# 3. Lakukan NAT66 (Masquerade) untuk paket IPv6 dari subnet ZeroTier menuju internet
sudo ip6tables -t nat -A POSTROUTING -s fd00::/8 ! -d fd00::/8 -j MASQUERADE

```

### 4. Simpan Semua Aturan Secara Permanen

Instal `iptables-persistent` agar rules `iptables` (IPv4) dan `ip6tables` (IPv6) tersimpan dan tidak hilang setelah Raspberry Pi di-reboot:

```bash
sudo apt install -y iptables-persistent
sudo netfilter-persistent save

```

---

## Langkah 5: Pengaturan Perangkat Klien & Uji Koneksi Dual-Stack

1. Instal aplikasi **ZeroTier One** pada perangkat klien (Windows, macOS, Linux, Android, atau iOS).
2. Masukkan **Network ID** yang sama, lalu beri centang **Auth** pada dashboard ZeroTier Central.
3. Aktifkan opsi **Allow Default Route Override** (serta pastikan **Allow Global IP** / **Allow Managed** aktif) pada aplikasi klien agar seluruh trafik internet diarahkan melalui Raspberry Pi.
4. Uji kedua protokol koneksi dari perangkat klien. IP publik klien harus sama dengan IP publik jaringan Raspberry Pi.

Ketika interface Ethernet (`eth0`) tidak lagi memiliki konektivitas, sistem akan menggunakan jalur Wi-Fi (`wlan0`) apabila interface tersebut telah terhubung dan memiliki default route yang valid. Selama proses perpindahan, koneksi klien ZeroTier mungkin mengalami gangguan sementara hingga konektivitas kembali pulih.

---

## Catatan dan Rekomendasi

Beberapa hal berikut perlu diperhatikan untuk meningkatkan keandalan, keamanan, dan kompatibilitas konfigurasi VPN Gateway ini:

1. **Gunakan sistem operasi yang masih didukung.** Debian 11 (Bullseye) telah mengakhiri masa dukungan LTS pada Agustus 2026. Untuk instalasi baru, disarankan menggunakan Debian 12 atau Debian 13 agar tetap memperoleh pembaruan keamanan.

2. **Sempurnakan mekanisme auto-failover.** Pengaturan *route metric* hanya menentukan prioritas jalur jaringan dan belum dapat mendeteksi gangguan koneksi internet. Untuk failover yang lebih andal, tambahkan mekanisme *health check* menggunakan `ping` atau pemeriksaan konektivitas secara berkala melalui masing-masing interface.

3. **Perhatikan konfigurasi firewall.** Aturan `iptables` sebaiknya membatasi lalu lintas forwarding hanya dari jaringan ZeroTier menuju interface jaringan yang digunakan. Pastikan pula urutan aturan tidak bertentangan dengan kebijakan firewall yang sudah diterapkan.

4. **Pastikan pengelola jaringan sesuai dengan sistem yang digunakan.** File `/etc/dhcpcd.conf` hanya berlaku jika sistem menggunakan `dhcpcd` sebagai pengelola jaringan. Periksa terlebih dahulu layanan jaringan yang aktif sebelum menerapkan konfigurasi.

5. **Lakukan pengujian failover secara menyeluruh.** Selain menyimulasikan kabel Ethernet terputus, lakukan pengujian ketika interface Ethernet tetap aktif tetapi koneksi internet dari router mengalami gangguan. Pengujian ini diperlukan untuk memastikan mekanisme *health check* dapat bekerja sebagaimana mestinya.

6. **Sesuaikan subnet ZeroTier dengan jaringan lokal.** Gunakan rentang IP yang tidak bertabrakan dengan jaringan LAN, Wi-Fi, maupun jaringan virtual lainnya. Untuk jaringan dengan jumlah perangkat terbatas, subnet `/24` dapat menjadi pilihan yang lebih praktis dibandingkan `/16`.

Konfigurasi dalam tutorial ini dapat dikembangkan lebih lanjut sesuai kebutuhan dan lingkungan jaringan masing-masing. Perlu diingat bahwa keberhasilan *failover* tidak hanya bergantung pada ketersediaan interface jaringan, tetapi juga pada kemampuan sistem mendeteksi dan merespons gangguan konektivitas.

:::warning
Eksperimen dan pengujian secara bertahap sangat disarankan sebelum menerapkan konfigurasi ini pada lingkungan produksi.
:::