import { useState } from 'react'

export default function Kontak() {
  const [form, setForm] = useState({ nama: '', telp: '', pesan: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.nama || !form.pesan) return
    const text = `Halo Hotang! Nama saya ${form.nama}${form.telp ? ` (${form.telp})` : ''}. ${form.pesan}`
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ nama: '', telp: '', pesan: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginBottom: '6px',
    letterSpacing: '0.02em',
  }

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <div style={{
        padding: '4rem 1.5rem 3rem',
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center',
      }}>
        <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--color-amber-500)' }}>
          Ada pertanyaan?
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: 'var(--text-primary)',
          margin: '8px 0 12px',
        }}>
          Hubungi Kami
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
          Kami siap membantu kamu setiap hari
        </p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">

          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.8rem', color: 'var(--text-primary)', margin: '0 0 1.5rem' }}>
              Cara Menghubungi Kami
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                {
                  icon: '💬',
                  title: 'WhatsApp',
                  value: '0812-3456-7890',
                  sub: 'Respon cepat dalam 5 menit',
                  href: 'https://wa.me/6281234567890',
                  color: '#25D366',
                },
                {
                  icon: '📧',
                  title: 'Email',
                  value: 'hotang@email.com',
                  sub: 'Untuk pertanyaan detail atau kerjasama',
                  href: 'mailto:hotang@email.com',
                  color: 'var(--color-amber-500)',
                },
                {
                  icon: '📍',
                  title: 'Lokasi',
                  value: 'Jl. Rambipuji, Kebonsari, Balung Lor, Kec. Balung, Kabupaten Jember',
                  sub: 'Kota Anda, Indonesia',
                  href: 'https://www.google.com/maps/place/Alfamart+Raya+Balung/@-8.2724507,113.5379544,19.75z/data=!4m14!1m7!3m6!1s0x2dd68f886dbe9743:0x90c7a8f3442d222a!2sIndomaret+Raya+Balung+97!8m2!3d-8.2724676!4d113.5378637!16s%2Fg%2F11fzffnczs!3m5!1s0x2dd68f82775cb62d:0xdd0b927565142171!8m2!3d-8.2721724!4d113.5381191!16s%2Fg%2F11j2z6666f?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D',
                  color: 'var(--color-orange-500)',
                },
                {
                  icon: '⏰',
                  title: 'Jam Operasional',
                  value: 'Senin – Minggu',
                  sub: '17.00 – 22.00 WIB',
                  href: null,
                  color: 'var(--color-red-500)',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateX(0)' }}
                >
                  <div style={{
                    width: '44px', height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-secondary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                    flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                      {item.title}
                    </div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: item.color,
                        textDecoration: 'none',
                        display: 'block',
                        marginBottom: '2px',
                      }}>{item.value}</a>
                    ) : (
                      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{item.value}</div>
                    )}
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social media */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '1.5rem',
            }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 12px' }}>
                Ikuti Kami
              </h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { icon: '📸', label: 'Instagram', href: '#' },
                  { icon: '🎵', label: 'TikTok', href: '#' },
                  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/6281234567890' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    flex: 1,
                    textAlign: 'center',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-amber-400)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                  >
                    <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '2rem',
          }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', margin: '0 0 1.5rem' }}>
              Kirim Pesan
            </h2>

            {submitted && (
              <div style={{
                backgroundColor: '#dcfce7',
                border: '1px solid #86efac',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: '#15803d',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                ✅ Pesan terkirim! Kamu akan diarahkan ke WhatsApp.
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Nama Kamu *</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan nama kamu"
                  value={form.nama}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--color-amber-400)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div>
                <label style={labelStyle}>No. WhatsApp (opsional)</label>
                <input
                  type="tel"
                  name="telp"
                  placeholder="08xx-xxxx-xxxx"
                  value={form.telp}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--color-amber-400)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div>
                <label style={labelStyle}>Pesan *</label>
                <textarea
                  name="pesan"
                  placeholder="Tulis pertanyaan, pesanan, atau saran kamu di sini..."
                  value={form.pesan}
                  onChange={handleChange}
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--color-amber-400)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.nama || !form.pesan}
                style={{
                  background: form.nama && form.pesan
                    ? 'linear-gradient(135deg, var(--color-amber-500), var(--color-orange-500))'
                    : 'var(--bg-secondary)',
                  color: form.nama && form.pesan ? 'white' : 'var(--text-muted)',
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: form.nama && form.pesan ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  transition: 'all 0.2s',
                  boxShadow: form.nama && form.pesan ? '0 6px 20px rgba(245,158,11,0.35)' : 'none',
                }}
                onMouseEnter={e => { if (form.nama && form.pesan) e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                💬 Kirim via WhatsApp
              </button>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                Pesan akan dikirim langsung ke WhatsApp kami untuk respon lebih cepat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
