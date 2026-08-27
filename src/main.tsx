import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import logo from './assets/logo.png'

document.querySelector('link[rel="icon"]')?.setAttribute('href', logo)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)