import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#202020] h-screen w-screen text-white'>
      <App />
    </div>
  </React.StrictMode>,
)
