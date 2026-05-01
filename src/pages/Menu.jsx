import { useState } from 'react'

const categories = ['Semua', 'Hotang', 'Corndog', 'Paket Hemat']

// Real food photos from Unsplash/Pexels (free to use)
const menuItems = [
  // Hotang
  {
    id: 1, cat: 'Hotang',
    img: 'https://i.pinimg.com/1200x/e0/9c/28/e09c280ae3ccf5f91bac39eaedbc107b.jpg',
    name: 'Hotang Original',
    desc: 'Hotdog kentang crispy dengan saus keju spesial. Tekstur luar renyah, dalam lembut!',
    price: 16000, badge: 'Bestseller', badgeColor: '#f59e0b', spicy: false, isNew: false
  },
  {
    id: 2, cat: 'Hotang',
    img: 'https://i.pinimg.com/1200x/07/2b/36/072b3627ae49d3d14e0b46cce0c534c7.jpg',
    name: 'Hotang Mozza',
    desc: 'Hotdog kentang dengan kejutan mozzarella meleleh di dalamnya. Premium banget!',
    price: 22000, badge: 'Premium', badgeColor: '#a855f7', spicy: false, isNew: false
  },
  {
    id: 3, cat: 'Hotang',
    img: 'https://i.pinimg.com/1200x/22/01/7f/22017f90be7581d34d29a3643618acf4.jpg',
    name: 'Hotang Pedas Manis',
    desc: 'Hotdog kentang dengan saus sambal manis khas rumahan. Buat yang suka pedes!',
    price: 14000, badge: 'Pedas 🌶️', badgeColor: '#dc2626', spicy: true, isNew: false
  },

  // Corndog
  {
    id: 5, cat: 'Corndog',
    img: 'https://i.pinimg.com/1200x/1e/d2/31/1ed231a2000ad031ec5b34aedc3ef15d.jpg',
    name: 'Corndog Classic',
    desc: 'Corndog original dengan balutan tepung jagung renyah. Crispy sampai gigitan terakhir!',
    price: 15000, badge: 'Favorit', badgeColor: '#ea580c', spicy: false, isNew: false
  },
  {
    id: 6, cat: 'Corndog',
    img: 'https://i.pinimg.com/1200x/fe/a1/b2/fea1b271ee143b60781034416b56ebe8.jpg',
    name: 'Corndog Mozza',
    desc: 'Corndog dengan isian mozzarella stretchy di dalam sosis. Double keju double nikmat!',
    price: 19000, badge: 'Bestseller', badgeColor: '#f59e0b', spicy: false, isNew: false
  },
  {
    id: 7, cat: 'Corndog',
    img: 'https://i.pinimg.com/1200x/b5/29/a0/b529a028d704dc0b396e10b1e3a7bb95.jpg',
    name: 'Corndog Spicy',
    desc: 'Corndog dengan lapisan bumbu pedas yang bikin ketagihan. Awas kebanyakan!',
    price: 15000, badge: 'Pedas 🔥', badgeColor: '#dc2626', spicy: true, isNew: false
  },

  // Paket Hemat
  {
    id: 11, cat: 'Paket Hemat',
    img: 'https://i.pinimg.com/736x/e7/f2/77/e7f277c4d7830d73c628feaa766332bb.jpg',
    name: 'Paket Duo',
    desc: '1 Hotang Original + 1 Corndog Classic. Hemat Rp 5.000!',
    price: 26000, badge: 'Hemat', badgeColor: '#16a34a', spicy: false, isNew: false
  },
  {
    id: 12, cat: 'Paket Hemat',
    img: 'https://i.pinimg.com/736x/94/41/6b/94416bb063a671a8a38e5b799b8ae76a.jpg',
    name: 'Paket Keluarga',
    desc: '3 Hotang Original + 2 Corndog Classic. Pas buat nongkrong bareng!',
    price: 70000, badge: 'Best Value', badgeColor: '#16a34a', spicy: false, isNew: false
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch] = useState('')
  const [imgErrors, setImgErrors] = useState({})

  const filtered = menuItems.filter(item => {
    const matchCat = activeCategory === 'Semua' || item.cat === activeCategory
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  // Fallback gradient per category if image fails to load
  const fallbackBg = {
    'Hotang': 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
    'Corndog': 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
    'Paket Hemat': 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
  }

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <div style={{
        padding: '4rem 1.5rem 2rem',
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '200px',
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--color-amber-500)' }}>
          Pilih favoritmu
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          color: 'var(--text-primary)',
          margin: '8px 0 12px',
        }}>
          Menu Lengkap Hotang
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
          Semua dibuat segar, crispy, dan penuh cita rasa 🔥
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        {/* Search */}
        <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto 2rem' }}>
          <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem' }}>🔍</span>
          <input
            type="text"
            placeholder="Cari menu favorit kamu..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--color-amber-400)'}
            onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
          />
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, var(--color-amber-500), var(--color-orange-500))'
                  : 'var(--bg-card)',
                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(245,158,11,0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p>Menu tidak ditemukan. Coba kata kunci lain.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(item => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px var(--shadow-color)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Photo area */}
                <div style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden',
                  background: imgErrors[item.id] ? fallbackBg[item.cat] : 'var(--bg-secondary)',
                }}>
                  {!imgErrors[item.id] && (
                    <img
                      src={item.img}
                      alt={item.name}
                      onError={() => setImgErrors(prev => ({ ...prev, [item.id]: true }))}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  )}

                  {/* Gradient overlay at bottom for text legibility */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '80px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                    pointerEvents: 'none',
                  }} />

                  {/* Spicy badge - top left */}
                  {item.spicy && (
                    <div style={{
                      position: 'absolute', top: '12px', left: '12px',
                      background: '#dc2626',
                      backdropFilter: 'blur(4px)',
                      color: 'white',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontFamily: 'var(--font-body)',
                      boxShadow: '0 2px 8px rgba(220,38,38,0.4)',
                    }}>🌶️ PEDAS</div>
                  )}

                  {/* New badge - top right */}
                  {item.isNew && (
                    <div style={{
                      position: 'absolute', top: '12px', right: '12px',
                      background: '#2563eb',
                      color: 'white',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontFamily: 'var(--font-body)',
                    }}>NEW</div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem' }}>
                  {item.badge && (
                    <div style={{
                      display: 'inline-block',
                      backgroundColor: item.badgeColor,
                      color: 'white',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.03em',
                    }}>{item.badge}</div>
                  )}

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--text-primary)',
                    margin: '0 0 6px',
                  }}>{item.name}</h3>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    margin: '0 0 1rem',
                  }}>{item.desc}</p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: '1.25rem',
                      color: 'var(--color-amber-500)',
                    }}>
                      Rp {item.price.toLocaleString('id-ID')}
                    </span>
                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20Hotang!%20Saya%20ingin%20pesan%20${encodeURIComponent(item.name)}%20Rp%20${item.price.toLocaleString()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-amber-500), var(--color-orange-500))',
                        color: 'white',
                        padding: '8px 18px',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-body)',
                        transition: 'opacity 0.2s, transform 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        boxShadow: '0 4px 12px rgba(245,158,11,0.3)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1.05)' }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)' }}
                    >
                      🛒 Pesan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WA CTA */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          textAlign: 'center',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', margin: '0 0 1rem', fontSize: '0.95rem' }}>
            Mau pesan banyak atau ada pertanyaan? Hubungi kami langsung!
          </p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#25D366',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontWeight: 700,
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
          }}>
            💬 Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  )
}
