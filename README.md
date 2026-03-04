# BPS Microdata E-Commerce Landing Page

Modern, responsive landing page untuk platform penjualan microdata BPS (Badan Pusat Statistik).

## Fitur Utama

### 1. Hero Section
- Full Navy background dengan gradient modern
- Headline fokus pada "Data Statistik Resmi & Terpercaya"
- Badge compliance PP Nomor 13 Tahun 2024
- CTA buttons untuk eksplorasi katalog dan konsultasi

### 2. Catalog Section
- Filter bar horizontal dengan:
  - Search input untuk pencarian produk
  - Level filter (Nasional, Provinsi, Kota, Desa)
  - Category tabs (Semua, Microdata, Publikasi, Peta Digital)
- Grid cards responsif dengan informasi lengkap
- Support untuk produk gratis (Rp 0) dengan visual distinction

### 3. Product Types
- **Microdata**: Dengan opsi fullset atau pilih variabel spesifik
- **Publikasi Elektronik**: PDF tanpa watermark
- **Peta Digital Wilkerstat**: File SHP berbagai level

### 4. Special Features
- Modal pemilihan variabel spesifik untuk microdata
- Floating cart button dengan counter
- Metadata links (Detail, Kamus Data, Sampel, Kuesioner)
- Consultation banner dengan CTA
- Responsive design untuk semua device

## Tech Stack

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Lucide Icons
- Google Fonts (Inter)

## Struktur File

```
├── index.html          # Main HTML file
├── app.js             # JavaScript logic & data
└── README.md          # Documentation
```

## Cara Menggunakan

1. Buka `index.html` di browser modern
2. Tidak perlu instalasi dependencies (menggunakan CDN)
3. Untuk production, disarankan download Tailwind CSS dan Lucide Icons secara lokal

## Customization

### Mengubah Warna
Edit CSS variables di `index.html`:
```css
:root {
    --navy-bps: #1e3a8a;
    --navy-dark: #1e293b;
    --navy-light: #3b82f6;
}
```

### Menambah Produk
Edit array `products` di `app.js`:
```javascript
{
    id: 'unique-id',
    type: 'microdata|publication|map',
    category: 'social|economic|publication|map',
    title: 'Product Title',
    description: 'Product Description',
    level: 'national|province|city|village',
    price: 1000000,
    isFree: false,
    icon: 'lucide-icon-name',
    badge: 'Badge Text',
    // ... additional fields
}
```

### Integrasi Backend (Google Apps Script)
File `app.js` sudah siap untuk integrasi dengan Google Apps Script:
- Function `addToCart()` dapat dimodifikasi untuk mengirim data ke backend
- Cart data tersimpan di variable `cart` yang dapat di-sync dengan server

## Compliance

Desain mengikuti:
- PP Nomor 13 Tahun 2024 tentang PNBP BPS
- Brand identity pst.bps.go.id (Navy BPS)
- Best practices UI/UX untuk e-commerce

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Untuk penggunaan internal BPS (Badan Pusat Statistik)
