import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterApp } from './useState/CounterApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-black h-screen text-white w-screen'>
      {/* <App /> */}
      <CounterApp />
    </div>
  </React.StrictMode>,
)
