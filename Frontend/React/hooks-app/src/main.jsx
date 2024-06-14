import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CustomForm } from './useEffect/CustomForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-black h-screen text-white w-screen flex items-center justify-center'>
      {/* <App /> */}
      {/* <CounterApp /> */}
      { /* <SimpleForm /> */}
      <CustomForm />
    </div>
  </React.StrictMode>,
)
