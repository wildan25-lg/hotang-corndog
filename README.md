# 🌭 Hotang Landing Page

Landing page profesional untuk UMKM **Hotang** (Hotdog Kentang & Corndog).

## 🛠️ Tech Stack

- **React 18** — UI library
- **React Router DOM 6** — Routing (SPA)
- **Tailwind CSS v4** — Styling (dengan `@tailwindcss/vite` plugin)
- **Vite** — Build tool

## 📁 Struktur Proyek

```
hotang-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigasi dengan dark mode toggle
│   │   └── Footer.jsx       # Footer dengan info kontak
│   ├── pages/
│   │   ├── Home.jsx         # Halaman utama / beranda
│   │   ├── Menu.jsx         # Halaman menu dengan filter & search
│   │   ├── Tentang.jsx      # Halaman tentang kami
│   │   ├── Kontak.jsx       # Halaman kontak + form WA
│   │   └── NotFound.jsx     # Halaman 404
│   ├── App.jsx              # Root component + routing
│   ├── ThemeContext.jsx      # Dark mode context
│   ├── index.css            # CSS + Tailwind v4 @theme
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js           # Konfigurasi Vite + Tailwind v4
└── README.md
```

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka http://localhost:5173

### 3. Build untuk production

```bash
npm run build
```

### 4. Preview build

```bash
npm run preview
```

## 🌙 Fitur Dark Mode

Dark mode otomatis mengikuti preferensi sistem, dan bisa diubah manual lewat tombol di Navbar. Preferensi disimpan di `localStorage`.

## 📱 Halaman & Routing

| Route | Halaman |
|-------|---------|
| `/` | Beranda — Hero, menu highlight, testimoni, CTA |
| `/menu` | Menu lengkap — filter kategori, search, WA order |
| `/tentang` | Tentang Kami — cerita, timeline, nilai, tim |
| `/kontak` | Kontak — info kontak, form kirim pesan via WA |
| `*` | 404 Not Found |

## ✏️ Kustomisasi

- **Nomor WA**: Ganti `6281234567890` di seluruh file dengan nomor asli
- **Harga menu**: Edit array `menuItems` di `src/pages/Menu.jsx`
- **Warna brand**: Edit `--color-brand-*` di `src/index.css`
- **Nama & deskripsi**: Edit teks langsung di setiap page

## 📦 Tailwind CSS v4 Config

Konfigurasi Tailwind v4 menggunakan `@theme` block langsung di CSS (bukan `tailwind.config.js`):

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-amber-500: #f59e0b;
  --font-display: "Playfair Display", serif;
  /* ... */
}
```

Plugin Vite di `vite.config.js`:
```js
import tailwindcss from '@tailwindcss/vite'
// plugins: [react(), tailwindcss()]
```
