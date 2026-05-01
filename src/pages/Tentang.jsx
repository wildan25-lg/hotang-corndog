export default function Tentang() {
  const milestones = [
    { year: '2022', label: 'Hotang Berdiri', desc: 'Dimulai dari dapur rumahan dengan modal Rp 500.000 dan semangat juang tinggi.' },
    { year: '2023', label: 'Berkembang', desc: 'Resep sempurna ditemukan! Pelanggan mulai berdatangan lewat rekomendasi mulut ke mulut.' },
    { year: '2024', label: 'Go Digital', desc: 'Masuk media sosial, membuka pesanan online. Ribuan porsi terjual dalam setahun.' },
    { year: '2025', label: 'Makin Hits!', desc: 'Ekspansi menu, ratusan pelanggan setia, dan visi membuka cabang pertama.' },
  ]

  const values = [
    { icon: '❤️', title: 'Dibuat dengan Cinta', desc: 'Setiap produk kami dibuat dengan penuh dedikasi dan rasa sayang kepada pelanggan.' },
    { icon: '🌿', title: 'Bahan Berkualitas', desc: 'Kami memilih bahan-bahan segar dan berkualitas tanpa kompromi untuk kesehatan kamu.' },
    { icon: '🤝', title: 'Jujur & Transparan', desc: 'Harga jelas, bahan jelas, proses jelas. Tidak ada yang disembunyikan.' },
    { icon: '🚀', title: 'Terus Berinovasi', desc: 'Selalu menghadirkan menu baru dan varian menarik sesuai selera pelanggan.' },
  ]

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero */}
      <div style={{
        padding: '5rem 1.5rem 4rem',
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          fontSize: '20rem', opacity: 0.05, lineHeight: 1,
          pointerEvents: 'none', userSelect: 'none',
          fontFamily: 'serif',
        }}>🌭</div>

        <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative' }}>
          <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--color-amber-500)' }}>
            Cerita kami
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--text-primary)',
            margin: '8px 0 1.5rem',
            lineHeight: 1.1,
          }}>
            Dari Dapur Rumahan<br />
            <em style={{ color: 'var(--color-amber-500)' }}>Menuju Ribuan Hati</em>
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            margin: '0 0 1rem',
          }}>
            <strong>Hotang</strong> lahir dari mimpi sederhana — menciptakan camilan yang enak, terjangkau, dan bikin nagih. Berawal dari eksperimen di dapur kecil dengan kentang dan sosis, kini Hotang hadir dengan ragam pilihan yang dicintai ratusan pelanggan.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
          }}>
            Kami percaya bahwa makanan enak tidak harus mahal. Dengan kentang segar pilihan dan sosis berkualitas, setiap gigitan Hotang adalah pengalaman yang tak terlupakan.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{
        backgroundColor: 'var(--color-amber-500)',
        padding: '2rem 1.5rem',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          {[
            { num: '500+', label: 'Pelanggan Setia' },
            { num: '3', label: 'Tahun Berkarya' },
            { num: '4.9★', label: 'Rating Rata-rata' },
            { num: '1000+', label: 'Porsi Terjual' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2rem', color: 'white' }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--text-primary)', margin: 0 }}>
              Perjalanan Hotang
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'var(--border-color)',
              transform: 'translateX(-50%)',
            }} />

            {milestones.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '2.5rem',
                position: 'relative',
              }}>
                {/* Center dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '1.5rem',
                  transform: 'translate(-50%, -50%)',
                  width: '14px', height: '14px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-amber-500)',
                  border: '3px solid var(--bg-primary)',
                  zIndex: 1,
                }} />

                <div style={{
                  width: '44%',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  marginRight: i % 2 === 0 ? 0 : undefined,
                  marginLeft: i % 2 === 0 ? undefined : 0,
                }} className="timeline-card">
                  <div style={{ fontFamily: 'var(--font-hand)', fontSize: '1.5rem', color: 'var(--color-amber-500)', marginBottom: '4px' }}>
                    {m.year}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 6px' }}>
                    {m.label}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .timeline-card { width: 90% !important; margin-left: auto !important; margin-right: 0 !important; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--text-primary)', margin: 0 }}>
              Nilai-Nilai Kami
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', margin: '0 0 10px' }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--text-primary)', margin: '0 0 1rem' }}>
            Tim di Balik Hotang
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 3rem' }}>
            Kami adalah tim kecil yang bersemangat besar. Setiap produk dibuat dengan tangan sendiri, penuh cinta, dan komitmen terhadap kualitas.
          </p>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { avatar: '👨‍🍳', name: 'Udin', role: 'Founder & Head Chef', desc: 'Pencinta camilan yang mengubah hobi jadi bisnis nyata.' },
              { avatar: '👩‍💼', name: 'Diana', role: 'Marketing & Media Sosial', desc: 'Memastikan Hotang dikenal dan dicintai semua orang.' },
            ].map((member, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '2rem',
                width: '240px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.avatar}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0 0 4px' }}>
                  {member.name}
                </h3>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600,
                  color: 'var(--color-amber-500)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                  {member.role}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
