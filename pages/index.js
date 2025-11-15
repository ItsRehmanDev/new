import { useEffect, useState } from 'react'

export default function Home() {
  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then((r) => r.json())
      .then((d) => setMsg(`${d.message} (server time: ${d.time})`))
      .catch(() => setMsg('Could not reach API'))
  }, [])

  const callApi = async () => {
    try {
      const r = await fetch('/api/hello')
      const d = await r.json()
      setMsg(`${d.message} (server time: ${d.time})`)
    } catch (e) {
      setMsg('Error calling API')
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      <h1>Next.js Frontend</h1>
      <p>API response: {msg}</p>
      <button onClick={callApi} style={{ padding: '8px 12px' }}>
        Call API
      </button>
      <p style={{ marginTop: 20, color: '#666' }}>This app demonstrates a frontend page calling a Next.js API route. Deploy to Vercel to verify both frontend and backend deploy.</p>
    </div>
  )
}
