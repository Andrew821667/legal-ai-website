import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {/* Scales icon */}
        <div
          style={{
            fontSize: 80,
            marginBottom: 10,
          }}
        >
          ⚖️
        </div>
        {/* LAI text */}
        <div
          style={{
            fontSize: 32,
            color: '#f59e0b',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            letterSpacing: '2px',
          }}
        >
          LAI
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
