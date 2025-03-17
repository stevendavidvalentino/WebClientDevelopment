# Javascript Untuk Siapa??

## Pendahuluan

Saya Sempat membaca beberapa artikel mengenai JavaScript berikut adalah Javascript menurut pemahaman yang saya punya. Javascript adalah salah satu bahasa pemrograman yang paling efisien dan paling berpengaruh di dunia sekarang ini. Karena Mulai dari pembuatan website interaktif sampai aplikasi mobile/Hp, JavaScript menjadi salah satu pioneer pengembangan perangkat lunak. Pada Artikel ini Saya akan membahas Javascript menurut dengan pemahaman saya dan fakta yang ada, saya akan berikan sejarha singkat, fakta unik, nama pencipta, serta bagaimana javascript bisa sampai diketahui orang secara global!.

## Apa Itu JavaScript?

Pertama — tama JavaScript (JS) adalah Salah satu bahasa pemrograman tingkat tinggi yang Dimana digunakan untuk membuat konten yang menarik untuk pengguna. Berbeda dengan HTML (berfungsi Menyusun Struktural) dan CSS (Berfungsi untuk mengatur tampilan layar), Sedangkan Kalo JavaScript itu tugasnya untuk “menghidupkan” website tersebut seperti memberikan interaksi pengguna, lalu animasi, verifikasi form dan update konten tanpa harus ke refresh halaman nya. Sejarah Singkat JavaScript Sekarang Kita bahas Sejarah singkatnya, JavaScript diciptakan pada tahun 1995 oleh Brendan Eich, seorang programmer yang bekerja di Netscape. Pada Awalnya pembuatan Java Script ini hanya karena iseng, dikarenakan sang pencipta di challenge oleh temannya untuk membuat Bahasa pemrograman yang lebih simple dan mudah dipahami tapi uniknya Brendan Eich (sang pencipta) hanya diberi waktu 10 hari saja untuk menyelesaikannya. Pada mulanya bahasa ini dinamai Mocha, lalu sempat diubah menjadi LiveScript. Namun, untuk memanfaatkan popularitas Java pada saat itu, Netscape mengganti namanya menjadi JavaScript, meskipun sebenenarnya secara teknis tidak ada hubungannya dengan Java. Lalu Javascript mulai berkembang dan Pada tahun 1997, JavaScript distandarisasi oleh ECMA International dengan nama ECMAScript (ES). Yang berarti javasudah distandarisasi dan dapat digunakan untuk kepentingan industry, Lalu Versi modern JavaScript, seperti ES6 (2015), memperkenalkan fitur baru seperti arrow functions, classes, dan modules, yang membuatnya lebih powerful dan mudah digunakan. Fakta unik: JavaScript dibuat hanya dalam 10 hari! Brendan Eich menciptakan prototipe pertamanya dalam waktu singkat untuk bersaing dengan teknologi web seperti Microsoft’s VBScript.

## Kelebihan JavaScript

Sekarang kita akan bahas kelebihan dan kekurangan dari Javascript dan nanti pada Kesimpulan akan kami akan sertakan rekomendasi dari kami siapa saja yang cocok untuk menggunakan javascript

1. Berjalan di Semua Browser JavaScript didukung oleh semua browser modern (Chrome, Firefox, Safari) tanpa perlu instalasi tambahan.
2. Mudah Dipelajari Sintaksisnya mirip dengan bahasa Inggris, dan komunitasnya sangat besar, sehingga mudah menemukan tutorial atau solusi masalah.
3. Ekosistem Luas Ada ribuan library dan framework seperti React, Vue, Angular, dan jQuery yang mempercepat pengembangan.
4. Asinkron dan Non-Blocking Dengan fitur seperti Promises dan async/await, JavaScript bisa menangani operasi berat tanpa mengganggu antarmuka pengguna.
5. Multiplatform Dengan tools seperti Node.js, JavaScript bisa digunakan untuk backend, desktop (Electron), IoT, bahkan machine learning (TensorFlow.js).

## Kekurangan JavaScript

1. Keamanan Kode JavaScript di sisi klien bisa dimanipulasi, sehingga rentan terhadap serangan seperti Cross-Site Scripting (XSS)
2. Ketergantungan pada Browser Perilaku JavaScript bisa berbeda di tiap browser, meski tools seperti Babel membantu mengurangi masalah ini.
3. Single-Threaded JavaScript hanya menggunakan satu thread, sehingga operasi berat bisa membuat aplikasi “hang” jika tidak dioptimalkan.
4. Dinamis dan Fleksibel Fleksibilitas tipe data bisa menyebabkan error runtime yang sulit dilacak, terutama untuk proyek besar.

## Fakta Menarik tentang JavaScript

Nama yang Menipu: JavaScript tidak ada hubungannya dengan Java. Nama ini dipilih demi strategi pemasaran. • 10 Hari yang Mengubah Dunia: Eich menciptakan JavaScript dalam waktu 10 hari sebuah kecepatan yang belum pernah terjadi sebelumnya! • Skandal “left-pad”: Pada 2016, seorang developer menghapus paket npm bernama left-pad (untuk menambahkan spasi di string). Akibatnya, ribuan proyek, termasuk Facebook dan Netflix, mengalami error!

## Sajian Data Pengguna JavaScript di Seluruh Dunia

- 98.7% Website: Menurut W3Techs (2023), hampir semua website menggunakan JavaScript.
- 65% Developer: Laporan Stack Overflow (2023) menyatakan JavaScript adalah bahasa paling populer di kalangan developer.
- 2.1 Juta Paket npm: npm (Node Package Manager) adalah repositori terbesar di dunia, dengan lebih dari 2 juta paket.
- #1 di GitHub: JavaScript menjadi bahasa dengan jumlah repositori terbanyak di GitHub (Octoverse 2022).
Permintaan Pasar: 72% perusahaan mencari talenta JavaScript menurut HackerRank (2023).

## Kesimpulan

JavaScript telah melakukan transformasi dari bahasa scripting yang sederhana menjadi suatu tools utama pengembangan web terlaris kalangan developer dunia. Kelebihan java script seperti fleksibilitas, ekosistem yang jelas , dan komunitas yang besar solid menjadikannya pilihan utama developer. Meskipun begitu kita harus fair bahwa java script tetap memiliki kekurangan seperti isu keamanan dan terbatasnya performa, solusi dan tools terus bermunculan. Menurut saya orang yang cocok menggunakan Javascript adalah semua orang karena ada salah stu kelebihan yang menurut saya cukup krusial yaitu komunitasnya, banyak orang yang sudah menggunakan Javascript sehingga mudah menemukan berbagai macam tutorial dan penjelasan mengapa terjadi error atau hal lainya serta untuk mahasiswa seperti saya ini merupakan suatu tools yang sangat baik sebagai investasi ilmu saya, Terima Kasih

## Tugas 1

Mencari Tau Tentang : 
1. Luas Persegi Panjang
2. Keseluruhan Lingkaran
3. Sudut Segitiga
4. Perbedaan Tanggal dalam Hari
5. Print Nama Dalam Hurf Besar 

Solusi disediakan untuk JavaScript dan TypeScript

### Luas Persegi Panjang

**JavaScript**

```Javascript
function areaOfRectangle(length, width) {
    return length * width;
}

console.log(areaOfRectangle(5, 3)); // Output: 15
```

**TypeScript**

```Typescript
function areaOfRectangle(length: number, width: number): number {
    return length * width;
}

console.log(areaOfRectangle(5, 3)); // Output: 15
```

### Keseluruhan Lingkaran

**JavaScript**

```Javascript
function circleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return { diameter, circumference, area };
}

console.log(circleProperties(5));
```

**TypeScript**

``` TypeScript
function circleProperties(radius: number): { diameter: number, circumference: number, area: number } {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return { diameter, circumference, area };
}

console.log(circleProperties(5));
```

### Sudut Segitiga 

**JavaScript**

``` Javascript
function thirdAngle(a, b) {
    return 180 - (a + b);
}

console.log(thirdAngle(80, 65)); // Output: 35
```

**TypeScript**

``` TypeScript
function thirdAngle(a: number, b: number): number {
    return 180 - (a + b);
}

console.log(thirdAngle(80, 65)); // Output: 35
```

### Perbedaan Tanggal dalam Hari 

**JavaScript**

```Javascript
function dateDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d2 - d1);
    return diff / (1000 * 60 * 60 * 24);
}

console.log(dateDifference('2024-03-19', '2024-03-21')); // Output: 2
```

**TypeScript**

``` **Typescript
function dateDifference(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d2.getTime() - d1.getTime());
    return diff / (1000 * 60 * 60 * 24);
}

console.log(dateDifference('2024-03-19', '2024-03-21')); // Output: 2
```

### Print Inisial dalam Huruf Besar

**JavaScript**

``` Javascript
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('');
}

console.log(getInitials('John Doe')); // Output: JD
```

**TypeScript**

``` **Typescript
function getInitials(name: string): string {
    return name
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('');
}

console.log(getInitials('John Doe')); // Output: JD
```