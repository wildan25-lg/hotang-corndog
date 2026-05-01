import { useState } from 'react'

const categories = ['Semua', 'Hotang', 'Corndog', 'Paket Hemat']

const menuItems = [
  // Hotang
  { id: 1, cat: 'Hotang', emoji: '🥔', name: 'Hotang Original', desc: 'Hotdog kentang crispy dengan saus keju spesial. Tekstur luar renyah, dalam lembut!', price: 16000, badge: 'Bestseller', badgeColor: '#f59e0b', spicy: false, new: false },
  { id: 2, cat: 'Hotang', emoji: '🧀', name: 'Hotang Mozza', desc: 'Hotdog kentang dengan kejutan mozzarella meleleh di dalamnya. Premium banget!', price: 22000, badge: 'Bestseller', badgeColor: '#f59e0b', spicy: false, new: true },
  { id: 3, cat: 'Hotang', emoji: '🌶️', name: 'Hotang Pedas Manis', desc: 'Hotdog kentang dengan saus sambal manis khas rumahan. Buat yang suka pedes!', price: 14000, badge: 'Pedas', badgeColor: '#dc2626', spicy: true, new: false },
  // { id: 4, cat: 'Hotang', emoji: '🥓', name: 'Hotang Beef Spesial', desc: 'Hotdog kentang dengan sosis daging sapi premium, lebih padat dan gurih.', price: 16000, badge: 'Premium', badgeColor: '#b45309', spicy: false, new: false },

  // Corndog
  { id: 5, cat: 'Corndog', emoji: '🌽', name: 'Corndog Classic', desc: 'Corndog original dengan balutan tepung jagung renyah. Crispy sampai gigitan terakhir!', price: 15000, badge: 'Favorit', badgeColor: '#ea580c', spicy: false, new: false },
  { id: 6, cat: 'Corndog', emoji: '🧀', name: 'Corndog Mozza', desc: 'Corndog dengan isian mozzarella stretchy di dalam sosis. Double keju double nikmat!', price: 19000, badge: 'Bestseller', badgeColor: '#f59e0b', spicy: false, new: true },
  { id: 7, cat: 'Corndog', emoji: '🌶️', name: 'Corndog Spicy', desc: 'Corndog dengan lapisan bumbu pedas yang bikin ketagihan. Awas kebanyakan!', price: 15000, badge: 'Pedas 🔥', badgeColor: '#dc2626', spicy: true, new: false },

  // Minuman
  // { id: 8, cat: 'Minuman', emoji: '🥤', name: 'Es Teh Manis', desc: 'Teh manis segar, cocok menemani hotang atau corndog favorit kamu.', price: 5000, badge: null, badgeColor: null, spicy: false, new: false },
  // { id: 9, cat: 'Minuman', emoji: '🍋', name: 'Es Lemon Tea', desc: 'Perpaduan teh dengan perasan lemon segar. Menyegarkan!', price: 7000, badge: null, badgeColor: null, spicy: false, new: false },
  // { id: 10, cat: 'Minuman', emoji: '🥛', name: 'Susu Coklat', desc: 'Susu coklat dingin yang manis dan creamy. Cocok untuk semua usia.', price: 8000, badge: null, badgeColor: null, spicy: false, new: false },

  // Paket Hemat
  { id: 11, cat: 'Paket Hemat', emoji: '🎁', name: 'Paket Duo', desc: '1 Hotang Original + 1 Corndog Classic. Hemat Rp 5.000!', price: 26000, badge: 'Hemat', badgeColor: '#16a34a', spicy: false, new: false },
  { id: 12, cat: 'Paket Hemat', emoji: '👨‍👩‍👧‍👦', name: 'Paket Keluarga', desc: '3 Hotang Original + 2 Corndog Classic. Pas buat nongkrong bareng!', price: 70000, badge: 'Best Value', badgeColor: '#16a34a', spicy: false, new: false },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = menuItems.filter(item => {
    const matchCat = activeCategory === 'Semua' || item.cat === activeCategory
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

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
              <div key={item.id} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 32px var(--shadow-color)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Emoji area */}
                <div style={{
                  background: 'var(--bg-secondary)',
                  padding: '2rem',
                  textAlign: 'center',
                  fontSize: '4rem',
                  borderBottom: '1px solid var(--border-color)',
                  position: 'relative',
                }}>
                  {item.emoji}
                  {item.new && (
                    <div style={{
                      position: 'absolute', top: '12px', right: '12px',
                      background: '#dc2626',
                      color: 'white',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      fontFamily: 'var(--font-body)',
                    }}>NEW</div>
                  )}
                  {item.spicy && (
                    <div style={{
                      position: 'absolute', top: '12px', left: '12px',
                      background: '#ea580c',
                      color: 'white',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      fontFamily: 'var(--font-body)',
                    }}>🌶️ PEDAS</div>
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
                      padding: '2px 10px',
                      borderRadius: '9999px',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-body)',
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
                        padding: '7px 16px',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-body)',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      + Pesan
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
