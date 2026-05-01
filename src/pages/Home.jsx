import { Link } from 'react-router-dom'

// ─── Real food photo URLs (Unsplash, free to use) ───────────────────────────
const PHOTOS = {
  hotangOriginal: 'https://i.pinimg.com/1200x/e0/9c/28/e09c280ae3ccf5f91bac39eaedbc107b.jpg',
  corndogClassic: 'https://i.pinimg.com/1200x/1e/d2/31/1ed231a2000ad031ec5b34aedc3ef15d.jpg',
  hotangMozza:    'https://i.pinimg.com/1200x/07/2b/36/072b3627ae49d3d14e0b46cce0c534c7.jpg',
  heroBg:         'https://images.unsplash.com/photo-1619881590738-a111d176d906?w=900&q=75',
  potato:         'https://i.pinimg.com/736x/1a/32/94/1a3294f8f8a62dfa2c37a99143f4217e.jpg',
  frying:         'https://i.pinimg.com/1200x/d9/9d/0e/d99d0e1114ff3b051bbd9f22b5af6790.jpg',
  money:          'https://i.pinimg.com/736x/30/a4/f7/30a4f7679033eb03fbb27134e1c6d067.jpg',
  rating:         'https://i.pinimg.com/1200x/e1/c5/15/e1c5157514f9a5819b4e9ec0ce25c5cd.jpg',
  avatarF1:       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  avatarM1:       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  avatarF2:       'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80',
}

const menuHighlights = [
  {
    img: PHOTOS.hotangOriginal,
    name: 'Hotang Original',
    desc: 'Hotdog kentang crispy dengan saus keju spesial',
    price: 'Rp 16.000',
    badge: 'Bestseller',
    badgeColor: '#f59e0b',
  },
  {
    img: PHOTOS.corndogClassic,
    name: 'Corndog Classic',
    desc: 'Corndog renyah dengan balutan tepung jagung premium',
    price: 'Rp 15.000',
    badge: 'Favorit',
    badgeColor: '#ea580c',
  },
  {
    img: PHOTOS.hotangMozza,
    name: 'Hotang Mozza',
    desc: 'Hotang premium dengan mozzarella meleleh di dalam',
    price: 'Rp 22.000',
    badge: 'Premium',
    badgeColor: '#a855f7',
  },
]

const whyItems = [
  {
    img: PHOTOS.potato,
    title: 'Kentang Segar',
    desc: 'Dipilih dari kentang berkualitas tinggi, diproses segar setiap hari tanpa bahan pengawet',
  },
  {
    img: PHOTOS.frying,
    title: 'Digoreng Fresh',
    desc: 'Setiap pesanan digoreng langsung saat itu juga agar tetap crispy dan panas',
  },
  {
    img: PHOTOS.money,
    title: 'Harga Terjangkau',
    desc: 'Mulai Rp 12.000 saja! Camilan premium dengan harga kantong mahasiswa',
  },
  {
    img: PHOTOS.rating,
    title: 'Sudah Terpercaya',
    desc: '500+ pelanggan puas dengan rating 4.9 bintang di berbagai platform',
  },
]

const testimonials = [
  {
    avatar: PHOTOS.avatarF1,
    name: 'Sari W.',
    text: 'Rasanya enak banget! Kentangnya crispy, sosisnya juicy. Langsung jadi favorit keluarga kami 🥰',
    stars: 5,
  },
  {
    avatar: PHOTOS.avatarM1,
    name: 'Budi R.',
    text: 'Harga terjangkau, porsi pas, rasa mantap. Hotang memang the best jajan pinggir jalan!',
    stars: 5,
  },
  {
    avatar: PHOTOS.avatarF2,
    name: 'Dina K.',
    text: 'Corndognya juara! Balutan tepung jagungnya renyah, isinya enak. Recommended banget buat snack sore.',
    stars: 5,
  },
]

// ─── Reusable image with graceful fallback ────────────────────────────────────
function FoodImg({ src, alt, style, fallbackBg = '#f59e0b22' }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={e => {
        e.currentTarget.style.display = 'none'
        e.currentTarget.parentElement.style.background = fallbackBg
      }}
      style={{ display: 'block', ...style }}
    />
  )
}

export default function Home() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
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

        <div
          style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="hero-grid"
        >
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

          {/* Right: Hero food photo visual */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} className="hero-visual animate-scale-in delay-200">
            {/* Main circle with real photo */}
            <div style={{
              width: '320px', height: '320px',
              borderRadius: '50%',
              border: '2px dashed var(--border-color)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 24px 60px rgba(245,158,11,0.25)',
            }}>
              <FoodImg
                src={PHOTOS.hotangOriginal}
                alt="Hotang Original"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Overlay tint */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 40% 35%, rgba(245,158,11,0.18), transparent 70%)',
              }} />
            </div>

            {/* Floating badge – Lagi Hits */}
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

            {/* Rating card */}
            <div style={{
              position: 'absolute', bottom: '10px', left: '-20px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '10px 14px',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-body)',
              boxShadow: '0 4px 20px var(--shadow-color)',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                overflow: 'hidden', flexShrink: 0,
                border: '2px solid var(--color-amber-400)',
              }}>
                <FoodImg
                  src={PHOTOS.avatarF1}
                  alt="Pelanggan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.85rem' }}>4.9 / 5.0</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>500+ ulasan</div>
              </div>
            </div>

            {/* Corndog mini card */}
            <div style={{
              position: 'absolute', top: '60%', right: '-40px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              overflow: 'hidden',
              width: '110px',
              boxShadow: '0 4px 20px var(--shadow-color)',
            }}>
              <div style={{ height: '60px', overflow: 'hidden' }}>
                <FoodImg
                  src={PHOTOS.corndogClassic}
                  alt="Corndog"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '8px 10px' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.75rem', fontFamily: 'var(--font-body)' }}>Corndog</div>
                <div style={{ color: 'var(--color-amber-500)', fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-body)' }}>Rp 15.000</div>
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

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <div style={{
        backgroundColor: 'var(--color-amber-500)',
        padding: '12px 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div className="animate-marquee" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-hand)', fontSize: '1.5rem', color: 'white', padding: '0 2rem' }}>
              🌭 Hotang Original &nbsp;•&nbsp; 🌽 Corndog Crispy &nbsp;•&nbsp; 🧀 Hotang Mozza &nbsp;•&nbsp; 🥔 Hotdog Kentang Premium &nbsp;•&nbsp; ⭐ Rating 4.9 &nbsp;•&nbsp; 🔥 Lagi Hits! &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── MENU HIGHLIGHTS ──────────────────────────────────────────────── */}
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
                overflow: 'hidden',
                position: 'relative',
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
                {/* Photo */}
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <FoodImg
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => e.style && (e.style.transform = 'scale(1.06)')}
                  />
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
                    pointerEvents: 'none',
                  }} />
                  {/* Badge on photo */}
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    backgroundColor: item.badgeColor,
                    color: 'white',
                    borderRadius: '9999px',
                    padding: '3px 12px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.05em',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}>
                    {item.badge}
                  </div>
                </div>

                {/* Text content */}
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
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
                      boxShadow: `0 4px 12px ${item.badgeColor}55`,
                    }}>
                      Pesan →
                    </Link>
                  </div>
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

      {/* ── WHY HOTANG ───────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-primary)', margin: '0 0 12px' }}>
              Kenapa Pilih Hotang?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {whyItems.map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Photo top */}
                <div style={{ height: '130px', overflow: 'hidden', position: 'relative' }}>
                  <FoodImg
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent 60%)',
                  }} />
                </div>
                {/* Text */}
                <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', margin: '0 0 8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Real avatar photo */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    overflow: 'hidden', flexShrink: 0,
                    border: '2px solid var(--color-amber-400)',
                  }}>
                    <FoodImg
                      src={t.avatar}
                      alt={t.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
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

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Background food photo with overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <FoodImg
            src={PHOTOS.hotangOriginal}
            alt="CTA background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(245,158,11,0.92) 0%, rgba(234,88,12,0.95) 100%)',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', margin: '0 0 16px' }}>
            Lapar? Yuk Pesan Sekarang!
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', margin: '0 0 2rem', lineHeight: 1.6 }}>
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
