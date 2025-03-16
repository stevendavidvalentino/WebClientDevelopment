# Dibuat Menggunakan JavaScript & TypeScript

Repositori ini berisi dua latihan: 
1. Konversi Suhu 
2. Manajemen Repositori Git 

Solusi disediakan dalam JavaScript dan TypeScript.

## Daftar Isi

- [Latihan 1: Konversi Suhu] (#latihan-1-konversi-suhu-dan-tugas-lainnya)
    - [Konversi Fahrenheit ke Celcius] (#fahrenheit-to-celsius-conversion)
    - [Konversi Sentimeter ke Kilometer] (#konversi-sentimeter-ke-kilometer)
    - [Pemeriksaan Angka Genap/Ganjil] (#pemeriksaan-angka-ganjil)
    - [Hapus Kemunculan Pertama Substring] (#hapus-kemunculan-pertama-substring)
    - [Pemeriksaan Palindrom](#palindrome-check)
    
- [Latihan 2: Manajemen Repositori Git] (#latihan-2-manajemen-repositori-git)

- ## Latihan 1: Konversi Suhu

 konversi suhu, konversi unit, dan manipulasi string.  Solusi disediakan untuk JavaScript dan TypeScript

### Konversi Fahrenheit ke Celcius

** Javascript:**

```javascript
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Contoh penggunaan
const tempF = 100; // Masukan suhu dalam Fahrenheit
const tempC = fahrenheitToCelsius(tempF);
console.log(`Suhu dalam Celcius: ${tempC.toFixed(2)}°C`);
```

**TipeScript:**

```typescript
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

// Contoh penggunaan
const tempF: number = 100; // Masukan suhu dalam Fahrenheit
const tempC: number = fahrenheitToCelsius(tempF);
console.log(`Suhu dalam Celcius: ${tempC.toFixed(2)}°C`);
```

### Konversi Centimeter ke Kilometer

**Skrip JavaScript:**

```javascript
function cmToKm(cm) {
    return cm / 100000;
}

function kmToCm(km) {
    return km * 100000;
}

// Contoh penggunaan
console.log(`100000 cm = ${kmToKm(100000)} km`);
console.log(`1 km = ${kmToCm(1)} cm`);
```

**Ketikan skrip:**

``` tipeScript
function cmToKm(cm: number): number {
    return cm / 100000;
}

function kmToCm(km: number): number {
    return km * 100000;
}

// Contoh penggunaan
console.log(`100000 cm = ${kmToKm(100000)} km`);
console.log(`1 km = ${kmToCm(1)} cm`);
```

### Pemeriksaan Angka Genap/Ganjil

**JavaScript:**

``` javascript
function isEven(n) {
    return n % 2 === 0;
}

// Contoh penggunaan
console.log(`1000 isEven: ${isEven(1000)}`); // True
console.log(`1001 isEven: ${isEven(1001)}`); // False
```

**TipeScript:**

``` tipeScript
function isEven(n: number): boolean {
    return n % 2 === 0;
}

// Contoh penggunaan
console.log(`1000 isEven: ${isEven(1000)}`); // True
console.log(`1001 isEven: ${isEven(1001)}`); // False
```

### Hapus Kemunculan Pertama Substring

**JavaScript:**

```javascript
function hapusKemunculanPertama(string, searchString) {
    return string.replace(searchString, '', 1);
}

// Contoh penggunaan
const hasil = removeFirstOccurrence(“Hello world”, “l”);
console.log(hasil); // “Halo dunia”
```

**TipeScript:**

``` **Typescript
function hapusKejadianPertama(string: string, searchString: string): string {
    return string.replace(searchString, '', 1);
}

// Contoh penggunaan
const hasil: string = removeFirstOccurrence(“Hello world”, “l”);
console.log(hasil); // “Halo dunia”
```

### Pemeriksaan Palindrom

**JavaScript:**

``` javascript
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// Contoh penggunaan
console.log(``'madam' is palindrome: ${isPalindrome('madam')}`); // True
```

**TipeScript:**

``` **typescript
function isPalindrome(s: string): boolean {
    return s === s.split('').reverse().join('');
}

// Contoh penggunaan
console.log(`'nyonya' adalah palindrom: ${isPalindrome('nyonya')}`); // True
```

## Latihan 2: Manajemen Repositori Git

Latihan ini mendemonstrasikan perintah-perintah dasar Git untuk mengelola repositori.

### 1. Inisialisasi Repositori

```bash
mkdir my_repository
cd my_repository
git init
```

### 2. Melakukan Perubahan dan Melakukan Komit

``` bash
echo “Hello World” > file.txt
git tambahkan file.txt
git commit -m “Menambahkan file.txt dengan konten Hello World”

### 3. Membuat Cabang Baru dan Menukar Cabang

```bash
git checkout -b new_branch
echo “Perubahan di cabang baru” >> file.txt
git tambahkan file.txt
git commit -m “Menambahkan perubahan di new_branch”
git checkout main
```

### 4. Membuat Perubahan dan Melakukan Komit di Cabang Baru

```bash
git checkout new_branch
echo “Perubahan tambahan” >> file.txt
git tambahkan file.txt
git commit -m “Menambahkan perubahan tambahan di new_branch”
```

### 5. Membuat permintaan penarikan (pull request)

``` bash
# Setelah mendorong ke GitHub
# Membuat permintaan pull dari new_branch ke main
```

Perintah-perintah ini menyediakan alur kerja dasar untuk mengelola repositori Git. Ingatlah untuk menyesuaikan perintah-perintah ini dengan kebutuhan spesifik Anda.
