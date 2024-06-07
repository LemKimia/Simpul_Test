import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/routes'
import '@/styles/index.css'
import '@/styles/bubble.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
