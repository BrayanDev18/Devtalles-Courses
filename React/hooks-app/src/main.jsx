import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterApp } from './useState/CounterApp.jsx'
import { SimpleForm } from './useEffect/SimpleForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-black h-screen text-white w-screen flex items-center justify-center'>
      {/* <App /> */}
      {/* <CounterApp /> */}
      <SimpleForm />
    </div>
  </React.StrictMode>,
)
