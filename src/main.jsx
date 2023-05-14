import React from 'react'
import ReactDOM from 'react-dom/client'

import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { initialOptions } from './config/index.js'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider options={initialOptions}>
    <App />
  </PayPalScriptProvider>

)
