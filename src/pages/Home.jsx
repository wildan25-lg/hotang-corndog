import { Link } from 'react-router-dom'

const menuHighlights = [
  {
    emoji: '🥔',
    name: 'Hotang Original',
    desc: 'Hotdog kentang crispy dengan saus keju spesial',
    price: 'Rp 12.000',
    badge: 'Bestseller',
    badgeColor: '#f59e0b',
    bg: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    bgDark: 'linear-gradient(135deg, #44403c, #292524)',
  },
  {
    emoji: '🌽',
    name: 'Corndog Classic',
    desc: 'Corndog renyah dengan balutan tepung jagung premium',
    price: 'Rp 14.000',
    badge: 'Favorit',
    badgeColor: '#ea580c',
    bg: 'linear-gradient(135deg, #ffedd5, #fed7aa)',
    bgDark: 'linear-gradient(135deg, #44403c, #292524)',
  },
  {
    emoji: '🧀',
    name: 'Hotang Mozza',
    desc: 'Hotang premium dengan mozzarella meleleh di dalam',
    price: 'Rp 18.000',
    badge: 'Baru!',
    badgeColor: '#dc2626',
    bg: 'linear-gradient(135deg, #fee2e2, #fecaca)',
    bgDark: 'linear-gradient(135deg, #44403c, #292524)',
  },
]

const testimonials = [
  { name: 'Sari W.', text: 'Rasanya enak banget! Kentangnya crispy, sosisnya juicy. Langsung jadi favorit keluarga kami 🥰', stars: 5, avatar: '👩' },
  { name: 'Budi R.', text: 'Harga terjangkau, porsi pas, rasa mantap. Hotang memang the best jajan pinggir jalan!', stars: 5, avatar: '👨' },
  { name: 'Dina K.', text: 'Corndognya juara! Balutan tepung jagungnya renyah, isinya enak. Recommended banget buat snack sore.', stars: 5, avatar: '👩‍🦱' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 1.5rem 4rem',
        background: 'var(--bg-primary)',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '45vw', height: '45vw', maxWidth: '480px', maxHeight: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '-8%',
          width: '40vw', height: '40vw', maxWidth: '400px', maxHeight: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '9999px',
              padding: '6px 16px',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--color-amber-600)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              <span className="animate-spin-slow" style={{ display: 'inline-block' }}>⭐</span>
              UMKM Camilan Pilihan
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              color: 'var(--text-primary)',
              margin: '0 0 1rem',
            }}>
              Krispy,{' '}
              <em style={{ color: 'var(--color-amber-500)', fontStyle: 'italic' }}>Gurih</em>,
              <br />& Nagih!
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '420px',
            }}>
              Hotang hadir dengan <strong>Hotdog Kentang</strong> crispy dan <strong>Corndog</strong> premium. Dibuat segar setiap hari dari bahan pilihan berkualitas.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/menu" style={{
                background: 'linear-gradient(135deg, var(--color-amber-500), var(--color-orange-500))',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 700,
                fontFamily: 'var(--font-body)',
                boxShadow: '0 6px 20px rgba(245,158,11,0.35)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(245,158,11,0.45)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(245,158,11,0.35)' }}
              >
                🛒 Lihat Menu
              </Link>
              <Link to="/tentang" style={{
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                padding: '14px 28px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                border: '1px solid var(--border-color)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-amber-400)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                Tentang Kami →
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { num: '500+', label: 'Pelanggan Puas' },
                { num: '4.9★', label: 'Rating Rata-rata' },
                { num: '3 Varian', label: 'Menu Unggulan' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.5rem', color: 'var(--color-amber-500)' }}>{stat.num}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} className="hero-visual animate-scale-in delay-200">
            {/* Main circle */}
            <div style={{
              width: '320px', height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 35%, rgba(245,158,11,0.25), rgba(234,88,12,0.1) 60%, transparent)',
              border: '2px dashed var(--border-color)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <span style={{ fontSize: '8rem', lineHeight: 1 }} className="animate-float">🌭</span>

              {/* Floating badges */}
              <div className="animate-float2" style={{
                position: 'absolute', top: '-10px', right: '-10px',
                backgroundColor: 'var(--color-amber-500)',
                color: 'white',
                borderRadius: '9999px',
                padding: '8px 16px',
                fontSize: '0.8rem',
                fontWeight: 700,
                fontFamily: 'var(--font-body)',
                boxShadow: '0 4px 14px rgba(245,158,11,0.4)',
                whiteSpace: 'nowrap',
              }}>
                🔥 Lagi Hits!
              </div>

              <div style={{
                position: 'absolute', bottom: '10px', left: '-20px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '10px 16px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-body)',
                boxShadow: '0 4px 20px var(--shadow-color)',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ fontSize: '1.4rem' }}>⭐</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.85rem' }}>4.9 / 5.0</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>500+ ulasan</div>
                </div>
              </div>

              <div style={{
                position: 'absolute', top: '60%', right: '-40px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '10px 16px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-body)',
                boxShadow: '0 4px 20px var(--shadow-color)',
              }}>
                <span style={{ fontSize: '1.2rem' }}>🌽</span>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.8rem' }}>Corndog</div>
                <div style={{ color: 'var(--color-amber-500)', fontSize: '0.75rem', fontWeight: 700 }}>Rp 14.000</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
            .hero-visual { display: none !important; }
          }
        `}</style>
      </section>

      {/* Marquee ticker */}
      <div style={{
        backgroundColor: 'var(--color-amber-500)',
        padding: '12px 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'white', padding: '0 2rem' }}>
              🌭 Hotang Original &nbsp;•&nbsp; 🌽 Corndog Crispy &nbsp;•&nbsp; 🧀 Hotang Mozza &nbsp;•&nbsp; 🥔 Hotdog Kentang Premium &nbsp;•&nbsp; ⭐ Rating 4.9 &nbsp;•&nbsp; 🔥 Lagi Hits! &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Menu highlights */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--color-amber-500)' }}>Yang paling dicari</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-primary)', margin: '8px 0' }}>
              Menu Unggulan Kami
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
              Dibuat segar setiap hari, tanpa pengawet, penuh cita rasa
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {menuHighlights.map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '1.75rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px var(--shadow-color)'
                  e.currentTarget.style.borderColor = item.badgeColor
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--border-color)'
                }}
              >
                {/* Background accent */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '100px', height: '100px',
                  background: `radial-gradient(circle, ${item.badgeColor}20, transparent 70%)`,
                  borderRadius: '0 20px 0 100%',
                }} />

                {/* Badge */}
                <div style={{
                  display: 'inline-flex',
                  backgroundColor: item.badgeColor,
                  color: 'white',
                  borderRadius: '9999px',
                  padding: '3px 12px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-body)',
                  marginBottom: '1rem',
                  letterSpacing: '0.05em',
                }}>
                  {item.badge}
                </div>

                <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>{item.emoji}</div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  color: 'var(--text-primary)',
                  margin: '0 0 8px',
                }}>
                  {item.name}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: '0 0 1.25rem',
                }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '1.4rem',
                    color: item.badgeColor,
                  }}>
                    {item.price}
                  </span>
                  <Link to="/menu" style={{
                    background: item.badgeColor,
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                  }}>
                    Pesan →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/menu" style={{
              color: 'var(--color-amber-500)',
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.95rem',
              borderBottom: '2px solid var(--color-amber-500)',
              paddingBottom: '2px',
            }}>
              Lihat semua menu lengkap →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hotang */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-primary)', margin: '0 0 12px' }}>
              Kenapa Pilih Hotang?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🥔', title: 'Kentang Segar', desc: 'Dipilih dari kentang berkualitas tinggi, diproses segar setiap hari tanpa bahan pengawet' },
              { icon: '🔥', title: 'Digoreng Fresh', desc: 'Setiap pesanan digoreng langsung saat itu juga agar tetap crispy dan panas' },
              { icon: '💰', title: 'Harga Terjangkau', desc: 'Mulai Rp 12.000 saja! Camilan premium dengan harga kantong mahasiswa' },
              { icon: '🏆', title: 'Sudah Terpercaya', desc: '500+ pelanggan puas dengan rating 4.9 bintang di berbagai platform' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--color-amber-500)' }}>Kata mereka</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-primary)', margin: '8px 0' }}>
              Pelanggan Bicara
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '1.75rem',
                position: 'relative',
              }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--color-amber-300)', marginBottom: '12px', lineHeight: 1, fontFamily: 'serif' }}>"</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 1.25rem' }}>
                  {t.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '2rem' }}>{t.avatar}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: 'var(--color-amber-500)', fontSize: '0.8rem' }}>{'⭐'.repeat(t.stars)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(135deg, var(--color-amber-500) 0%, var(--color-orange-600) 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', top: '-40px', right: '-40px',
          fontSize: '12rem', opacity: 0.1, lineHeight: 1,
          pointerEvents: 'none', userSelect: 'none',
        }}>🌭</div>
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', margin: '0 0 16px' }}>
            Lapar? Yuk Pesan Sekarang!
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', margin: '0 0 2rem', lineHeight: 1.6 }}>
            Hotang siap hadir di depan pintu kamu. Crispy, gurih, dan nagih!
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              color: 'var(--color-orange-600)',
              padding: '14px 28px',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 700,
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              💬 WhatsApp Kami
            </a>
            <Link to="/menu" style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              border: '2px solid rgba(255,255,255,0.7)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              🛒 Lihat Menu →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
