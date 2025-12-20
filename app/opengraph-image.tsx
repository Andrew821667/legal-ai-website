import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Legal AI PRO - Автоматизация юридической работы на базе ИИ'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            fontSize: '60px',
          }}
        >
          {'⚖️'.repeat(50)}
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              fontSize: 120,
              marginBottom: 30,
            }}
          >
            ⚖️
          </div>

          {/* Brand name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#f59e0b',
              marginBottom: 20,
              letterSpacing: '4px',
              fontFamily: 'sans-serif',
            }}
          >
            Legal AI PRO
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: '#e2e8f0',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
              fontFamily: 'sans-serif',
            }}
          >
            Автоматизация юридической работы на базе ИИ
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: 40,
              fontSize: 24,
              color: '#94a3b8',
              fontFamily: 'sans-serif',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🤖</span>
              <span>YandexGPT</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>⚡</span>
              <span>GigaChat</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🚀</span>
              <span>Claude</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: '#64748b',
            fontFamily: 'sans-serif',
          }}
        >
          legalaipro.ru
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
