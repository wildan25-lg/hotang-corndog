import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '3rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontSize: '2rem' }}>🌭</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--color-amber-500)' }}>
                  Hotang
                </div>
                <div style={{ fontFamily: 'var(--font-hand)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  Hotdog Kentang & Corndog
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>
              Camilan crispy premium dari kentang asli dan sosis pilihan. Cocok untuk segala momen!
            </p>
            {/* <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {['📸', '💬', '🎵'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', textDecoration: 'none',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >{icon}</a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
              Navigasi
            </h4>
            {[
              { to: '/', label: 'Beranda' },
              { to: '/menu', label: 'Menu Kami' },
              { to: '/tentang', label: 'Tentang Kami' },
              { to: '/kontak', label: 'Hubungi Kami' },
            ].map(link => (
              <Link key={link.to} to={link.to} style={{
                display: 'block', color: 'var(--text-muted)', textDecoration: 'none',
                fontSize: '0.875rem', fontFamily: 'var(--font-body)',
                marginBottom: '8px', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-amber-500)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                → {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
              Kontak
            </h4>
            {[
              { icon: '📍', text: 'Jl. Rambipuji, Kebonsari, Balung Lor, Kec. Balung, Kabupaten Jember' },
              { icon: '📞', text: '0812-3456-7890' },
              { icon: '📧', text: 'hotang@email.com' },
              { icon: '⏰', text: 'Buka: 17.00 – 22.00 WIB' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', margin: 0 }}>
            © 2026 <strong style={{ color: 'var(--color-amber-500)' }}>Hotang</strong>
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-body)', margin: 0 }}>
            UMKM Indonesia 🇮🇩
          </p>
        </div>
      </div>
    </footer>
  )
}
