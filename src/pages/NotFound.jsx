import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      paddingTop: '64px',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div>
        <div style={{ fontSize: '6rem', marginBottom: '1rem' }} className="animate-float">🌭</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          color: 'var(--color-amber-500)',
          margin: '0 0 0.5rem',
          lineHeight: 1,
        }}>404</h1>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.5rem',
          color: 'var(--text-primary)',
          margin: '0 0 1rem',
        }}>Halaman Tidak Ditemukan</h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--text-muted)',
          marginBottom: '2rem',
          maxWidth: '360px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
        }}>
          Waduh, sepertinya halaman yang kamu cari sudah habis seperti hotang di jam makan siang! 😅
        </p>
        <Link to="/" style={{
          background: 'linear-gradient(135deg, var(--color-amber-500), var(--color-orange-500))',
          color: 'white',
          padding: '14px 28px',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.95rem',
          boxShadow: '0 6px 20px rgba(245,158,11,0.35)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          🏠 Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
