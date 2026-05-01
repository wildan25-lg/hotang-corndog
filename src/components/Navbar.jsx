import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

export default function Navbar() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/menu', label: 'Menu' },
    { to: '/tentang', label: 'Tentang' },
    { to: '/kontak', label: 'Kontak' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'var(--bg-card)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px var(--shadow-color)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.8rem' }}>🌭</span>
            <div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '1.4rem',
                color: 'var(--color-amber-500)',
                letterSpacing: '-0.02em',
              }}>Hotang</span>
              <span style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                display: 'block',
                lineHeight: 1,
                marginTop: '-2px',
              }}>Hotdog Kentang & Corndog</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  color: location.pathname === link.to ? 'var(--color-amber-500)' : 'var(--text-secondary)',
                  borderBottom: location.pathname === link.to ? '2px solid var(--color-amber-500)' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (location.pathname !== link.to) e.target.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={e => {
                  if (location.pathname !== link.to) e.target.style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Dark mode toggle */}
            {/* <button
              onClick={toggle}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '9999px',
                padding: '6px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s',
              }}
              aria-label="Toggle dark mode"
            >
              {isDark ? '☀️' : '🌙'}
              <span>{isDark ? 'Terang' : 'Gelap'}</span>
            </button> */}

            <Link
              to="/menu"
              style={{
                background: 'linear-gradient(135deg, var(--color-amber-500), var(--color-orange-500))',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile: theme + burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-controls">
            <button onClick={toggle} style={{ background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer' }}>
              {isDark ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMenuOpen(m => !m)}
              style={{
                background: 'none',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '6px 10px',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'none',
                fontSize: '1.1rem',
              }}
              className="burger-btn"
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: '1px solid var(--border-color)',
            padding: '1rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  textDecoration: 'none',
                  padding: '10px 16px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: location.pathname === link.to ? 'var(--color-amber-500)' : 'var(--text-secondary)',
                  borderRadius: '8px',
                  backgroundColor: location.pathname === link.to ? 'var(--bg-secondary)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/menu"
              style={{
                margin: '8px 0 4px',
                background: 'linear-gradient(135deg, var(--color-amber-500), var(--color-orange-500))',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              🛒 Pesan Sekarang
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
