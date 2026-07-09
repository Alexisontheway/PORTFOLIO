export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '5%',
          left: '55%',
          borderRadius: '50%',
          background: 'rgba(234, 255, 0, 0.04)',
          filter: 'blur(120px)',
          animation: 'floatOrb 10s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          top: '50%',
          left: '5%',
          borderRadius: '50%',
          background: 'rgba(234, 255, 0, 0.025)',
          filter: 'blur(100px)',
          animation: 'floatOrb 14s ease-in-out infinite reverse',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          bottom: '10%',
          right: '10%',
          borderRadius: '50%',
          background: 'rgba(234, 255, 0, 0.02)',
          filter: 'blur(80px)',
          animation: 'floatOrb 18s ease-in-out infinite',
        }}
      />
    </div>
  )
}